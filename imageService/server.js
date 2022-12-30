const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getImage} = require('./middleware/image')
const port = 3600;

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/product/:id' , getImage , (req, res, next) => {

})