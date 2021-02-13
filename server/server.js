var http = require('http');
const fs = require('fs');


var server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	fs.readFile('./html/index.html', (err, data) => {
		if (err) {
			console.log(err);
			res.end()
		} else {
			//res.write(data);
			res.end(data);
		}
	});
});

server.listen("5555", 'localhost', () => {
	console.log("5555 port dinlenir");
});