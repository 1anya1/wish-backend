const express = require('express');
const router = express.Router();
const Lists = require('../models/wishCategory.js')
    router.post('/', (req,res) =>{
        Lists.create(req.body)
        .then(newList => res.json(newList))
    })
    router.get('/', (req, res)=> {
    Lists.find({}, (err, foundList)=>{
        console.log(foundList)
        res.json(foundList)
    })
        
} )


module.exports = router