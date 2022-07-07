const db = require('../config/db')

//Consultar cliente
const getAllCarros = async () => {
    let sql = 'select * from carros';
    let carros = await db.query(sql);
    return carros.rows;
}

const getCarroById = async (params) => {
    let sql = `select * from carros where id = $1`;
    let carro = await db.query(sql, [params.id]);
    return carro.rows;
}

//Atualizar cliente

const patchCarro = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update carros set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postCarros = async (params) => {
    let {id_modelos, descricao, placa, valor_diaria, renavam, ano_lancamento} = params;
    let sql = `
        insert into carros (
            id_modelos,
            descricao,
            placa,
            valor_diaria,
            renavam,
            ano_lancamento
        ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let insert = await db.query(sql, [id_modelos, descricao, placa, valor_diaria, renavam, ano_lancamento]);

    return insert.rows[0];


}

//Deletar um cliente    

const deleteCarro = async (params) => {
    let sql = 'delete from carros where id = $1';
    let deletarCarro= await db.query(sql, [params.id]);
    return deletarCarro.rowCount == 1;
}


module.exports.getAllCarros = getAllCarros;
module.exports.getCarroById = getCarroById;
module.exports.postCarros = postCarros;
module.exports.deleteCarro = deleteCarro;
module.exports.patchCarro = patchCarro;