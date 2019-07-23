const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()


// Подключение к MongoDB
mongoose.connect(keys.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.error(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRouter)

module.exports = app

