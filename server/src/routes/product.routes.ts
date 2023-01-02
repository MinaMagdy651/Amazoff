import express from 'express'
import axios from 'axios'
import FormData from 'form-data'

const url = `http://localhost:3600`
const productRoute = (app: express.Application) => {
    app.get('/product?', searchProducts)
    app.get('/products', getAllProducts)
    app.get('/product/search?', cardSearchProduct)
    app.get('/product/:id', getProduct)
    app.get('/customer-purchases/:customer_id', getCustomerPurchases)
    app.get('/product-reviewed/:customer_id', getProductReviewedByCustomerId)
    // app.post('/product', createProduct)
}

function getProductReviewedByCustomerId(
    req: express.Request,
    res: express.Response
) {
    axios
        .request({
            method: 'GET',
            url: `${url}/product-reviewed/${req.params.customer_id}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => res.status(404).send(err.response.data))
}

function getCustomerPurchases(req: express.Request, res: express.Response) {
    // console.log(req.params)
    axios
        .request({
            method: 'GET',
            url: `${url}/customer-purchases/${req.params.customer_id}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => {
            // console.log(err.response.data)
            res.status(404).send(err.response.data)
        })
}

function getProduct(req: express.Request, res: express.Response) {
    axios
        .request({
            method: 'GET',
            url: `${url}/product/${req.params.id}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => {
            res.status(404).send(err.message)
        })
}

function cardSearchProduct(req: express.Request, res: express.Response) {
    axios
        .request({
            method: 'GET',
            url: `${url}/product/search?name=${req.query.name}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => res.send(err.message))
}

function getAllProducts(req: express.Request, res: express.Response) {
    axios
        .request({
            method: 'GET',
            url: `${url}/products`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => res.status(404).send(err.message))
}

function searchProducts(req: express.Request, res: express.Response) {
    axios
        .request({
            method: 'GET',
            url: `${url}/product?name=${req.query.name}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => res.status(404).send('can not get products'))
}

export default productRoute

// function createProduct(
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
// ) {
//     var bodyFormData = new FormData()
//     bodyFormData.append('name', `${req.body.name}`)
//     bodyFormData.append('category', `${req.body.category}`)
//     bodyFormData.append('quantity', `${req.body.quantity}`)
//     bodyFormData.append('price', `${req.body.price}`)
//     bodyFormData.append('files', `${req.body.files}`)

//     axios
//         .request({
//             method: 'POST',
//             url: `${url}/product`,
//             data: bodyFormData,
//             headers: { 'Content-Type': 'multipart/form-data' },
//         })
//         .then((response) => res.send(response.data))
//         .catch((err) => res.status(404).send(err.message))
// }
