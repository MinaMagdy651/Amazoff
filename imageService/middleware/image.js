
const fs = require('fs');
const dir = '../products';

function getImage (req, res, next){
    const id = req.params.id 
    const name = req.params.name
    console.log('here');
    const file = fs.readdirSync(`${dir}/${name}`);
    file.forEach((image) => {
        console.log(image);
    }) 
}
module.exports = {
    getImage
}
