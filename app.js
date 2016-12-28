const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const nunjucks = require('nunjucks');
const console = require('better-console');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

let room = {
    'size': 2, // room is always a square, this is a number of desks vertically/horizontally
    'roomStatus': 'appstarted', // other statuses: 'lecturing' and 'working'
    'statusTypes': {
        'not_done': { 'label': 'Pracuju' },
        'help': { 'label': 'Chci poradit' },
        'done': { 'label': 'Hotovo' },
    },
    'deskTypes': {
        0: { 'chairs': 4, 'shape': 'square' },
        1: { 'chairs': 2, 'shape': 'square' },
    },
    'desks': {
        0: { 'name': '', 'coach': 'Kamila', 'layout': { 'position': { 'x': 0, 'y': 0 }, 'rotation': 0, 'deskType': 0 } },
        1: { 'name': '', 'coach': 'Karel', 'layout': { 'position': { 'x': 1, 'y': 1 }, 'rotation': 0, 'deskType': 1 } },
        2: { 'name': '', 'coach': 'Klára', 'layout': { 'position': { 'x': 0, 'y': 1 }, 'rotation': 0, 'deskType': 1 } },
    },
};

let desks = room.desks;

for (let d in desks){

    // initial desk status
    desks[d].status = 'empty';

    // add layout
    Object.assign(desks[d].layout, room.deskTypes[desks[d].layout.deskType]);

    // add empty chairs
    desks[d].chairs = {};
    for (let c = 0; c < desks[d].layout.chairs; c++){
        desks[d].chairs[c] = { status: '' };
    }

    // compute values for positioning in layout
    desks[d].layout.position.x = desks[d].layout.position.x * 100 / room.size;
    desks[d].layout.position.y = desks[d].layout.position.y * 100 / room.size;
    desks[d].layout.dimensions = {};
    desks[d].layout.dimensions.x = 100 / room.size;
    desks[d].layout.dimensions.y = 100 / room.size;
}

function checkDeskStatus(deskId){
    // make an array of chair statuses (easier to work with)
    let i = 0, chairStatuses = [];
    for (let chair in desks[deskId].chairs){
        if (desks[deskId].chairs[chair].socketId){
            chairStatuses[i++] = desks[deskId].chairs[chair].status; // fill chairStatuses only with non-empty values
        }
    }

    let originalDeskStatus = desks[deskId].status; // save original status

    if (chairStatuses.length){ // not empty table

        if (chairStatuses.some(x => x == 'not_done')){ // some working
            desks[deskId].status = 'not_done';
        }

        if (chairStatuses.some(x => x == 'help')){ // some need help
            desks[deskId].status = 'help';
        }

        if (chairStatuses.every(x => x == 'done')){ // all done
            desks[deskId].status = 'done';
        }

        if (chairStatuses.every(x => x == '')){ // all no status
            desks[deskId].status = 'init';
        }

    } else {
        desks[deskId].status = 'empty'; // empty table
    }

    if (originalDeskStatus != desks[deskId].status){ // if the status has changed
        io.emit('deskStatusChanged', deskId, desks[deskId].status); // emit new status
        console.info('>D> deskStatusChanged', 'desk', deskId, desks[deskId].status);
    }
}

app
    .set('port', (process.env.PORT || 3000))

    .use(express.static(__dirname + '/static'))

    .get('/', (req, res) =>{
        res.render('index.njk', {
            room: room,
        });
    })

    .get('/desk/:deskId/chair/:chairId/', (req, res) =>{
        res.render('chair.njk', {
            room: room,
            desk: desks[req.params.deskId],
            chair: desks[req.params.deskId].chairs[req.params.chairId],
        });
    })

    .get('/teacher', (req, res) =>{
        res.render('teacher.njk', {
            room: room,
        });
    })

;

io
    .set('origins', '*:*')

    .on('connection', socket =>{
        socket
            .on('auth-request', (deskId, chairId) =>{
                if (desks[deskId].chairs[chairId]){ // is this a existing chair?
                    desks[deskId].chairs[chairId].socketId = socket.id; // save socket.id to a chair
                    io.emit('auth-success', deskId, chairId);
                    io.emit('statusChanged', deskId, chairId, '');
                    console.info('+++ auth-success', deskId, chairId, desks[deskId].chairs[chairId].name);
                    checkDeskStatus(deskId);
                }
            })

            // on disconnection find which chair disconnected and clear it's properties
            .on('disconnect', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        if (desks[d].chairs[c].socketId == socket.id){
                            desks[d].chairs[c].status = '';
                            delete desks[d].chairs[c].socketId;
                            io.emit('statusChanged', d, c, '');
                            io.emit('disconnected', d, c);
                            console.info('--- disconnected', d, c);
                            checkDeskStatus(d);
                        }
                    }
                }
            })

            .on('setStudentName', (deskId, chairId, studentName) =>{
                desks[deskId].chairs[chairId].name = studentName;
                io.emit('studentNameSet', deskId, chairId, studentName); // emit new name
                console.info('\\\ setStudentName', deskId, chairId, studentName);
            })

            .on('statusChange', (deskId, chairId, statusType) =>{
                desks[deskId].chairs[chairId].status = statusType; // save status
                io.emit('statusChanged', deskId, chairId, statusType); // emit new status
                console.info('>>> statusChanged', desks[deskId].chairs[chairId].name, statusType);
                checkDeskStatus(deskId);
            })

            .on('checkStatus', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        if (desks[d].chairs[c].socketId && desks[d].chairs[c].status != 'done'){
                            io.to(desks[d].chairs[c].socketId).emit('checkStatusAlert');
                            console.info('??? checkStatus', desks[d].chairs[c].name, desks[d].chairs[c].status);
                        }
                    }
                }
            })

            .on('lectureStart', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        desks[d].chairs[c].status = '';
                        io.emit('statusChanged', d, c, desks[d].chairs[c].status);
                        console.info('!!! lectureStart', desks[d].chairs[c]);
                    }
                    checkDeskStatus(d);
                }
                room.roomStatus = 'lecturing';
                io.emit('lectureStarted', room.roomStatus);
            })

            .on('workStart', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        if (desks[d].chairs[c].socketId){
                            desks[d].chairs[c].status = 'not_done';
                        } else {
                            desks[d].chairs[c].status = '';
                        }
                        io.emit('statusChanged', d, c, desks[d].chairs[c].status);
                        console.info('/// workStart', desks[d].chairs[c], desks[d].chairs[c].status);
                    }
                    checkDeskStatus(d);
                }
                room.roomStatus = 'working';
                io.emit('workStarted', room.roomStatus);
            });
    })
;

server.listen(app.get('port'));