// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const express = require("express");
const router = express.Router();

//Pegando request do Controller.
const PacienteController = require("./controllers/PacienteController");
//Criando a rota pacientes.
router
    .route("/paciente")
    .post((req, res) => PacienteController.save(req, res))
    .get((req, res) => PacienteController.list(req, res));

//Rota para manipulação de dados por ID.
router
    .router("/paciente/:id")
    .get((req, res) => PacienteController.getById(req, res))

//Pegando request do Controller.
const AgendaController = require("./controllers/AgendaController");
//Criando a rota agenda.
router
    .route("/agenda")
    .post((req, res) => AgendaController.save(req, res))
    .get((req, res) => AgendaController.list(req, res));

//Rota para manipulação de dados por ID.
router
    .router("/agenda/:id")
    .get((req, res) => AgendaController.getById(req, res))