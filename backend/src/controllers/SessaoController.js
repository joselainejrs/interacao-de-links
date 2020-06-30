const connection = require('../database/connection');

module.exports ={
    async create(request, response){
        const{ email, senha } = request.body;

        const usuario = await connection('usuarios')
        .where('email', email)
        .where('senha', senha)
        .select('nome')
        .first();

        if(!usuario){
            return response.status(400).json({error: 'Você não tem cadastro'});
        }
        return response.json(usuario);
    }
}