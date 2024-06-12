var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.post("/inserirVotacao/:fkPersonagem", function (req, res) {
    votacaoController.inserirVotacao(req, res);
});

module.exports = router;

