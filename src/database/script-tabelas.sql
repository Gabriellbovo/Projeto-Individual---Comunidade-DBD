CREATE DATABASE comunidadeDBD;
use comunidadeDBD;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    dataNascimento DATE,
    email VARCHAR(50),
	senha VARCHAR(50)
    );

select * from usuario;