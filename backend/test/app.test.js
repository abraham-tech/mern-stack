const request = require('supertest');
const app = require('../app'); // Adjust the path to your app

describe('POST /api/users', () => {
    it('should create a user successfully with valid data', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                name: 'John Doe',
                email: 'john.doe@example.com',
            });

        expect(res.statusCode).toBe(201); // Expecting HTTP 201 Created
        // expect(res.body).toHaveProperty('message', 'User created successfully');
        // expect(res.body.user).toHaveProperty('name', 'John Doe');
        // expect(res.body.user).toHaveProperty('email', 'john.doe@example.com');
    });
    //
    // it('should return 400 if name or email is missing', async () => {
    //     const res = await request(app).post('/api/create-user').send({
    //         name: '',
    //         email: '',
    //     });
    //
    //     expect(res.statusCode).toBe(400); // Expecting HTTP 400 Bad Request
    //     expect(res.body).toHaveProperty('error', 'Name and email are required');
    // });
});