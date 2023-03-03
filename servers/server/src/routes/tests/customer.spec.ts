import app from '../../server'
import supertest from 'supertest'
import personType from '../../types/person'
import client from '../../config'
const request = supertest(app);

const customer: personType = {
    name: 'Aly Zakaria',
    email: 'ali.zakariya1929@outlook.com',
    password: '000',
    address: 'No address',
    gender: 'Male',
    dob: new Date(2001,4,27),   
}

let token = '';

describe ('Customers endpoints' , () => {

    it('/customer-register' ,async () => {
        const response = await request
            .post('/customer-register')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(customer)
        
        expect(response.status).toEqual(200)
        expect(response.body).not.toBeNull();
        // take the token of this customer
        token = response.body
    })
    // authenticate 
    it('/customer-login' , async () => {
        const response = await request
            .post('/customer-login')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({email: customer.email , password: customer.password})
        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    })
    // check email
    it('/customer-check-email', async () => {
        const response = await request
            .post('/customer-check-email')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({email: customer.email})
            expect(response.status).toEqual(400);
            expect(response.text).toEqual("This email already exists");
    })
    // get user information by its token
    it('/customer-token' , async () => {
        const response = await request
            .get('/customer-token')
            .set('Authorization', `Bearer ${token}`)    
        expect(response.status).toEqual(200);
        expect(response.body.email).toEqual(customer.email);
    })
    
    // afterAll(async () => {
    //     const conn = await client.connect()
    //     try{
    //         const query = `Truncate table customers cascade`
    //         const response = await conn.query(query)

    //     }catch(err){
    //         throw err
    //     }finally{
    //         conn.release();
    //     }
    // })
})
