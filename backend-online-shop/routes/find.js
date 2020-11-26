const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Product = require('../model/Product.model')

router.post('/', (req, res, next) => {
  // console.log(req.body.request)

  Product.find({}).exec().then(products => {
    res.status(200).json(products)
  }).catch(err => {
    console.err(err)
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router
