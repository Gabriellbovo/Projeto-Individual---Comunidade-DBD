var database = require("../database/config")

function getTotalPontos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `SELECT SUM(valor) AS totalPontos FROM pontuacaoSemanal;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagemFavorito() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
    SELECT p.nome
    FROM personagem p
    JOIN pontuacaoSemanal ps ON p.idPersonagem = ps.fkPersonagem
    GROUP BY p.nome
    ORDER BY SUM(ps.valor) DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoSemanalDash() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
    SELECT p.nome, SUM(ps.valor) AS total_pontos
    FROM personagem p
    JOIN pontuacaoSemanal ps ON p.idPersonagem = ps.fkPersonagem
    GROUP BY p.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getTotalPontos,
    personagemFavorito,
    pontuacaoSemanalDash
};


