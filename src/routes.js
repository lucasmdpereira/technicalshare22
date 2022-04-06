const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/perfil', (req, res) => res.render("perfil", {page: 'user_perfil'}))

routes.post('/perfil/:userCredentials', loginController.authenticate)
routes.post('/search/:userName/:userSearch/:userTags', searchController.search)

module.exports = routes