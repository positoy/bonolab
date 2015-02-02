var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
//	res.send('<h1>Hello World!</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('chat', function(msg){
		console.log(msg);

		// for all
		io.emit('everyone', {for: 'everyone'});

		// broadcast
		socket.broadcast.emit('hi');
	});

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(3000, function(){
	console.log('listening on localhost:3000');
});
