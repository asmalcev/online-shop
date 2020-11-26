const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Product = require('../model/Product.model')

router.get('/', (req, res, next) => {
  Product.deleteMany({}).then(() => {
    res.status(200).send('Cleared')
  }).catch(err => {
    res.status(500).json({error: err})
  })
})

module.exports = router
