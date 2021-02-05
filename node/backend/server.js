const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routsUrls = require('../backend/routes/routes')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DateBase Connected"))


app.use(express.json())
app.use('/app', routsUrls)

app.listen(4000, () => console.log("server is up and running"));