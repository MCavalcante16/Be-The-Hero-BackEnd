const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //Destrutor da conexão
    afterAll(async () => {
        await connection.destroy();
    })


    it('should be able to create a new ONG', async() => {
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'headerTagValue') << Para headers
        .send({
            name: "APAD",
            email: "contato@contato.com",
            whatsapp: "4002892285",
            city: "Rio do Sul",
            uf: "SC",
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})