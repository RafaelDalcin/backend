const db = require('../config/db')

//Consultar cliente
const getAllModelos = async () => {
    let sql = 'select * from modelos';
    let modelos = await db.query(sql);
    return modelos.rows;
}

const getModelosById = async (params) => {
    let sql = `select * from modelos where id = $1`;
    let modelos = await db.query(sql, [params.id]);
    return modelos.rows;
}

//Atualizar cliente

const patchModelos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update modelos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postModelos = async (params) => {
    let {id_marcas, nome} = params;
    let sql = `
        insert into modelos (
            id_marcas,
            nome
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [id_marcas, nome]);

    return insert.rows[0];

}

//Deletar um cliente    
const deleteModelos = async (params) => {
    let sql = 'delete from modelos where id = $1';
    let deletarModelos = await db.query(sql, [params.id]);
    return deletarModelos.rowCount == 1;
}

module.exports.getAllModelos = getAllModelos;
module.exports.getModelosById = getModelosById;
module.exports.postModelos = postModelos;
module.exports.deleteModelos = deleteModelos;
module.exports.patchModelos = patchModelos;