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

const config = {
    'statusTypes': {
        'not_done': { 'verboseName': 'Pracuju' },
        'help': { 'verboseName': 'Chci poradit' },
        'done': { 'verboseName': 'Hotovo' }
    },
    'deskTypes': {
        0: { 'seats': 4, 'shape': 'square' },
        1: { 'seats': 6, 'shape': 'rectangle' },
        2: { 'seats': 4, 'shape': 'circle' },
        3: { 'seats': 3, 'shape': 'hexagon' }
    },
    'roomLayout': {
        width: 3,
        height: 3
    }
};

let classStatus = 'appstarted'; // others: lecturing and working

const desks = {
    0: { 'name': 'Funky Monkeys', 'coach': 'Andy', 'layout': { 'position': { 'x': 0, 'y': 0 }, 'rotation': 0, 'deskType': 0 } },
    1: { 'name': 'The Cleaners', 'coach': 'Vic', 'layout': { 'position': { 'x': 0, 'y': 1 }, 'rotation': 0, 'deskType': 0 } },
    2: { 'name': 'Les Miserables', 'coach': 'Alex', 'layout': { 'position': { 'x': 1, 'y': 1 }, 'rotation': 0, 'deskType': 0 } }
};

const students = {
    0: { 'desk': 0, 'name': 'Francine' },
    1: { 'desk': 0, 'name': 'Margaret' },
    2: { 'desk': 0, 'name': 'Maria' },
    3: { 'desk': 1, 'name': 'Nancy' },
    4: { 'desk': 1, 'name': 'Sharon' },
    5: { 'desk': 2, 'name': 'Michelle' },
    6: { 'desk': 2, 'name': 'Sarah' },
    7: { 'desk': 2, 'name': 'Cynthia' },
    8: { 'desk': 2, 'name': 'Rebecca' }
};

// set student's initial status
for (let s in students){
    students[s].status = '';
}

// add everything
for (let d in desks){
    desks[d].students = {};

    for (let s in students){
        if (students[s].desk == d){
            desks[d].students[s] = students[s];
        }
    }
    Object.assign(desks[d].layout, config.deskTypes[desks[d].layout.deskType]);

    desks[d].layout.position.x = desks[d].layout.position.x * 100 / config.roomLayout.width;
    desks[d].layout.position.y = desks[d].layout.position.y * 100 / config.roomLayout.height;
    desks[d].layout.dimensions = {};
    desks[d].layout.dimensions.x = 100 / config.roomLayout.width;
    desks[d].layout.dimensions.y = 100 / config.roomLayout.height;
}
console.log('\n\ndesk');
console.table(desks);

app
    .set('port', (process.env.PORT || 3000))

    .use(express.static(__dirname + '/static'))

    .get('/', (req, res) =>{
        res.render('index.njk', {
            desks: desks,
            statusTypes: config.statusTypes
        });
    })

    .get('/student/:id', (req, res) =>{
        res.render('student.njk', {
            student: students[req.params.id],
            statusTypes: config.statusTypes,
            classStatus: classStatus
        });
    })

    .get('/teacher', (req, res) =>{
        res.render('teacher.njk', {
            desks: desks,
            statusTypes: config.statusTypes,
            classStatus: classStatus
        });
    })
;

io
    .set('origins', '*:*')

    .on('connection', socket =>{
        socket
            .on('auth-request', (studentId) =>{
                if (students[studentId]){ // known user
                    students[studentId].socketId = socket.id; // save socket.id to user
                    io.emit('auth-success', studentId);
                    io.emit('statusChanged', studentId, ''); // to ensure correct status on student page refresh
                    console.info('+++ auth-success', students[studentId].name);
                }
            })

            .on('disconnect', () =>{
                let emitStatus = '';
                if (classStatus == 'working'){
                    emitStatus = 'not_done';
                }

                for (let s in students){
                    if (students[s].socketId == socket.id){
                        students[s].status = emitStatus;
                        delete students[s].socketId;
                        io.emit('statusChanged', s, emitStatus);
                        io.emit('disconnected', s);
                        console.info('--- disconnect', students[s].name);
                    }
                }
            })

            .on('statusChange', (studentId, statusType) =>{
                students[studentId].status = statusType; // save status
                io.emit('statusChanged', studentId, statusType); // emit new status
                console.info('>>> statusChanged', students[studentId].name, statusType);
            })

            .on('checkStatus', () =>{
                for (let s in students){
                    if (students[s].socketId && students[s].status != 'done'){
                        io.to(students[s].socketId).emit('checkStatusAlert');
                        console.info('??? checkStatus', students[s].name, students[s].status);
                    }
                }
            })

            .on('lectureStart', () =>{
                for (let s in students){
                    console.info('!!! lectureStart', students[s].name, students[s].status);
                    students[s].status = '';
                    io.emit('statusChanged', s, students[s].status);
                }
                classStatus = 'lecturing';
                io.emit('lectureStarted', classStatus);
            })

            .on('workStart', () =>{
                for (let s in students){
                    console.info('/// workStart', students[s].name, students[s].status);
                    students[s].status = 'not_done';
                    io.emit('statusChanged', s, students[s].status);
                }
                classStatus = 'working';
                io.emit('workStarted', classStatus);
            });
    })
;

server.listen(app.get('port'));