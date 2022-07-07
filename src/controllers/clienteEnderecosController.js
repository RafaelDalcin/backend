const CEService = require('../services/clienteEnderecosService');


// GET TODOS DADOS DE TODOS CLIENTES
const getAllCE = async (req,res) => {
    try {
        const clienteEnderecos = await CEService.getAllCE();
        res.status(200).send(clienteEnderecos);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchCE = async (req, res) => {
    try {
        const clienteEnderecos  = await CEService.patchCE(req.body);
        res.status(201).send(clienteEnderecos);
    } catch (err) {
        res.status(500).send(err);
    }
}

//GET DADOS DO CLIENTE PELO ID
const getCEById = async (req, res) => {
    try {
        const clienteEnderecos = await CEService.getCEById(req.params);
        res.status(200).send(clienteEnderecos);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postCE = async (req, res) => {
    try {
        const clienteEnderecos  = await CEService.postCE(req.body);
        res.status(201).send(clienteEnderecos);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR CLIENTE

const deleteCE = async (req, res) => {
    try{
        let deletado = await CEService.deleteCE(req.params);
        let msg = deletado 
            ? ` ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum carro com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllCE = getAllCE;
module.exports.getCEById = getCEById;
module.exports.postCE = postCE;
module.exports.deleteCE = deleteCE;
module.exports.patchCE = patchCE;