const express = require('express')
const loginController = require('./controllers/loginControler')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))

routes.post('/login/:userCredentials', loginController.authenticate)

routes.get('/perfil', (req, res) => res.render("perfil"))

//routes.get('perfil/:perfil', (req, res) => res.render("perfil"))

module.exports = routes