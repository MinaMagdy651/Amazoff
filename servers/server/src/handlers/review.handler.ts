import express from 'express'
import review from '../models/review.model'
import jwt from 'jsonwebtoken'
import registerError from '../types/error'

let reviewObject = new review()
const tokenSecret = process.env.TOKEN

export default class reviewHandler {
    addReview = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            // console.log(req.query)
            const reviewAdded = await reviewObject.addreview(
                req.body.title,
                req.body.description,
                Number(req.body.rating),
                Number(req.body.customer_id),
                Number(req.body.product_id)
            )
            if (!reviewAdded) throw new Error()
            res.send(reviewAdded)
        } catch (err: any) {
            res.status(404).send(err.message)
        }
    }
}
