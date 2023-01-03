import client from '../config'
import person from '../types/person'
import bcrypt from 'bcrypt'
import registerError from '../types/error'

const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD
const tokenSecret = process.env.TOKEN

export default class seller {
    // authentication
    async authenticate(email: string, password: string): Promise<person> {
        const conn = await client.connect()
        try {
            const query = `SELECT * FROM seller WHERE email = '${email}'`
            const seller = await conn.query(query)
            if (seller.rows.length == 0) throw new Error(`NOT FOUND`)
            if (bcrypt.compareSync(password + pepper, seller.rows[0].password))
                return seller.rows[0]
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
            const query = `INSERT INTO seller (name, email, password, address, gender, dob) VALUES ('${name}', '${email}', '${hash}', '${address}', '${gender}' , '${dob}') RETURNING *`
            const seller = await conn.query(query)
            if (seller.rows.length == 0) throw new Error()
            return seller.rows[0]
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
            const query = `SELECT email FROM seller WHERE email = '${email}'`
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
}
