import client from '../config'
import person from '../types/person'
import bcrypt from 'bcrypt'
import { registerError } from '../types/error'

const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD
const tokenSecret = process.env.TOKEN

export default class customer {
    // authentication
    async authenticate(email: string, password: string): Promise<person> {
        const conn = await client.connect()
        try {
            let query = `SELECT * FROM customers WHERE email = '${email}'`

            const Customer = await conn.query(query)
            if (Customer.rows.length == 0) throw new Error(`NOT FOUND`)
            if (
                bcrypt.compareSync(password + pepper, Customer.rows[0].password)
            )
                query = `SELECT COUNT(*) FROM CART WHERE CUSTOMER_ID = ${Customer.rows[0].id};`
            let getCart = await conn.query(query)
            Customer.rows[0].cart = getCart.rows[0].count
            return Customer.rows[0]
            throw new Error(`NOT FOUND`)
        } catch (err) {
            throw err
        } finally {
            conn.release()
        }
    }

    // sign-up
    async create(
        name: string,
        email: string,
        password: string,
        address: string,
        gender: string,
        dob: Date
    ): Promise<person | never> {
        const conn = await client.connect()
        try {
            const hash = bcrypt.hashSync(password + pepper, Number(saltRounds))
            const query = `INSERT INTO customers (name, email, password, address, gender, dob) VALUES ('${name}', '${email}', '${hash}', '${address}', '${gender}' , '${dob}') RETURNING *`
            const customer = await conn.query(query)
            if (customer.rows.length == 0) throw new Error()
            return customer.rows[0]
        } catch (e) {
            throw new registerError(`Cannot create this account`)
        } finally {
            conn.release()
        }
    }

    //does email exist?
    async checkEmail(email: string): Promise<boolean | never> {
        const conn = await client.connect()
        try {
            const query = `SELECT email FROM customers WHERE email = '${email}'`
            const emailExists = await conn.query(query)

            if (emailExists.rows.length)
                throw new Error(`This email already exists`)
            return true
        } catch (e) {
            throw e
        } finally {
            conn.release()
        }
    }
    async getUserByToken(customer_id: number): Promise<person> {
        const conn = await client.connect()
        try {
            const query = `select * from customers where id = ${customer_id};`
            const user = await conn.query(query)
            if (user.rows.length == 0) throw new Error()
            return user.rows[0]
        } catch (e) {
            throw e
        } finally {
            conn.release()
        }
    }
}
