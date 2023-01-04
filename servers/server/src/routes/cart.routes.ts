import express from 'express'
import cartHandler from '../handlers/cart.handler'
import getUserByToken from '../middlewares/getUserByToken'
import verifyToken from '../middlewares/verifyToken'
const cartHandle = new cartHandler()

const cartRoute = (app: express.Application) => {
    app.post('/product/:product_id/add-to-cart', getUserByToken, cartHandle.addToCart);
    app.get('/cart', getUserByToken, cartHandle.getCart)
}

export default cartRoute
