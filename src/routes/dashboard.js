const express = require('express');
const router = express.Router();
const dashController  = require('../controllers/dashController');

router.get('/totalPontos', function(req, res) {
    dashController.buscarPontuacao(req, res);
});

router.get('/nomePersonagem', function(req, res) {
    dashController.buscarPersonagem(req, res);
});

router.get('/PontuacaoDash', function(req, res) {
    dashController.buscarPontosTotais(req, res);
});

module.exports = router;