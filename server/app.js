const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')
const app = express()

// Подключение роутов
const usersRouter = require('./routes/overmin/users.routes')


// Подключение к MongoDB
mongoose.connect(keys.MONGODB_URI, {dbName: keys.DBNAME})
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.error(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Все маршруты API

// Dashboard Overmin
// Users
app.use('/api/overmin/users', usersRouter)

module.exports = app

