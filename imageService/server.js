const express = require('express');
const bodyParser = require('body-parser');
const {getImages} = require('./middleware/image')
const {postImages} = require('./middleware/image')

var fileupload = require("express-fileupload");

const app = express();
const port = 3600;

app.use(fileupload());
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/product/:id/image?' , getImages)

app.post('/product/:id' , postImages)


module.exports = app