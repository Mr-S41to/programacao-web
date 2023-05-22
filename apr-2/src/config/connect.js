// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Sequelize = require("sequelize");
//Conexão com banco de dados.
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../DataBase.db"
});

module.exports = sequelize;
