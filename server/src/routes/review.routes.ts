import express from 'express'
import reviewHandler from '../handlers/review.handler'
import verifyToken from '../middlewares/verifyToken'

const reviewHandle = new reviewHandler()

const reviewRoute = (app: express.Application) => {
    app.post('/product/addreview', verifyToken, reviewHandle.addReview)
}

export default reviewRoute
