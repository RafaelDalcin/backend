const clientes = require('./clientesRoute')
const enderecos = require('./enderecosRoute')
const carros = require('./carrosRoute')
const clienteEnderecos = require('./clienteEnderecosRoute')
const locacao = require('./locacaoRoute')
const marcas = require('./marcasRoute')
const modelos = require('./modelosRoute')

module.exports = (app) => {
    clientes(app)
    enderecos(app)
    carros(app)
    clienteEnderecos(app)
    locacao(app)
    marcas(app)
    modelos(app)
}