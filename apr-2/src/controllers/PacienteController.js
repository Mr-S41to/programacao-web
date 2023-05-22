// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Paciente = require("../models/Paciente");

//Função para listar todos os usuarios.
exports.list = async(_, res) => {
    Paciente.findAll({
        order: [["id", "DESC"]],
    })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

//Função para salvar um novo usuario.
exports.save = async (req, res) => {
    const {
        id,
        nome,
        nomeMae,
        endereco,
        telefone,
        email,
        SUS,
        CPF,
        dataNascimento
    } = req.body

    Paciente.create({
        id,
        nome,
        nomeMae,
        endereco,
        telefone,
        email,
        SUS,
        CPF,
        dataNascimento
    }).then((post) => res.send(post));
};

//função para encontrar por id.
exports.getById = async (req, res) => {
    const {id} = req.params;

    try{
        const paciente = await Paciente.findByPk(id);
        if(!paciente) {
            res.status(404).send({
                message: 'Paciente não encontrado!'
            });
        }
        res.send(paciente);
    } catch (error){
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error!'
        })
    }
}