const express = require('express')
const product = require('./product.model')

const porductObject = new product()

class productHandler {
    // create porduct
    create = async (req, res, next) => {
        try {
            // console.log(req.files);
            const newProduct = await porductObject.create(
                req.body.name,
                req.body.category,
                Number(req.body.quantity),
                req.files
            )

            res.send(newProduct)
        } catch (err) {
            res.status(404).send(err.message)
        } finally {
            next()
        }
    }

    //search for product
    searchProduct = async (req, res, next) => {
        try {
            const productResults = await porductObject.searchProduct(
                req.query.name
            )
            res.send(productResults)
        } catch (err) {
            res.status(404).send(err.message)
        } finally {
            next()
        }
    }
}

module.exports = productHandler
