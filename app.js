var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var server = require('http').Server(app);
var io = require('socket.io')(server);

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

var data = {
	"desks": [
		{ "id": 0, "name": "Funky Monkeys", "coach": "Andy" },
		{ "id": 1, "name": "The Cleaners", "coach": "Vic" },
		{ "id": 2, "name": "Les Miserables", "coach": "Alex" }
	],
	"students": [
		{ "id": 0, "desk": 0, "name": "Francine" },
		{ "id": 1, "desk": 0, "name": "Margaret" },
		{ "id": 2, "desk": 0, "name": "Maria" },
		{ "id": 3, "desk": 1, "name": "Nancy" },
		{ "id": 4, "desk": 1, "name": "Sharon" },
		{ "id": 5, "desk": 2, "name": "Michelle" },
		{ "id": 6, "desk": 2, "name": "Sarah" },
		{ "id": 7, "desk": 2, "name": "Cynthia" },
		{ "id": 8, "desk": 2, "name": "Rebecca" }
	]
};


var desks = data.desks;
var students = data.students;

var layout = [];

for (var i = 0; i < desks.length; i++){
	layout[i] = desks[i];
	layout[i].students = [];

	for (var x = 0; x < students.length; x++){

		students[x].status = "not_done";

		if (students[x].desk == i){
			layout[i]['students'].push(students[x]);
		}
	}
}

app
	.set('port', (process.env.PORT || 3000))

	.use(express.static(__dirname + '/static'))

	.get('/', function(req, res){

		res.render('index.njk', { layout: layout });
	})

	.get('/student/:id', function(req, res){
		var student = data.students[req.params.id];

		res.render('student.njk', { student: student });
	})

	.get('/teacher', function(req, res){
		res.render('teacher.njk', { layout: layout });
	});

io
	.set('origins', '*:*')

	.on('connection', function(socket){

		socket
			.on('auth-request', function(userId){
				if (students[userId]){ // known user
					students[userId].socketId = socket.id; // save socket.id to user
					io.emit('auth-success', userId);
				}
			})

			.on('disconnect', function(){
				for (var x = 0; x < students.length; x++){
					if (students[x].socketId == socket.id){
						students[x].status = 'not_done';
						delete students[x].socketId;
						io.emit('statusChanged', students[x].id, 'not_done');
						io.emit('disconnected', students[x].id);
					}
				}
			})

			.on('statusChange', function(studentId, statusType){
				students[studentId].status = statusType; // save status
				io.emit('statusChanged', studentId, statusType); // emit new status
			})

			.on('checkStatus', function(){
				for (var x = 0; x < students.length; x++){
					if (students[x].socketId && students[x].status != 'done'){
						io.to(students[x].socketId).emit('checkStatusAlert');
					}
				}
			})

			.on('resetStatus', function(){
				for (var x = 0; x < students.length; x++){
					students[x].status = 'not_done';
					io.emit('statusChanged', students[x].id, students[x].status, true)
				}
			})
		;
	});

server.listen(app.get('port'), function(){
	console.log('-------------------\n počúvám na ' + app.get('port') + ' \n-------------------');
});