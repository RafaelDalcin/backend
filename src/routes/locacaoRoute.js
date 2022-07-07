const locacaoControllers = require('../controllers/locacaoController');

module.exports = (app) => {
    app.get('/locacao', locacaoControllers.getAllLocacao);
    app.get('/locacao/:id', locacaoControllers.getLocacaoById);
    app.post('/locacao', locacaoControllers.postLocacao);
    app.delete('/locacao/:id', locacaoControllers.deleteLocacao);
    app.patch('/locacao', locacaoControllers.patchLocacao);
    app.get('/total-pagar-locacao', locacaoControllers.vwTotalPagar);
}