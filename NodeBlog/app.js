const express = require('express');
let ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');


app.listen(5050);

app.get('/', (req, res) => {
	res.render('index');
});


app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

app.use((req, res) => {
	res.status(404).render('404');
})