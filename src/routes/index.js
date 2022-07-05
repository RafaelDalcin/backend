const clientes = require('./clientesRoutes')

module.exports = (app) => {
    clientes(app)
}