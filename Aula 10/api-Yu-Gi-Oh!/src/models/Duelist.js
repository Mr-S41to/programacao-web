// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

//Gerenciamento de banco de dados.
const Duelist = sequelize.define("duelist", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    region: {
        type: Sequelize.STRING(64),
        allowNull: false,
    },
    contry: {
        type: Sequelize.STRING(64),
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING(18),
        allowNull: false,
    },
    eMail: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    komoneyID: {
        type: Sequelize.STRING(32),
        allowNull: true,
    },
    deck: {
        type:  Sequelize.STRING(64),
        allowNull: true,
    }
});

sequelize
    //Criar tabela somente se ela não existir.
    .sync({force: false})
    .then(() => console.log("Tabela Duelista criada!"))
    .catch((error) => console.log("Erro na criação de tabela.", error));
module.exports = Duelist;