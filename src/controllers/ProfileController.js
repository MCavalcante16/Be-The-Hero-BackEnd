const Caso = require('../models/Caso'); 
const Ong = require('../models/Ong');

module.exports = {
    async index(request, response) {
        const id = request.headers.authorization;
        
        const ong = await Ong.findOne({ 'id': id })

        const incidents = await Caso.find({ 'ong': ong._id })
        
        const res = [];
        for (var i = 0; i < incidents.length; i++)
            res.push({
                id: incidents[i].id,
                name: ong.name,
                title: incidents[i].title,
                description: incidents[i].description,
                value: incidents[i].value,
                whatsapp: ong.whatsapp,
                email: ong.email,
                _id: incidents[i].ong
            })

        return response.json(res);
    }
}