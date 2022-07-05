
const db = require('../config/db')

//Consultar cliente
const getAllClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = await db.query(sql);
    return clientes.rows;
}

const getClienteById = async (params) => {
    let sql = `select * from clientes where id = $1`;
    let cliente = await db.query(sql, [params.id]);
    return cliente.rows;
}

//Atualizar cliente

const patchCliente = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postClientes = async (params) => {
    let {nome, cpf, telefone, email, rg, data_nasc} = params;
    let sql = `
        insert into clientes (
            nome,
            cpf,
            telefone,
            email,
            rg,
            data_nasc
        ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let insert = await db.query(sql, [nome, cpf, telefone, email, rg, data_nasc]);

    return insert.rows[0];


}

//Deletar um cliente    

const deleteCliente = async (params) => {
    let sql = 'delete from clientes where id = $1';
    let deletarCliente = await db.query(sql, [params.id]);
    return deletarCliente.rowCount == 1;
}


module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postClientes = postClientes;
module.exports.deleteCliente = deleteCliente;
module.exports.patchCliente = patchCliente;