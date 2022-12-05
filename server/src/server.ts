import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3500

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/', (_req, res) => res.json('Home Page..'))

export default app
