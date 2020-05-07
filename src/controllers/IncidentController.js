const Caso = require('../models/Caso');

module.exports = {
    async index (request, response) {
        const incidents = await Caso.find();

        return response.json(incidents);
    },


    async create (request, response) {
        const { title, description, value } = request.body;
        const ong = request.headers.authorization;

        const caso = await Caso.create({
            title,
            description,
            value,
            ong,
        });

        return response.json(caso);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const caso = await Caso.findOne({ id })

        if (caso.ong != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await Caso.deleteOne({ id });

        return response.status(204).send(); //Status 204 = Resultado correto porem sem conteudo de retorno
    }
}