const Ong = require('../models/Ong'); 

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const { name } = await Ong.findOne({ id })

        if (!name) {
            return response.status(400).json({ error: 'No ONG found with this ID' })
        }

        return response.json({ name });
    }
}