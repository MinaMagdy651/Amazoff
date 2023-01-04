import express from 'express'
import customer from '../models/customer.model'
import jwt from 'jsonwebtoken'
import {registerError} from '../types/error'

let customerObject = new customer()
const tokenSecret = process.env.TOKEN

export default class customerHandler {
    // authentication
    authenticate = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const Customer = await customerObject.authenticate(
                req.body.email,
                req.body.password
            )
            let token = jwt.sign(Customer, tokenSecret as string)
            delete Customer['password']
            Customer['token'] = token
            res.send(Customer)
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
            const newCustomer = await customerObject.create(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.address,
                req.body.gender,
                req.body.dob
            )
            let token = jwt.sign(newCustomer, tokenSecret as string)
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
            const bool = await customerObject.checkEmail(req.body.email)
            if (bool) res.send("This email doesn't exist")
        } catch (e: registerError | any) {
            res.status(400).send(e.message)
        } finally {
            next()
        }
    }
    getUserByToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try{
            const getUser = await customerObject.getUserByToken(
                Number(req.body.decoded.id)
            );
            res.send(getUser);
        }catch(err){
            res.status(404).send(`No user Found`);
        }
    }
}
