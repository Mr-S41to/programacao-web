// Curso de Engenharia de Software - UniEVANGÉLICA.
// Programação Web - Aula 10.
// Matheus N. Saito - 6° Período.
// Maio de 2023.
const Shop = require("../models/Shop");

//Função para listar todas as lojas usuárias.
exports.list = async(_, res) => {
    Shop.findAll({
        order: [["id", "DESC"]],
    })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

//Função para salvar uma nova loja.
exports.save = async (req, res) => {
    const {
        id,
        name,
        region,
        contry,
        phone,
        eMail,
        maps,
        location
    } = req.body

    Shop.create({
        id,
        name,
        region,
        contry,
        phone,
        eMail,
        maps,
        location
    }).then((post) => res.send(post));
};

//função para encontrar por id.
exports.getById = async (req, res) => {
    const {id} = req.params;

    try{
        const shop = await Shop.findByPk(id);
        if(!shop) {
            res.status(404).send({
                message: 'Loja não encontrada!'
            });
        }
        res.send(shop);
    } catch(error){
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error!'
        })
    }
}