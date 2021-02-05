const mongoose = require('mongoose')

const SingUpTemplate = new mongoose.Schema({
	fullname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model('mytable', SingUpTemplate);