import express from 'express'
import {productHandler} from '../handlers/product.handler'
// import {upload} from '../handlers/product.handler'

const productHandle = new productHandler()

const productRoute = (app: express.Application) => {
    app.post('/product' ,productHandle.create)
}

export default productRoute
