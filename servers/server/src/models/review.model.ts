import client from '../config'
import reviewType from '../types/review'
// import bcrypt from 'bcrypt'
// import registerError from '../types/error'

export default class review {
    // add review
    async addreview(
        title: string,
        description: string,
        rating: number,
        customerId: number,
        productId: number
    ): Promise<reviewType | never> {
        const conn = await client.connect()
        try {
            const query = `insert into review (title, description, rating) values ('${title}', '${description}', ${rating}) returning *;`
            const review = await conn.query(query)
            if (review.rows.length == 0) throw new Error()
            // add review to the product
            const query2 = `insert into reviews values(${productId} , ${customerId} ,${review.rows[0].review_id}) returning *`
            const reviews = await conn.query(query2)
            if (reviews.rows.length == 0) throw new Error()
            // update the rating
            const query3 = `update product set rating = (select AVG(r.rating) from product p , reviews rs, review r where p.product_id = rs.product_id and rs.review_id = r.review_id and p.product_id = ${productId}) where product_id = ${productId}`
            const ratingUpdated = await conn.query(query3)

            return review.rows[0]
        } catch (error) {
            throw new Error(`Can not add this review`)
        } finally {
            conn.release()
        }
    }
}
