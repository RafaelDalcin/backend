const carrosControllers = require('../controllers/carrosController');

module.exports = (app) => {
    app.get('/carros', carrosControllers.getAllCarros);
    app.get('/carros/:id', carrosControllers.getCarroById);
    app.post('/carros', carrosControllers.postCarros);
    app.delete('/carros/:id', carrosControllers.deleteCarro);
    app.patch('/carros', carrosControllers.patchCarro);
}   