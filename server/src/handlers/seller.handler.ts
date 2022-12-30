import express from 'express'
import seller from '../models/seller.model'
import jwt from 'jsonwebtoken'
import registerError from '../types/error'

let sellerObject = new seller()
const tokenSecret = process.env.TOKEN

export default class sellerHandler {
    // authentication
    authenticate = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const Seller = await sellerObject.authenticate(
                req.body.email,
                req.body.password
            )
            let token = jwt.sign(Seller, tokenSecret as string)
            delete Seller['password']
            let userToken = { customer: Seller, token: token }
            res.send(userToken)
        } catch (err: any) {
            res.status(500).send(err.message)
        } finally {
            next()
        }
    }

    // sign-up
    create = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const newSeller = await sellerObject.create(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.address,
                req.body.gender,
                req.body.dob
            )
            let token = jwt.sign(newSeller, tokenSecret as string)
            res.json(token)
        } catch (e: registerError | any) {
            res.status(404).send(e.message)
        } finally {
            next()
        }
    }

    //does email exist?
    checkEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const bool = await sellerObject.checkEmail(req.body.email)
            if (bool) res.send("This email doesn't exist")
        } catch (e: registerError | any) {
            res.status(400).send(e.message)
        } finally {
            next()
        }
    }
}
