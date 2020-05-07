const Caso = require('../models/Caso'); 
const Ong = require('../models/Ong');

module.exports = {
    async index(request, response) {
        const id = request.headers.authorization;
        
        const ong = await Ong.findOne({ 'id': id })

        const incidents = await Caso.find({ 'ong': ong._id })
        
        //Todo - Colocar esse res dentro de um for para atribuir valores a cada incident
        const res = ({
            name: ong.name,
            title: incidents.title,
            description: incidents.description,
            value: incidents.value,
            whatsapp: ong.whatsapp,
            email: ong.email,
        })

        return response.json(res);
    }
}