const db = require('../config/db')

//Consultar todos endereços
const getAllEnderecos = async () => {
    let sql = 'select * from enderecos';
    let enderecos = await db.query(sql);
    return enderecos.rows;
}// Consultar endereço pelo ID

const getEnderecoById= async (params) => {
    let sql = `select * from enderecos where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}

//Update no endereço (Atualizar)

const patchEndereco = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//Inserir um novo cliente

const postEndereco = async (params) => {
    let {cep, cidade, bairro, rua, estado } = params;
    let sql = `
        insert into enderecos (
            cep,
            cidade,
            bairro,
            rua,
            estado
        ) values ($1, $2, $3, $4, $5) returning id`;
    let insert = await db.query(sql, [cep, cidade, bairro, rua, estado]);

    return insert.rows[0];


}

//Deletar um cliente    

const deleteEndereco = async (params) => {
    let sql = 'delete from enderecos where id = $1';
    let deletarEndereco = await db.query(sql, [params.id]);
    return deletarEndereco.rowCount == 1;
}


module.exports.getAllEnderecos= getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.deletarEndereco = deleteEndereco;
module.exports.patchEndereco = patchEndereco;