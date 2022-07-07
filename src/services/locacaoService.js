const db = require('../config/db')

//Consultar cliente
const getAllLocacao = async () => {
    let sql = `select 
        id_clientes,
        id_carros,
        to_char(data_inicial, 'DD/MM/YYYY') as data_inicial,
        to_char(data_final, 'DD/MM/YYYY') as data_final
    from locacao`;
    let locacao = await db.query(sql);
    return locacao.rows;
}

const getLocacaoById = async (params) => {
    let sql = `select 
        id_clientes,
        id_carros,
        to_char(data_inicial, 'DD/MM/YYYY') as data_inicial,
        to_char(data_final, 'DD/MM/YYYY') as data_final
    from locacao 
    where id = $1`;
    let locacao= await db.query(sql, [params.id]);
    return locacao.rows;
}

//Atualizar cliente

const patchLocacao = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update locacao set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postLocacao = async (params) => {
    let {id_clientes, id_carros, data_inicial, data_final} = params;
    let sql = `
        insert into carros (
            id_clientes,
            id_carros,
            data_inicial,
            data_final
        ) values ($1, $2, $3, $4) returning id`;
    let insert = await db.query(sql, [id_clientes, id_carros, data_inicial, data_final]);

    return insert.rows[0];

}

//Deletar um cliente    
const deleteLocacao = async (params) => {
    let sql = 'delete from locacao where id = $1';
    let deletarLocacao = await db.query(sql, [params.id]);
    return deletarLocacao.rowCount == 1;
}

const vwTotalPagar = async () => {
    let sql = `select * from vw_total_pagar`;
    let totalPagar = await db.query(sql);
    console.log(totalPagar);
    return totalPagar.rows;
}


module.exports.vwTotalPagar = vwTotalPagar;
module.exports.getAllLocacao = getAllLocacao;
module.exports.getLocacaoById = getLocacaoById;
module.exports.postLocacao = postLocacao;
module.exports.deleteLocacao = deleteLocacao;
module.exports.patchLocacao = patchLocacao;