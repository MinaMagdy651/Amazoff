import client from '../../config'
import cartType from '../../types/cart'
import { quantityExceeds } from '../../types/error'
import Product from '../../types/product'
export default class cart {
    async addToCart(
        product_id: number,
        customer_id: number,
        quantity: number
    ): Promise<cartType> {
        const conn = await client.connect()
        try {
            // to check the quantity in the product
            const query = `SELECT quantity FROM product WHERE product_id = ${product_id}`
            const quantityResult = await conn.query(query)

            if (quantityResult.rows[0].quantity < quantity)
                throw new quantityExceeds(
                    `this quantity exceeds quantity supplied`
                )
            // insert into cart
            const query2 = `INSERT INTO cart VALUES(${customer_id}, ${product_id}, ${quantity}) returning *`
            const cart = await conn.query(query2)
            if (cart.rows.length == 0)
                throw new Error('Can not insert this product into cart')
            // console.log(cart.rows)
            return cart.rows[0]
        } catch (error: quantityExceeds | any) {
            throw error
        } finally {
            conn.release()
        }
    }
    async getCart(customer_id: number) {
        const conn = await client.connect()
        try {
            const query = `select p.product_id ,p.name, p.price, p.rating, p.category, pi.url ,cart.quantity from product p, product_images pi , cart where p.product_id = pi.product_id and p.product_id = cart.product_id and cart.customer_id = ${customer_id};`
            const cartResult = await conn.query(query)
            if (cartResult.rows.length == 0) throw new Error(`No product Found`)
            const cartProducts = this.filtering(cartResult.rows)
            return cartProducts
        } catch (err) {
            throw err
        } finally {
            conn.release()
        }
    }

    async removeFromCart(customer_id: number, product_id: number) {
        const conn = await client.connect()
        try {
            const query = `DELETE FROM CART WHERE CUSTOMER_ID = ${customer_id} AND PRODUCT_ID = ${product_id};`
            const deleteRow = await conn.query(query)
            if (deleteRow.rowCount == 0) throw new Error(`No Product Found`)
        } catch (err) {
            throw err
        } finally {
            conn.release()
        }
    }

    async updateCart(
        customer_id: number,
        product_id: number,
        quantity: number
    ) {
        const conn = await client.connect()
        try {
            const query = `UPDATE CART SET QUANTITY = ${quantity} WHERE cart.customer_id = ${customer_id} AND cart.product_id = ${product_id};`
            const updateRow = await conn.query(query)
            if (updateRow.rowCount == 0) throw new Error(`No Product Found`)
        } catch (err) {
            throw err
        } finally {
            conn.release()
        }
    }

    filtering(allProducts: Product[]) {
        var stack: Product[] = []
        allProducts.forEach((product: Product) => {
            if (
                stack.length == 0 ||
                stack[stack.length - 1].product_id != product.product_id
            )
                stack.push(product)
        })
        return stack
    }
}
