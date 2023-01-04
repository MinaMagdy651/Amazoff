import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

const Token = process.env.TOKEN
const getUserByToken = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const authHeader = req.get('Authorization')

        if (authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase()
            const token = authHeader.split(' ')[1]
            if (token && bearer === 'bearer') {
                const decoded = jwt.verify(token, Token as unknown as string)
                if (decoded) {
                   req.body.decoded = decoded; 
                   next();
                } else throw new Error()
            } else throw new Error()
        } else throw new Error()
    } catch (error) {
        res.status(404).send(`User is not verified`)
    }
}

export default getUserByToken
