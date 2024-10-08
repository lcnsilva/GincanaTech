const express = require('express');
const PublicacaoController = require('../controllers/publicacaoController.js');

const routes = express.Router();

routes.get('/publicacoes', PublicacaoController.listarPublicacoes);
routes.get('/publicacoes/:topico', PublicacaoController.filtrarPublicacoes);
routes.post('/publicacoes', PublicacaoController.cadastrarPublicacao);
routes.put('/publicacoes/:id', PublicacaoController.atualizarPublicacao);
routes.delete('/publicacoes/:id', PublicacaoController.excluirPublicacao);

module.exports = routes;