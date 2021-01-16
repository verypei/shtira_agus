const express = require('express')
const app = express()

const UserRouter = require('./userRoute')

app.use('/user', UserRouter)

module.exports = app