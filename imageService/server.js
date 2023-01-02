const express = require('express')
const bodyParser = require('body-parser')
const { getImages } = require('./middleware/image')
const { postImages } = require('./middleware/image')
const productHandler = require('./product.handlers')

const productHandle = new productHandler()

var fileupload = require('express-fileupload')

const app = express()
const port = 3600

app.use(fileupload())
app.use(bodyParser.json())

app.get('/product/:id/image?', getImages)

app.post('/product/:id', postImages)

app.post('/product', productHandle.create)

app.get('/product?', productHandle.searchProduct)

app.get('/products', productHandle.getAllProducts)

app.get('/product/search?', productHandle.cardSearchProduct)

app.get('/product/:id', productHandle.getProduct)

app.get('/customer-purchases/:customer_id', productHandle.getCustomerPurchases)

app.get('/product-reviewed/:customer_id', productHandle.getProductReviewedByCustomerId)


app.listen(port, () => {
    console.log(`listening on ${port}`)
})
