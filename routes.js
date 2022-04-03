const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/perfil', (req, res) => res.render("perfil"))

module.exports = routes