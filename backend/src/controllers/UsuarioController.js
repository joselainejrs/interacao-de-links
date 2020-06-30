const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    //listar
    async index (request, response){
        const usuarios = await connection('usuarios').select('*');

        return response.json(usuarios);
    },

    //cadastrar
    async create(request, response) {
        const { nome, email, senha } = request.body;  
        
        const id = crypto.randomBytes(5).toString("HEX");

        await connection('usuarios').insert({
            id,
            nome,
            email, 
            senha,
        })

        return response.json({id});
    }
};