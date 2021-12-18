const express = require('express');
const router = express.Router();
const Lists = require('../models/wishCategory.js')
router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    Lists.findByIdAndRemove(req.params.id, (err,deletedList)=> {
        res.json(deletedList)
    })
})
    router.post('/', (req,res) =>{
        Lists.create(req.body)
        .then(newList => res.json(newList))
    })

    router.get('/:id', (req, res) => {
        Lists.findById(req.params.id)
        .then(list => res.json({
            title: list.title,
            users: list.users,
            items: list.items
        }));
    })
    router.put('/:id', (req,res) =>{
        console.log(req.params.id)
        Lists.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
        ).then(updatedList => {
            console.log(updatedList)
            res.json(updatedList)
        })
    })
    router.get('/', (req, res)=> {
        Lists.find({}, (err, foundList)=>{
            res.json(foundList)
        })
    } )
   
        



module.exports = router