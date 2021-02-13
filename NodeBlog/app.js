const express = require('express');

const app = express();

app.listen(5050);

app.get('/', (req, res) => {
	res.status(200).sendFile('./public/index.html', { root: __dirname });
});


app.get('/about', (req, res) => {
	res.status(200).sendFile('./public/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

app.use((req, res) => {
	res.status(404).sendFile('./public/404.html', { root: __dirname });
})