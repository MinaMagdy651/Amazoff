import express from 'express'
import customerHandler from '../handlers/customer.handler'
import getUserByToken from '../middlewares/getUserByToken'

const customerHandle = new customerHandler()

const customerRoute = (app: express.Application) => {
    app.post('/customer-register', customerHandle.create)
    app.post('/customer-check-email', customerHandle.checkEmail)
    app.post('/customer-login', customerHandle.authenticate)
    app.get('/customer-token', getUserByToken)
}

export default customerRoute
