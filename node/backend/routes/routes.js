const express = require("express");
const router = express.Router();
const SingUpTemlateCopy = require('../models/SingUpModels');



router.post('/singup', (request, response) => {
	const singedupUser = new SingUpTemlateCopy({
		fullname: request.body.fullname,
		username: request.body.username,
		email: request.body.email,
		password: request.body.password
	})

	singedupUser.save()
		.then(date => {
			response.json(date)
		})

		.catch(error => {
			response.json(error)
		})
})


router.get('/signin')

module.exports = router;