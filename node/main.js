var ws = require('nodejs-websocket');
var js = require('./packet.js');
var git = require('./git.js');



// load websocket
var server = ws.createServer( function(conn) {

	// open
	console.log("< new connection ~~");

	// process
	conn.on("text", function(str){
		// input	: str
		// output	: conn.sendText( str );

		
	});

	// close
	conn.on("close", function(code, reason) {
		console.log("~~ connection closed >");
	});

}).listen(8001)