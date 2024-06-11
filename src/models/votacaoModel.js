var database = require("../database/config")

function inserirVotacao(valor, fkPersonagem) {
    var instrucaoSql = `
        INSERT INTO pontuacaoSemanal (valor, fkPersonagem) VALUES (${valor}, ${fkPersonagem});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirVotacao
};
