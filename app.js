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
    'statusTypes': { // visible statuses: other are online and offline
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
        desks[d].chairs[c] = { status: 'offline', name: '?' };
    }

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
        if (chairStatuses.every(x => x == 'done')){ // all done
            desks[deskId].status = 'done';
        } else if (chairStatuses.every(x => x == 'offline')){ // all no status
            desks[deskId].status = 'offline';
        } else {
            if (chairStatuses.some(x => x == 'not_done')){ // some working
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
        console.info('███ deskStatusChanged', 'desk', deskId, desks[deskId].status);
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

    .get('/teacher', (req, res) =>{
        res.render('teacher.njk', {
            room: room,
        });
    })

    .get('/desk/:deskId/chair/:chairId/', (req, res) =>{
        res.render('chair.njk', {
            room: room,
            chair: desks[req.params.deskId].chairs[req.params.chairId],
        });
    })
;

io
    .set('origins', '*:*')

    .on('connection', socket =>{
        socket
            .on('auth-request', (deskId, chairId) =>{
                let chair = desks[deskId].chairs[chairId];

                if (chair){ // is this a existing chair?
                    chair.socketId = socket.id; // save socket.id to a chair
                    chair.status = 'online'; // save status
                    io.emit('auth-success', room);
                    io.emit('statusChanged', deskId, chairId, chair.status, room);
                    console.info('+++ auth-success', deskId, chairId, chair.name);
                    checkDeskStatus(deskId);
                }
            })

            // on disconnection find which chair disconnected and clear it's properties
            .on('disconnect', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        if (chair.socketId == socket.id){
                            chair.status = 'offline';
                            delete chair.socketId;
                            io.emit('statusChanged', d, c, chair.status, room);
                            io.emit('disconnected', room);
                            console.info('--- disconnected', d, c);
                            checkDeskStatus(d);
                        }
                    }
                }
            })

            .on('setStudentName', (deskId, chairId, studentName) =>{
                let chair = desks[deskId].chairs[chairId];

                chair.name = studentName;
                io.emit('studentNameSet', deskId, chairId, studentName, room); // emit new name
                console.info('\\\ setStudentName', deskId, chairId, studentName);
            })

            .on('statusChange', (deskId, chairId, statusType) =>{
                let chair = desks[deskId].chairs[chairId];

                chair.status = statusType; // save status
                io.emit('statusChanged', deskId, chairId, statusType, room); // emit new status
                console.info('>>> statusChanged', chair.name, statusType);
                checkDeskStatus(deskId);
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
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];

                        chair.status = 'online';
                        io.emit('statusChanged', d, c, chair.status, room);
                        console.info('!!! lectureStart', chair.name);
                    }
                    checkDeskStatus(d);
                }
                room.roomStatus = 'lecturing';
                io.emit('lectureStarted', room.roomStatus);
            })

            .on('workStart', () =>{
                for (let d in desks){
                    for (let c in desks[d].chairs){
                        let chair = desks[d].chairs[c];
                        if (chair.socketId){
                            chair.status = 'not_done';
                        } else {
                            chair.status = 'offline';
                        }
                        io.emit('statusChanged', d, c, chair.status, room);
                        console.info('/// workStart', chair, chair.status);
                    }
                    checkDeskStatus(d);
                }
                room.roomStatus = 'working';
                io.emit('workStarted', room.roomStatus);
            });
    })
;

server.listen(app.get('port'));