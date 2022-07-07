const locacaoService = require('../services/locacaoService');

// GET TODOS DADOS DE TODOS Enderecos

const getAllLocacao = async (req,res) => {
    try {
        const locacao = await locacaoService.getAllLocacao();
        res.status(200).send(locacao);
    } catch(error) {
        res.status(500).send(error);
    }

}
// PATCH
const patchLocacao = async (req, res) => {
    try {
        const locacao = await locacaoService.patchLocacao(req.body);
        res.status(201).send(locacao);
    } catch (err) {
        res.status(500).send(err);
    }
}


//GET DADOS DO Endereco PELO ID
const getLocacaoById = async (req, res) => {
    try {
        const locacao = await locacaoService.getLocacaoById(req.params);
        res.status(200).send(locacao);
    } catch (err) {
        res.status(500).send(err);
    }
}

//POST

const postLocacao = async (req, res) => {
    try {
        const locacao = await locacaoService.postLocacao(req.body);
        res.status(201).send(locacao);
    } catch (err) {
        res.status(500).send(err);
    }
}

//DELETAR Endereco

const deleteLocacao = async (req, res) => {
    try{
        let deletado = await locacaoService.deleteLocacao(req.params);
        let msg = deletado 
            ? `Locação ${req.params.id} deletada com sucesso` 
            : `Não foi encontrado nenhuma locação com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

const vwTotalPagar = async (req, res) => {
    console.log('oi');
    try {
        const totalPagar = await locacaoService.vwTotalPagar();
        res.status(200).send([totalPagar]);
    }
    catch (err) {   
        res.status(500).send(err);
    }
}







module.exports.vwTotalPagar = vwTotalPagar;
module.exports.getAllLocacao = getAllLocacao;
module.exports.getLocacaoById = getLocacaoById;
module.exports.postLocacao = postLocacao;
module.exports.deleteLocacao = deleteLocacao;
module.exports.patchLocacao = patchLocacao;
