var votacaoModel = require("../models/votacaoModel");

function inserirVotacao(req, res) {
    console.log("Recebido POST em /votacao/inserirVotacao com os dados:", req.body);
    var valor = req.body.valorServer;
    var fkPersonagem = req.params.fkPersonagem;

    votacaoModel.inserirVotacao(valor, fkPersonagem)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    inserirVotacao
};
