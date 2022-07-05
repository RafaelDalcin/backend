const clientesService = require('../services/clientesService');


// GET TODOS DADOS DE TODOS CLIENTES
const getAllClientes = async (req,res) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.status(200).send(clientes);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchCliente = async (req, res) => {
    try {
        const cliente = await clientesService.patchCliente(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//GET DADOS DO CLIENTE PELO ID
const getClienteById = async (req, res) => {
    try {
        const cliente = await clientesService.getClienteById(req.params);
        res.status(200).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postClientes = async (req, res) => {
    try {
        const cliente   = await clientesService.postClientes(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR CLIENTE

const deleteCliente = async (req, res) => {
    try{
        let deletado = await clientesService.deleteCliente(req.params);
        let msg = deletado 
            ? `Cliente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cliente com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postClientes = postClientes;
module.exports.deleteCliente = deleteCliente;
module.exports.patchCliente = patchCliente;
