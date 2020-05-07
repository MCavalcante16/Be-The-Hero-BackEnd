const Ong = require('../models/Ong'); 
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index (request, response)  {
        const ongs = await Ong.find();
        return response.json(ongs);
    },

    async create (request,response)  {
        const { name, email, whatsapp, city, uf } = request.body;

        //Criar id aleatorio para cada nova ong
        const id = generateUniqueId();

        ong = await Ong.create({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id })
    }
};