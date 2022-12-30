import express from 'express'
import sellerHandler from '../handlers/seller.handler'

const sellerHandle = new sellerHandler()

const sellerRoute = (app: express.Application) => {
    app.post('/seller-register', sellerHandle.create)
    app.post('/seller-check-email', sellerHandle.checkEmail)
    app.post('/seller-login', sellerHandle.authenticate)
}

export default sellerRoute
