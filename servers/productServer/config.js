const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const {
    NODE_ENV,
    user,
    password,
    database,
    database_test,
    host,
    dialect,
    port,
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    TOKEN,
} = process.env

const config = {
    env: NODE_ENV,
    host: host,
    port: Number(port),
    database: NODE_ENV == 'development' ? database : database_test,
    username: user,
    password: password,
    dialect: dialect,
}

const client = new Pool({
    host: config.host,
    port: Number(config.port),
    database: config.database,
    user: config.username,
    password: config.password,
})

module.exports = client
