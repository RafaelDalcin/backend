const modelosControllers = require('../controllers/modelosController');

module.exports = (app) => {
    app.get('/modelos', modelosControllers.getAllModelos);
    app.get('/modelos/:id', modelosControllers.getModelosById);
    app.post('/modelos', modelosControllers.postModelos);
    app.delete('/modelos/:id', modelosControllers.deleteModelos);
    app.patch('/modelos', modelosControllers.patchModelos);
}