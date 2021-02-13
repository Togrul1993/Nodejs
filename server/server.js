var http = require('http');
const fs = require('fs');
const _ = require('lodash');



/*var server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.setHeader('Content-Type', 'text/html');

	let path = './html/';


	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/about-us':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			break;

		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}



	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			//res.write(data);
			res.end(data);
		}
	});
});

*/

/*server.listen("5555", 'localhost', () => {
	console.log("5555 port dinlenir...");
});
*/

//const arr = [15, 20, 25, 30, 36, 46, 89, 76];

/*
_.each(arr, (item, keys) => {
	console.log(keys, item);
});
*/