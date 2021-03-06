const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
	title: {
		type: String,
		require: true
	},

	image: {
		type: String,
		require: true
	},
	imageurl: {
		type: String,
		require: true
	},
	longtxt: {
		type: String,
		require: true
	}

}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
