const enderecosService = require('../services/enderecosService');

// GET TODOS DADOS DE TODOS Enderecos

const getAllEnderecos = async (req,res) => {
    try {
        const enderecos = await enderecosService.getAllEnderecos();
        res.status(200).send(enderecos);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchEndereco = async (req, res) => {
    try {
        const endereco = await enderecosService.patchEndereco(req.body);
        res.status(201).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}


//GET DADOS DO Endereco PELO ID
const getEnderecoById = async (req, res) => {
    try {
        const endereco = await enderecosService.getEnderecoById(req.params);
        res.status(200).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postEndereco = async (req, res) => {
    try {
        const endereco = await enderecosService.postEndereco(req.body);
        res.status(201).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR Endereco

const deleteEndereco = async (req, res) => {
    try{
        let deletado = await enderecosService.deletarEndereco(req.params);
        let msg = deletado 
            ? `Endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.deleteEndereco = deleteEndereco;
module.exports.patchEndereco = patchEndereco;
