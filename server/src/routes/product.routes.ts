import express from 'express'
import axios from 'axios'

const url = `http://localhost:3600`
const productRoute = (app: express.Application) => {
    app.get('/product?', getProducts)
}
function getProducts(req: express.Request, res: express.Response) {
    axios
        .request({
            method: 'GET',
            url: `${url}/product?name=${req.query.name}`,
        })
        .then((response) => res.send(response.data))
        .catch((err) => res.status(404).send('can not get products'))
}

export default productRoute
