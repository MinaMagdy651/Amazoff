
const fs = require('fs');
const {resolve} = require('path');
const app = require('../server')

const express = require('express'
)
const dir = './products';

const getImages = (req, res, next) => {
    const id = req.params.id 
    const name = req.query.name 
    const fileabs = resolve(`${dir}/${id}`);
    const file = fs.readdirSync(fileabs)
    let flag = false;
    file.forEach((image) => {
        if(image == name){
            res.sendFile(resolve(`${dir}/${id}/${image}`));
            flag = true;
        }
    }) 
    if(!flag)
        res.status(404).send('Image not found')
}

const postImages = (req, res, next) => {
    try{
        const id = req.params.id 
        const fileabs = resolve(`${dir}/${id}`);
        if(!fs.existsSync(fileabs))
            fs.mkdirSync(fileabs)
        const file = fs.readdirSync(fileabs)
        const images = req.files
        console.log(req);
        Object.keys(images).forEach(function(key) {
            const path = resolve(`${dir}/${id}/${images[key].name}`);
            images[key].mv(path, images[key].name, function(err){})
        })
    }catch(err){
        res.status(500).send('Can not post these images');
    }
    res.status(200).send('Images uploaded successfully')
}



module.exports = {
    getImages,
    postImages,
    
}
