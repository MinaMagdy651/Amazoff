const client = require('./config')
const fs = require('fs')
const { resolve } = require('path')

const dir = './products'
const url = 'http://localhost:3600/product/'

class product {
    // to create procduct
    async create(name, category, quantity, images) {
        const conn = await client.connect()
        try {
            // console.log(images)
            const query = `INSERT INTO product (name, category, quantity) VALUES ('${name}', '${category}', ${quantity}) RETURNING *`
            const newProduct = await conn.query(query)
            if (newProduct.rows.length) {
                this.postImages(newProduct.rows[0], images)
                return newProduct.rows[0]
            }
            throw new Error()
        } catch (e) {
            throw new Error(`Cannot create this product`)
        } finally {
            conn.release()
        }
    }
    // post Images
    async postImages(product, images) {
        try {
            const id = product.product_id
            const fileabs = resolve(`${dir}/${id}`)
            if (!fs.existsSync(fileabs)) fs.mkdirSync(fileabs)
            const file = fs.readdirSync(fileabs)

          
            let imagesName = []
            Object.keys(images).forEach(function (key) {
                imagesName.push(images[key].name)
                const path = resolve(`${dir}/${id}/${images[key].name}`)
                images[key].mv(path, images[key].name, function (err) {})
            })
            //  insert URL into database
            await this.addUrl(imagesName, id)
        } catch (err) {
            console.log(err)
            throw new Error('Can not post these images')
        }
    }

    async addUrl(imagesName, id) {
        const conn = await client.connect()
        try {
            // console.log(imagesName)
            for (let i = 0; i < imagesName.length; i++) {
                const api = `${url}${id}/image?name=${imagesName[i]}`
                const query = `INSERT INTO product_images VALUES(${id} ,'${api}') RETURNING *`
                const productImage = await conn.query(query)
                if (productImage.rows.length == 0) throw new Error()
            }
        } catch (err) {
            throw new Error('Can not insert the url in database')
        } finally {
            conn.release()
        }
    }

    //search for product
    async searchProduct(name) {
        const conn = await client.connect()
        try {
            const query = `SELECT product_id, name from product where name like '%${name}%' limit 5 offset 0;`
            const productResult = await conn.query(query)
            return productResult.rows
        } catch (err) {
            throw new Error('No products found')
        } finally {
            conn.release()
        }
    }
}

module.exports = product
