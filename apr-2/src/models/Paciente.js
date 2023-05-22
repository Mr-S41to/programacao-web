// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

//Gerenciamento de banco de dados.
const Paciente = sequelize.define("paciente", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }, 
    nomeMae: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }, 
    endereco: {
        type: Sequelize.STRING(256),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    telefone : {
        type: Sequelize.STRING(18),
        allowNull: false,
    },
    SUS: {
        type: Sequelize.STRING(32),
        allowNull: false,
    },
    CPF : {
        type: Sequelize.STRING(11),
        allowNull: false,
    },
    dataNascimeto : {
        type : Sequelize.DATE(),
        allowNull: false,
    },
});

sequelize
    //Criar tabela somente se ela não existir.
    .sync({force: false})
    .then(() => console.log("Tabela Paciente criada!"))
    .catch((error) => console.log("Erro na criação de tabela.", error));
module.exports = Paciente;