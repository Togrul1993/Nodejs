const express = require('express');
const morgan = require('morgan');


const app = express();

app.set('view engine', 'ejs');


app.listen(5050);

app.use(express.static('public'))

app.use(morgan('tiny'));



app.get('/', (req, res) => {
	res.render('index', { title: "AnaSayfa" });
});

app.get('/about', (req, res) => {
	res.render('about', { title: "Haqqimizda" });
});

app.get('/about-us', (req, res) => {
	res.render('about', { title: "Haqqimizda" });
});


app.get('/blog', (req, res) => {
	res.render('blog', { title: "Blog" });
});

app.get('/contact', (req, res) => {
	res.render('contact', { title: "Contact" });
});

app.use((req, res) => {
	res.status(404).render('404', { title: "Eror" });
});