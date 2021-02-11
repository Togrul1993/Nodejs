var http = require('http');

var server = http.createServer((req, res) => {
	console.log(res);
});

server.listen("5555", 'localhost', () => {
	console.log("5555 port dinlenir");
});