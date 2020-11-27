const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Product = require('../model/Product.model')

router.post('/', (req, res, next) => {
  const request = req.body.request
  let mongooseRequest
  if (request === '') {
    mongooseRequest = {}
  } else {
    mongooseRequest = { $or: [
      { "name"       : { $regex: new RegExp(request), $options: 'i' } },
      { "description" : { $regex: new RegExp(request), $options: 'i' } }
    ]}
  }

  Product.find(mongooseRequest).exec().then(products => {
    res.status(200).json(products)
  }).catch(err => {
    console.err(err)
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router
