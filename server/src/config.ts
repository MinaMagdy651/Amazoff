import * as dotenv from 'dotenv'
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
} = process.env

export const config = {
    env: NODE_ENV,
    host: host,
    port: Number(port),
    database: NODE_ENV == 'development' ? database : database_test,
    username: user,
    password: password,
    dialect: dialect,
}
