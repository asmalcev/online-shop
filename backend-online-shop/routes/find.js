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
      { name        : { $regex: new RegExp(request), $options: 'i' } },
      { description : { $regex: new RegExp(request), $options: 'i' } }
    ]}
  }

  Product.find(mongooseRequest).exec().then(products => {
    if (req.body.extendedSearch.paramsSearch) {
      Product.find({}).exec().then(allProducts => {
        const filteredProducts = allProducts.filter(p => {
          for (const value of Object.values(p.params)) {
            if (value.search(new RegExp(request)) >= 0) {
              return true
            }
          }
          return false
        })
        products.forEach(p => {
          if (filteredProducts.findIndex(fp => fp._id.equals(p._id)) === -1) {
            filteredProducts.push(p)
          }
        })
        res.status(200).json(filteredProducts)
      }).catch(err => {
        console.err(err)
        res.status(500).json({
          error: err
        })
      })
    } else {
      res.status(200).json(products)
    }
  }).catch(err => {
    console.err(err)
    res.status(500).json({
      error: err
    })
  })
})

router.get('/:searchRequest', (req, res, next) => {
  const request = req.params.searchRequest

  Product.find({}).exec().then(products => {
    const filteredProducts = products.filter(p => {
      for (const value of Object.values(p.params)) {
        if (value.search(new RegExp(request)) >= 0) {
          return true
        }
      }
      return false
    })

    res.status(200).json(filteredProducts)
  }).catch(err => {
    console.err(err)
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router
