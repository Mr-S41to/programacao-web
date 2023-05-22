// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

//Gerenciamento de banco de dados.
const Agenda = sequelize.define("agenda", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nomeMedico: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }, 
    nomePaciente: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }, 
    unidade: {
        type: Sequelize.STRING(256),
        allowNull: false,
    },
    SUS: {
        type: Sequelize.STRING(32),
        allowNull: false,
    },
    data: {
        type : Sequelize.DATE(),
        allowNull: false,
    },
    hora: {
        type: Sequelize.TIME(),
        allowNull: false,
    }
});

sequelize
    //Criar tabela somente se ela não existir.
    .sync({force: false})
    .then(() => console.log("Tabela Agenda criada!"))
    .catch((error) => console.log("Erro na criação de tabela.", error));
module.exports = Agenda;