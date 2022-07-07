const db = require('../config/db')

//Consultar cliente
const getAllMarcas = async () => {
    let sql = 'select * from marcas';
    let marcas = await db.query(sql);
    return marcas.rows;
}

const getMarcasById = async (params) => {
    let sql = `select * from marcas where id = $1`;
    let marcas = await db.query(sql, [params.id]);
    return marcas.rows;
}

//Atualizar cliente

const patchMarcas = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update marcas set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postMarcas = async (params) => {
    let {nome} = params;
    let sql = `
        insert into marcas (
            nome
        ) values ($1) returning id`;
    let insert = await db.query(sql, [nome]);

    return insert.rows[0];

}

//Deletar um cliente    
const deleteMarcas = async (params) => {
    let sql = 'delete from marcas where id = $1';
    let deletarMarcas = await db.query(sql, [params.id]);
    return deletarMarcas.rowCount == 1;
}

module.exports.getAllMarcas = getAllMarcas;
module.exports.getMarcasById = getMarcasById;
module.exports.postMarcas = postMarcas;
module.exports.deleteMarcas = deleteMarcas;
module.exports.patchMarcas = patchMarcas;