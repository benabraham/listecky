const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Timer = require('tiny-timer');
const console = require('better-console');
const moment = require('moment');


let locale = 'en';

/*
 * moment library set locale
 */
let now = moment().locale(locale);



/*
 * nunjucks templates
 */
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});



/*
 * markdown renderer
 */
let marked = require('marked');

// define custom renderer (add target="_blank" to all links)
let customRenderer = new marked.Renderer();

customRenderer.link = function(href, title, text){
    let out = '<a href="' + href + '" target="_blank" rel="noopener noreferrer"';
    if (title) out += ' title="' + title + '"';
    out += '>' + text + '</a>';
    return out;
};

// set options to markdown renderer
marked.setOptions({
    renderer: customRenderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});



/*
 * quick and dirty i18n
 */
let strings = {
    'not_done': { cs: 'Pracuju', en: 'Working' },
    'help': { cs: 'Chci poradit', en: 'I need help' },
    'done': { cs: 'Hotovo', en: 'Done' },
};

function _(string){
    let translation = 'not translated';
    if (strings[string][locale]) translation = strings[string][locale];
    return translation;
};


/*
 * room object
 */
let room = {
    'roomStatus': 'initial', // other statuses: 'lecturing', 'working' and 'break'
    'statusTypes': { // only statuses with labels and own buttons, there is also online and offline status
        'not_done': { 'label': _('not_done') },
        'help': { 'label': _('help') },
        'done': { 'label': _('done') },
    },
    'size': 4, // room is always a square, this is a number of desks vertically/horizontally
    'desks': {
        1: { 'name': '1-chair square', 'coach': '', 'layout': { 'position': { 'x': 0, 'y': 1 }, 'rotation': 0, 'chairs': 1, 'shape': 'square' } },
        2: { 'name': '2-chair square', 'coach': '', 'layout': { 'position': { 'x': 1, 'y': 1 }, 'rotation': 0, 'chairs': 2, 'shape': 'square' } },
        3: { 'name': '3-chair square', 'coach': '', 'layout': { 'position': { 'x': 2, 'y': 1 }, 'rotation': 0, 'chairs': 3, 'shape': 'square' } },
        4: { 'name': '4-chair square', 'coach': '', 'layout': { 'position': { 'x': 3, 'y': 1 }, 'rotation': 0, 'chairs': 4, 'shape': 'square' } },

        5: { 'name': '1-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 0, 'y': 2 }, 'rotation': 0, 'chairs': 1, 'shape': 'rectangle' } },
        6: { 'name': '2-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 1, 'y': 2 }, 'rotation': 0, 'chairs': 2, 'shape': 'rectangle' } },
        7: { 'name': '3-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 3, 'y': 2 }, 'rotation': 0, 'chairs': 3, 'shape': 'rectangle' } },
        8: { 'name': '4-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 0, 'y': 3 }, 'rotation': 0, 'chairs': 4, 'shape': 'rectangle' } },
        9: { 'name': '5-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 1, 'y': 3 }, 'rotation': 0, 'chairs': 5, 'shape': 'rectangle' } },
        10: { 'name': '6-chair rectangle', 'coach': '', 'layout': { 'position': { 'x': 3, 'y': 3 }, 'rotation': 0, 'chairs': 6, 'shape': 'rectangle' } },

        11: { 'name': '4-chair circle', 'coach': '', 'layout': { 'position': { 'x': 2, 'y': 2 }, 'rotation': 0, 'chairs': 4, 'shape': 'circle' } },
        12: { 'name': '2-chair circle', 'coach': 'rotated', 'layout': { 'position': { 'x': 2, 'y': 3 }, 'rotation': 45, 'chairs': 2, 'shape': 'circle' } },
    },
};


/*
 * set up desks
 */
let desks = room.desks;
const defaultName = 'free chair';

for (let d in desks){

    // initial desk status
    desks[d].status = 'empty';

    // add empty chairs
    desks[d].chairs = {};
    for (let c = 0; c < desks[d].layout.chairs; c++){
        desks[d].chairs[c] = { status: 'offline', name: defaultName };
    }
}



/*
 * emits event statusChanged if chair status has changed
 */
function statusChanged(deskId, chairId, newStatus, originalStatus = desks[deskId].chairs[chairId].status){
    let chair = desks[deskId].chairs[chairId];
    if (newStatus != originalStatus){
        chair.status = newStatus;
        io.emit('statusChanged', deskId, chairId, newStatus, room);
        checkDeskStatus(deskId);

        console.log('>>> statusChanged', desks[deskId].chairs[chairId].name, 'from', originalStatus, 'to', newStatus, 'elapsed', stopwatch.time);
    }
}



/*
 * Check and sets desks status
 */
function checkDeskStatus(deskId){
    // make an array of chair statuses (easier to work with)
    let i = 0, chairStatuses = [];
    for (let chair in desks[deskId].chairs){
        if (desks[deskId].chairs[chair].socketId){
            chairStatuses[i++] = desks[deskId].chairs[chair].status; // fill chairStatuses only with non-empty values
        }
    }

    let originalDeskStatus = desks[deskId].status; // save original status

    if (chairStatuses.length){ // not an empty table
        if (chairStatuses.every(x => x == 'done')){ // all done
            desks[deskId].status = 'done';
        } else if (chairStatuses.every(x => x == 'offline')){ // all offline
            desks[deskId].status = 'offline';
        } else if (chairStatuses.every(x => x == 'online')){ // all online
            desks[deskId].status = 'online';
        } else {
            if (chairStatuses.some(x => x != 'done')){ // some not done
                desks[deskId].status = 'not_done';
            }

            if (chairStatuses.some(x => x == 'help')){ // some need help
                desks[deskId].status = 'help';
            }
        }
    } else {
        desks[deskId].status = 'empty'; // empty table
    }

    if (originalDeskStatus != desks[deskId].status){ // if the status has changed
        io.emit('deskStatusChanged', room); // emit new status
        console.info('▒▒▒ deskStatusChanged', 'desk', deskId, desks[deskId].status);
    }
}



/*
 * chat messages
 */

let chatMessages = [];

// send a chat message
function addChatMessage(chatMessage){
    if (chatMessage){
        console.info('>>> chatMessageSent', chatMessage);

        chatMessages.push(chatMessage);
        io.emit('chatMessagesSent', chatMessages.map(formatMessages));
    }
}

// format chat messages
function formatMessages(msg){
    return marked(msg);
}



/*
 * Countdown timer
 */
let countdownTimer = new Timer({ interval: 1900, stopwatch: false });

countdownTimer
    .on('tick', (breakTimeLeft) =>{
        io.volatile.emit('breakTimeChanged', room.roomStatus, breakTimeLeft);
    })

    .on('done', () =>{
        console.info('%%% breakTimeEnded');
        stopCountdownTimer(true);
    });

// stops timer and sets everything
function stopCountdownTimer(isByTimer){
    countdownTimer.stop();
    room.roomStatus = 'initial';
    io.emit('breakTimeEnded', room.roomStatus, isByTimer);
    console.info('stopCountdownTimer', countdownTimer.status);
}



/*
 * Stopwatch
 */
let stopwatch = new Timer({ interval: 9900, stopwatch: true });
let stopwatchMaxTime = 10 * 60 * 60 * 1000; // Timer requires a time set: 10 hours should be more than enough

stopwatch
    .on('tick', (elapsed) =>{
        io.emit('stopwatchTimeChanged', elapsed);
    })
    .start(stopwatchMaxTime);

function restartStopwatch(){
    console.error('this should be saved somewhere…', room.roomStatus, stopwatch.time);
    stopwatch.stop();
    stopwatch.start(stopwatchMaxTime);
}



/*
 * express app
 */
app
    .set('port', (process.env.PORT || 3000))

    .use(express.static(__dirname + '/static'))

    .get('/', (req, res) =>{
        res.render('index.njk', {
            room: room,
        });
    })

    .get('/teacher', (req, res) =>{
        res.render('lector.njk', {
            room: room,
        });
    })

    .get('/desk/:deskId/chair/:chairId/', (req, res) =>{
        res.render('chair.njk', {
            room: room,
            deskId: req.params.deskId,
            chairId: req.params.chairId,
            chair: desks[req.params.deskId].chairs[req.params.chairId],
        });
    })
;



/*
 * Socket.io
 */
io
    .set('origins', '*:*')

    .on('connection', socket =>{
        socket

            .on('auth-request', (deskId, chairId) =>{
                let chair = desks[deskId].chairs[chairId];

                if (chair){ // is this a existing chair?
                    chair.socketId = socket.id; // save socket.id to a chair
                    if (chair.status == 'offline') statusChanged(deskId, chairId, 'online');
                    io.emit('auth-success', room);
                    console.info('*** auth-success', deskId, chairId, chair.name);
                }
            })


            // on disconnection find which chair disconnected and clear it's properties
            .on('disconnect', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId == socket.id){
                            delete chair.socketId;
                            statusChanged(d, c, 'offline');
                            io.emit('disconnected', room);
                            console.info('††† disconnected', d, c);
                        }
                    }
                }
            })


            .on('setStudentName', (deskId, chairId, studentName) =>{
                let chair = desks[deskId].chairs[chairId];
                chair.name = studentName;

                io.emit('studentNameSet', deskId, chairId, studentName, room); // emit new name
                console.info('•••', deskId, chairId, studentName);
            })


            .on('statusChange', (deskId, chairId, statusType) =>{
                statusChanged(deskId, chairId, statusType);
            })


            .on('checkStatus', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId && chair.status != 'done'){
                            io.to(chair.socketId).emit('checkStatusAlert');
                            console.info('??? checkStatus', chair.name, chair.status);
                        }
                    }
                }
            })


            .on('lectureStart', () =>{
                restartStopwatch();
                stopCountdownTimer(false);

                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId){
                            statusChanged(d, c, 'online');
                            console.info('!!! lectureStart', chair.name);
                        }
                    }
                    checkDeskStatus(d);
                }
                room.roomStatus = 'lecturing';
                io.emit('lectureStarted', room.roomStatus);
            })


            .on('workStart', () =>{
                restartStopwatch();
                stopCountdownTimer(false);

                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId){
                            statusChanged(d, c, 'not_done');
                            console.info('/// workStart', chair.name, chair.status);
                        } else {
                            statusChanged(d, c, 'offline');
                        }
                    }
                }
                room.roomStatus = 'working';
                io.emit('workStarted', room.roomStatus);
            })


            .on('breakStart', (breakLength) =>{
                restartStopwatch();
                stopCountdownTimer(false);

                let breakTimeLeft = breakLength * 60 * 1000; // to milliseconds

                room.roomStatus = 'break';

                addChatMessage('###### break ends at ' + now.add(breakLength, 'minutes').format('HH:mm'));

                io.emit('breakStarted', room.roomStatus, breakTimeLeft);

                countdownTimer.start(breakTimeLeft);

                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId){
                            chair.status = 'online';
                            statusChanged(d, c, 'online');
                            console.info('……… breakStarted', breakLength, chair.name);
                        }
                    }
                    checkDeskStatus(d);
                }
            })



            .on('chatMessageSend', (chatMessage) =>{
                addChatMessage(chatMessage);
            })


            .on('chatLastMessageDelete', () =>{
                console.info('××× chatLastMessageDelete');

                chatMessages.pop();
                io.emit('chatMessagesSent', chatMessages.map(formatMessages));
            })


            .on('getChatMessages', () =>{
                io
                    .to(socket.id)
                    .emit('chatMessagesSent', chatMessages.map(formatMessages));
            })



            .on('getRoom', () =>{
                io
                    .to(socket.id)
                    .emit('roomSent', room);
            })


            .on('keepAlive', () =>{
                console.info('pinged by', socket.id);
            })
        ;
    })
;

server.listen(app.get('port'));

