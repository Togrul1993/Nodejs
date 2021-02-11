const http = require('http');

const server = http.createServer((req, res) => {
	console.log("Istek gonder")
})

server.listen(5000, 'localhost', () => {
	console.log(`5000 portu dinlenir`)
})