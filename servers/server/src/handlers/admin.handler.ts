import express from 'express'
import admin from '../models/admin.model'
import jwt from 'jsonwebtoken'
import {registerError} from '../types/error'

let adminObject = new admin()
const tokenSecret = process.env.TOKEN

export default class adminHandler {
    // authentication
    authenticate = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const Admin = await adminObject.authenticate(
                req.body.email,
                req.body.password
            )
            let token = jwt.sign(Admin, tokenSecret as string)
            delete Admin['password']
            let adminToken = { admin: Admin, token: token }
            res.send(adminToken)
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
            const newAdmin = await adminObject.create(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.address,
                req.body.gender,
                req.body.dob
            )
            let token = jwt.sign(newAdmin, tokenSecret as string)
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
            const bool = await adminObject.checkEmail(req.body.email)
            if (bool) res.send("This email doesn't exist")
        } catch (e: registerError | any) {
            res.status(400).send(e.message)
        } finally {
            next()
        }
    }
}
