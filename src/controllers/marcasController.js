const marcasService = require('../services/marcasService');

// GET TODOS DADOS DE TODOS Enderecos

const getAllMarcas = async (req,res) => {
    console.log('oi');
    try {
        const marcas = await marcasService.getAllMarcas();
        res.status(200).send(marcas);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchMarcas = async (req, res) => {
    try {
        const marcas = await marcasService.patchMarcas(req.body);
        res.status(201).send(marcas);
    } catch (err) {
        res.status(500).send(err);
    }
}


//GET DADOS DO Endereco PELO ID
const getMarcasById = async (req, res) => {
    try {
        const marcas = await marcasService.getMarcasById(req.params);
        res.status(200).send(marcas);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postMarcas = async (req, res) => {
    try {
        const marcas = await marcasService.postMarcas(req.body);
        res.status(201).send(marcas);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR Endereco

const deleteMarcas = async (req, res) => {
    console.log('oi');
    try{
        let deletado = await marcasService.deleteMarcas(req.params);
        let msg = deletado 
            ? `Marca ${req.params.id} deletada com sucesso` 
            : `Não foi encontrado nenhuma marca com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.getAllMarcas = getAllMarcas;
module.exports.getMarcasById = getMarcasById;
module.exports.postMarcas = postMarcas;
module.exports.deleteMarcas = deleteMarcas;
module.exports.patchMarcas = patchMarcas;
