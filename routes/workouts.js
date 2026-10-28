const express = require('express')

const router = express.Router()

//Get all workout
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workout'})
})


//Get a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})

//POST a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'POST a new workout'})
})

//DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a workout'})
})

module.exports = router