const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);

routes.post('/sessao', SessaoController.create)


module.exports = routes;