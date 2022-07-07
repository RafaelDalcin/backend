
const carrosService = require('../services/carrosService');


// GET TODOS DADOS DE TODOS CLIENTES
const getAllCarros = async (req,res) => {
    try {
        const carros = await carrosService.getAllCarros();
        res.status(200).send(carros);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchCarro = async (req, res) => {
    try {
        const cliente = await carrosService.patchCarro(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//GET DADOS DO CLIENTE PELO ID
const getCarroById = async (req, res) => {
    try {
        const cliente = await carrosService.getCarroById(req.params);
        res.status(200).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postCarros = async (req, res) => {
    try {
        const cliente   = await carrosService.postCarros(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR CLIENTE

const deleteCarro = async (req, res) => {
    try{
        let deletado = await carrosService.deleteCarro(req.params);
        let msg = deletado 
            ? `Carro ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum carro com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllCarros = getAllCarros;
module.exports.getCarroById = getCarroById;
module.exports.postCarros = postCarros;
module.exports.deleteCarro = deleteCarro;
module.exports.patchCarro = patchCarro;