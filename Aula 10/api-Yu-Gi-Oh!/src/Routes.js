// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const express = require("express");
const router = express.Router();

//Pegando request do Controller.
const DuelistController = require("./controllers/DuelistController");
const ShopController = require("./controllers/ShopController");
//Criando a rota principal.
router
    .route("/user")
    .post((req, res) => DuelistController.save(req, res))
    .get((req, res) => DuelistController.list(req, res));

//Rota para manipulação de dados por ID.
router
    .router("/user/:id")
    .get((req, res) => DuelistController.getById(req, res))

//Criando das lojas.
router
    .route("/shop")
    .post((req, res) => ShopController.save(req, res))
    .get((req, res) => ShopController.list(req, res));

//Rota para manipulação de dados por ID da loja.
router
    .router("/shop/:id")
    .get((req, res) => ShopController.getById(req, res));

module.exports = router;