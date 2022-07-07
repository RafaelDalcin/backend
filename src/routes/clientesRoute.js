const clientesControllers = require('../controllers/clientesController');

module.exports = (app) => {
    app.get('/clientes', clientesControllers.getAllClientes);
    app.get('/clientes/:id', clientesControllers.getClienteById);
    app.post('/clientes', clientesControllers.postClientes);
    app.delete('/clientes/:id', clientesControllers.deleteCliente);
    app.patch('/clientes', clientesControllers.patchCliente)
}   