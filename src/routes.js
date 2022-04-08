const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')
const subscribeController = require('./controllers/subscribeController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/login', (req, res) => res.render("perfil", {page: 'user_perfil'}))
routes.get('/subscribe', (req, res) => res.render("subscribe"))

routes.post('/login/:userCredentials', loginController.authenticate)
routes.post('/search/:userName/:userSearch/:userEmail', searchController.search)

//WIP
routes.post('/subscribe/:dataSubscribe', subscribeController.subscribe)
//WIP

module.exports = routes