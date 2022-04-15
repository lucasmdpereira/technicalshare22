const express = require('express')
const routes = require('./routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

// Public Folder
server.use(express.static("public"))

//middleware
//envia pelo body da msg
routes.use(express.json())
server.use(express.urlencoded({
    extended: true
})) //Midware
server.use(routes)


server.listen(4000, () => console.log(`running at localhost:4000`))