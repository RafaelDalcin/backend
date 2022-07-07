const db = require('../config/db')

//Consultar todos endereço
const getAllCE= async () => {
    let sql = 'select * from cliente_enderecos';
    let enderecos = await db.query(sql);
    return enderecos.rows;
}// Consultar endereço pelo ID

const getCEById= async (params) => {
    let sql = `select * from cliente_enderecos where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}

//Update no endereço (Atualizar)

const patchCE = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update cliente_enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postCE = async (params) => {
    let {id_clientes, id_enderecos} = params;
    let sql = `
        insert into enderecos (
            id_clientes,
            id_enderecos
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [id_clientes, id_enderecos]);

    return insert.rows[0];


}

//Deletar um cliente    

const deleteCE = async (params) => {
    let sql = 'delete from cliente_enderecos where id = $1';
    let deletarClienteEnderecos = await db.query(sql, [params.id]);
    return deletarClienteEnderecos.rowCount == 1;
}


module.exports.getAllCE = getAllCE;
module.exports.getCEById = getCEById;
module.exports.postCE = postCE;
module.exports.deleteCE = deleteCE;
module.exports.patchCE = patchCE;