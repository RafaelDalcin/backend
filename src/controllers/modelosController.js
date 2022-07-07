const modelosService = require('../services/modelosService');

// GET TODOS DADOS DE TODOS Enderecos

const getAllModelos = async (req,res) => {
    try {
        const modelos = await modelosService.getAllModelos();
        res.status(200).send(modelos);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchModelos = async (req, res) => {
    try {
        const modelos = await modelosService.patchModelos(req.body);
        res.status(201).send(modelos);
    } catch (err) {
        res.status(500).send(err);
    }
}


//GET DADOS DO Endereco PELO ID
const getModelosById = async (req, res) => {
    try {
        const modelos = await modelosService.getModelosById(req.params);
        res.status(200).send(modelos);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postModelos = async (req, res) => {
    try {
        const modelos = await modelosService.postModelos(req.body);
        res.status(201).send(modelos);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR Endereco

const deleteModelos = async (req, res) => {
    try{
        let deletado = await modelosService.deleteModelos(req.params);
        let msg = deletado 
            ? `Modelo ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum modelo com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.getAllModelos = getAllModelos;
module.exports.getModelosById = getModelosById;
module.exports.postModelos = postModelos;
module.exports.deleteModelos = deleteModelos;
module.exports.patchModelos = patchModelos;
