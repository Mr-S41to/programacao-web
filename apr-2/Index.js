// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const express = require('express') //importar o Express
const app = express() //instanciar o Express
const port = 3001 //definir porta do servidor.
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
//Sequelize é o ORM (Mapeamento de Objeto Relacional).

//Transforma o objetos "json" em objetos.
app.use(bodyParser.json());

//Segurança do padrão REST.
app.use(helmet());

//Usado para requisições.
app.use(cors());

//Organiza os logs do HTTP de forma mais legivel (erros).
app.use(morgan("combined"));

//criar rota raiz(rota padrão)
app.get('/', (req, res) => {
    res.send('Olá DEV!')
})

//escutar a porta raiz
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})