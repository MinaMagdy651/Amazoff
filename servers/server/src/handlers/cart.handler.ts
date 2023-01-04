import express from 'express'
import cart from '../models/service/cart.model'
import jwt from 'jsonwebtoken'
import {quantityExceeds} from '../types/error'

let cartObject = new cart()
const tokenSecret = process.env.TOKEN

export default class cartHandler{
    addToCart = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
        try{
            const insertedToCart = await cartObject.addToCart(
                Number(req.params.product_id),
                Number(req.body.decoded.id),
                Number(req.body.quantity)
            );
            res.send(insertedToCart)
        }catch(err: quantityExceeds | any) {
            if (err instanceof quantityExceeds)
                res.status(404).send(err.message);
            else
                res.status(404).send(`Can not insert this product into cart`);

        }
    }
    getCart = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
        try{
            const getCart = await cartObject.getCart
            (Number(req.body.decoded.id)
            );
            res.send(getCart);
        }catch(err: any){
            res.status(404).send(err.message);
        }
    }
}