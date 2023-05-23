// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

//ORM Gerenciamento de banco de dados.
const Shop = sequelize.define("shop", {
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
    maps: {
        type: Sequelize.STRING(512),
        allowNull: true,
    },
    location: {
        type: Sequelize.STRING(256),
        allowNull: false,
    }
});

sequelize
    //Criar tabela somente se ela não existir.
    .sync({force: false})
    .then(() => console.log("Tabela Loja Oficial criada!"))
    .catch((error) => console.log("Erro na criação de tabela.", error));
module.exports = Duelist;