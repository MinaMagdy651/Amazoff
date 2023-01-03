import app from './server'
import supertest from 'supertest'

function sum(a: number, b: number): number {
    return a + b
}

// test noraml function
describe('sum function is correct', () => {
    // 2 + 3 = 5
    it('sum of 2 & 3 is correct', () => expect(sum(2, 3)).toEqual(5))
})

// to test endpoint
const request = supertest(app)

describe('Testing the Endpoints', () => {
    it('Testing the Home_EndPoints', async () => {
        const response = await request.get('/')
        expect(response.statusCode).toEqual(200)
        expect(response.body).not.toBeNull()
        expect(response.body).toBe('Home Page..')
    })
})
