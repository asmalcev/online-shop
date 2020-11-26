const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Product = require('../model/Product.model')

router.post('/', (req, res, next) => {
  const prod = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    params: req.body.params
  })
  prod.save().then(result => {
    console.log('--- created', result)
    res.status(201).send()
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router
