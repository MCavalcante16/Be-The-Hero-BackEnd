const Caso = require('../models/Caso');
const Ong = require('../models/Ong');

const generateUniqueInc = require('../utils/generateUniqueInc');

module.exports = {
    async index (request, response) {
        const incidents = await Caso.find();

        const res = [];
        for (var i = 0; i < incidents.length; i++) {
            const ong = await Ong.findOne({ '_id': incidents[i].ong })
            res.push({
                id: incidents[i].id,
                name: ong.name,
                title: incidents[i].title,
                description: incidents[i].description,
                value: incidents[i].value,
                whatsapp: ong.whatsapp,
                email: ong.email,
                ong: incidents[i].ong
            })
        }

        return response.json(res);
    },


    async create (request, response) {
        const { title, description, value } = request.body;
        const ongId = request.headers.authorization;

        const ong = await Ong.findOne({ 'id': ongId });

        const id = generateUniqueInc();

        const caso = await Caso.create({
            id,
            title,
            description,
            value,
            ong: ong._id,
        });

        return response.json(caso);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const { _id } = await Ong.findOne({ 'id': ong_id })

        const { ong } = await Caso.findOne({ 'id': id })

        if (_id.toString() != ong.toString()){
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await Caso.deleteOne({ 'id': id });

        return response.status(204).send(); //Status 204 = Resultado correto porem sem conteudo de retorno
    }
}