// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Agenda = require("../models/Agenda");

//Função para listar todos os usuarios.
exports.list = async(_, res) => {
    Agenda.findAll({
        order: [["id", "DESC"]],
    })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

//Função para salvar um novo usuario.
exports.save = async (req, res) => {
    const {
        id,
        nomeMedico,
        nomePaciente,
        unidade,
        SUS,
        data,
        hora
    } = req.body

    Agenda.create({
        id,
        nomeMedico,
        nomePaciente,
        unidade,
        SUS,
        data,
        hora
    }).then((post) => res.send(post));
};

//função para encontrar por id.
exports.getById = async (req, res) => {
    const {id} = req.params;

    try{
        const agenda = await Agenda.findByPk(id);
        if(!agenda) {
            res.status(404).send({
                message: 'Consulta não encontrada!'
            });
        }
        res.send(agenda);
    } catch (error){
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error!'
        })
    }
}