const Caso = require('../models/Caso'); 

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await Caso.find({ ong_id })

        return response.json(incidents);
    }
}