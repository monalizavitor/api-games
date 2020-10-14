const routes = require('./routes/routesGames')

const express = require('express')
const app = express()

app.use(express.json())
app.use('/', routes)


module.exports = app