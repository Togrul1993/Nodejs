const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');




const app = express();


const dbUrl = "mongodb+srv://togrul:togrul123456@cluster0.dred2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})
	.then((result) => console.log("Database Yuklendi"))
	.catch((err) => {
		console.log(err);
	})

app.listen(5000);

app.set('view engine', 'ejs');




app.use(express.static('public'))

app.use(morgan('tiny'));



app.get('/', (req, res) => {
	Blog.find()
		.then((result) => {
			res.render('index', { title: "Anasayfa", blogs: result.sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 }).splice(0, 6) });
		})
		.catch((err) => {
			console.log(err)
		})
});



app.get('/about', (req, res) => {
	res.render('about', { title: "Haqqimizda" });
});



app.get('/about-us', (req, res) => {
	res.render('about', { title: "Haqqimizda" });
});


app.get('/blog', (req, res) => {
	Blog.find()
		.then((result) => {
			res.render('blog', { title: "Blog", blogs: result });
		})
		.catch((err) => {
			console.log(err)
		})

});


app.get('/contact', (req, res) => {
	res.render('contact', { title: "Contact" });
});

app.get('/login', (req, res) => {
	res.render('login', { title: "Login" });
});

app.get('/singup', (req, res) => {
	res.render('singup', { title: "Sing Up" });
});

app.use((req, res) => {
	res.status(404).render('404', { title: "Eror" });
});