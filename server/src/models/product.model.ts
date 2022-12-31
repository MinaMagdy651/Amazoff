import client from '../config'
import Product from '../types/product'

export default class product {
    async create(
        name: string,
        category: string,
        quantity: number,
        files: any
    ): Promise<Product | never> {
        const conn = await client.connect()
        try {
            console.log(files)
            const query = `INSERT INTO product (name, category, quantity) VALUES ('${name}', '${category}', ${quantity}) RETURNING *`
            const newProduct = await conn.query(query)
            if (newProduct.rows.length) return newProduct.rows[0]
            throw new Error()
        } catch (e) {
            throw new Error(`Cannot create this product`)
        } finally {
            conn.release()
        }
    }
}
