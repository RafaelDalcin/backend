const CEControllers = require('../controllers/clienteEnderecosController');

module.exports = (app) => {
    app.get('/cliente-enderecos', CEControllers.getAllCE);
    app.get('/cliente-enderecos/:id', CEControllers.getCEById);
    app.post('/cliente-enderecos', CEControllers.postCE);
    app.delete('/cliente-enderecos/:id', CEControllers.deleteCE);
    app.patch('/cliente-enderecos', CEControllers.patchCE);
}   