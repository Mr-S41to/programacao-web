// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Duelist = require("../models/Duelist");

//Função para listar todos os usuarios.
exports.list = async(_, res) => {
    Duelist.findAll({
        order: [["id", "DESC"]],
    })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

//Função para salvar um novo usuario.
exports.save = async (req, res) => {
    const {
        id,
        name,
        region,
        contry,
        phone,
        eMail,
        komoneyID
    } = req.body

    Duelist.create({
        id,
        name,
        region,
        contry,
        phone,
        eMail,
        komoneyID
    }).then((post) => res.send(post));
};

//função para encontrar por id.
exports.getById = async (req, res) => {
    const {id} = req.params;

    try{
        const duelist = await Duelist.findByPk(id);
        if(!duelist) {
            res.status(404).send({
                message: 'Duelista não encontrado!'
            });
        }
        res.send(duelist);
    } catch (error){
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error!'
        })
    }
}