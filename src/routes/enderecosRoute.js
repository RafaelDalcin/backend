const enderecosControllers = require('../controllers/enderecosController');

module.exports = (app) => {
    app.get('/enderecos', enderecosControllers.getAllEnderecos);
    app.get('/enderecos/:id', enderecosControllers.getEnderecoById);
    app.post('/enderecos', enderecosControllers.postEndereco);
    app.delete('/enderecos/:id', enderecosControllers.deleteEndereco);
    app.patch('/enderecos', enderecosControllers.patchEndereco);
}