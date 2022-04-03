const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))

routes.post('/perfil/:userCredentials', loginController.authenticate)

routes.get('/perfil', (req, res) => res.render("perfil"))

routes.post('/search/:userName/:userSearch', searchController.search)

//routes.get('perfil/:perfil', (req, res) => res.render("perfil"))

module.exports = routes