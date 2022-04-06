const express = require('express')
const routes = require('./routes')
const path = require('path')

const server = express()
const port= 3000

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))  //Midware
server.use(routes)


server.listen(port, () => {
    console.log("Server on")
    console.log("Defaut port: " + port)
    console.log("Edit port in /src/server.js for change default port")
})