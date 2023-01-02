const client = require('./config')
const fs = require('fs')
const { resolve } = require('path')

const dir = './products'
const url = 'http://localhost:3600/product/'

class product {
    // to create procduct
    async create(name, category, discription, quantity, price, images) {
        const conn = await client.connect()
        try {
            const query = `INSERT INTO product (name, category,description ,quantity, price) VALUES ('${name}', '${category}', '${discription}',${quantity}, ${price}) RETURNING *`
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
            let id = product.product_id
            // console.log(images.length + ' ' + 'here')
            // if (images.length == 0) id = -1

            const fileabs = resolve(`${dir}/${id}`)
            if (!fs.existsSync(fileabs)) fs.mkdirSync(fileabs)
            // const file = fs.readdirSync(fileabs)

            let imagesName = []
           // if there is no images add the default
            if (images == null){
                const copyFilePath = `${dir}/${id}/default.jpg`;
                const filepath = `${dir}/-1/default.jpg`;
                fs.copyFile(filepath, copyFilePath, (err) => {
                    if (err) throw err;
                      
                    console.log('File Copy Successfully.');
                  });
                
                imagesName.push('default.jpg')
            }
            else {
                Object.keys(images).forEach(function (key) {
                    imagesName.push(images[key].name)
                    const path = resolve(`${dir}/${id}/${images[key].name}`)
                    images[key].mv(path, images[key].name, function (err) {})
                })
            }
            //  insert URL into database
            await this.addUrl(imagesName, id)
        } catch (err) {
            // console.log(err)
            throw new Error('Can not post these images')
        }
    }

    async addUrl(imagesName, id) {
        const conn = await client.connect()
        try {
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

    // products cards results from search
    async cardSearchProduct(name) {
        const conn = await client.connect()
        try {
            const query = `select p.product_id, p.name, p.quantity, p.price, pi.url from product p, product_images pi where p.product_id = pi.product_id and p.name like '${name}%' order by product_id;`
            const productResult = await conn.query(query)
            if (productResult.rows.length == 0) throw new Error()
            const products_1Image = this.filtering(productResult.rows)
            return products_1Image
        } catch (err) {
            throw new Error('No products found')
        } finally {
            conn.release()
        }
    }
    // get all product details by id
    async getProduct(id) {
        const conn = await client.connect()
        try {
            const query = `select p.product_id, p.name, p.category, p.quantity,p.description as product_description 
            ,p.price,p.rating  as product_rating, r.customer_id, c.name as customer_name,s.id as seller_id,s.name as sellerName
            ,r.review_id ,re.title, re.description, re.rating  from product p left join provides pr 
            on p.product_id = pr.product_id left join seller s on s.id = pr.seller_id left join reviews r
            on p.product_id = r.product_id left join  review re on r.review_id = re.review_id left join customers c 
            on r.customer_id = c.id where p.product_id = ${id};`
            const productResult = await conn.query(query)
            const query2 = `select url from product_images where product_id = ${id};`
            const urls = await conn.query(query2)
            // product details
            // get reviews
            const reviews = this.getReview(productResult.rows)
            const url = this.getUrl(urls.rows)
            const product = {
                product_id: productResult.rows[0].product_id,
                name: productResult.rows[0].name,
                category: productResult.rows[0].category,
                quantity: productResult.rows[0].quantity,
                description: productResult.rows[0].description,
                price: productResult.rows[0].price,
                rating: productResult.rows[0].product_rating,
                seller_id: productResult.rows[0].seller_id,
                sellerName: productResult.rows[0].sellername,
                reviews: reviews[0].customer_id == null ? null : reviews,
                urls: url,
            }
            return product
        } catch (err) {
            // console.log(err.message)
            throw new Error('No product found')
        } finally {
            conn.release()
        }
    }
    getUrl(urls) {
        const path = []
        urls.forEach((url) => path.push(url.url))
        return path
    }
    getReview(reviews) {
        const getReview = []
        for (let i = 0; i < reviews.length; i++) {
            getReview.push({
                customer_id: reviews[i].customer_id,
                customer_name: reviews[i].customer_name,
                review_id: reviews[i].review_id,
                title: reviews[i].title,
                description: reviews[i].description,
                rating: reviews[i].rating,
            })
        }
        return getReview
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

    //get All products
    async getAllProducts() {
        const conn = await client.connect()
        try {
            const query = `SELECT p.product_id, p.name, p.price ,p.rating, pi.url FROM product AS p, product_images AS pi WHERE p.product_id = pi.product_id ORDER BY p.product_id;`
            const allProducts = await conn.query(query)
            if (allProducts.rows.length == 0) throw new Error()
            const products_1Image = this.filtering(allProducts.rows)
            return products_1Image
        } catch (err) {
            throw new Error('No products found')
        } finally {
            conn.release()
        }
    }

    filtering(allProducts) {
        var stack = []
        allProducts.forEach((product) => {
            if (
                stack.length == 0 ||
                stack[stack.length - 1].product_id != product.product_id
            )
                stack.push(product)
        })
        return stack
    }
}

module.exports = product
