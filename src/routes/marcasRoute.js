const marcasControllers = require('../controllers/marcasController');

module.exports = (app) => {
    app.get('/marcas', marcasControllers.getAllMarcas);
    app.get('/marcas/:id', marcasControllers.getMarcasById);
    app.post('/marcas', marcasControllers.postMarcas);
    app.delete('/marcas/:id', marcasControllers.deleteMarcas);
    app.patch('/marcas', marcasControllers.patchMarcas);
}