const dashModel = require('../models/dashModel');


function buscarPontuacao(req, res) {
    dashModel.getTotalPontos().then(function (resultado) {
        res.status(200).json(resultado);
    });
};


function buscarPersonagem(req, res) {
    dashModel.personagemFavorito().then(function (resultado) {
        res.status(200).json(resultado);
    });
};

function buscarPontosTotais(req, res) {
    dashModel.pontuacaoSemanalDash().then(function (resultado) {
        res.status(200).json(resultado);
    });
};

module.exports = { 
    buscarPontuacao,
    buscarPersonagem,
    buscarPontosTotais
 };
