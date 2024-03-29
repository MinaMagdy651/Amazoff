const express = require('express')
const product = require('./product.model')

const porductObject = new product()

class productHandler {
    // create porduct
    create = async (req, res, next) => {
        try {
            // console.log(req.body)
            const newProduct = await porductObject.create(
                req.body.name,
                req.body.category,
                req.body.description,
                Number(req.body.quantity),
                Number(req.body.price),
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
    getProduct = async (req, res, next) => {
        try {
            const product = await porductObject.getProduct(
                Number(req.params.id)
            )
            res.send(product)
        } catch (err) {
            res.send(err.message)
        } finally {
            next()
        }
    }

    // get All products
    getAllProducts = async (req, res, next) => {
        try {
            const products = await porductObject.getAllProducts()
            res.send(products)
        } catch (err) {
            res.send(err.message)
        } finally {
            next()
        }
    }

    // get All Categories
    getAllCategories = async (req, res, next) => {
        try {
            const products = await porductObject.getAllCategories()
            res.send(products)
        } catch (err) {
            res.send(err.message)
        } finally {
            next()
        }
    }
    cardSearchProduct = async (req, res, next) => {
        try {
            const products = await porductObject.cardSearchProduct(
                req.query.name
            )
            // res.setHeader('Content-Type', 'application/json')
            res.send(products)
        } catch (err) {
            // console.log(err + ' ' + 'here');
            res.status(400).send(err.message)
        } finally {
            // next()
        }
    }

    getCustomerPurchases = async (req, res, next) => {
        try {
            // console.log(req.params)
            const product = await porductObject.getCustomerPurchases(
                Number(req.params.customer_id)
            )
            res.send(product)
        } catch (err) {
            res.status(400).send(`There are no purchases`)
        }
    }
    getProductReviewedByCustomerId = async (req, res, next) => {
        try {
            const products = await porductObject.getProductReviewedByCustomerId(
                Number(req.params.customer_id)
            )
            res.send(products)
        } catch (err) {
            res.status(400).send(`No products reviewed by this customer`)
        } finally {
        }
    }
}

module.exports = productHandler
