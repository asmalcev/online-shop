const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const port = 8080
const DBUrl = 'mongodb://localhost/online-shop'
const Product = require('./Product.model')

mongoose.connect(DBUrl, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.post('/create', (req, res) => {
  console.log('called /create')
  console.log('Got body:', req.body)
  // const prod = new Product({
  //   _id: new mongoose.Types.ObjectId(),
  //   name: '',
  //   description: '',
  //   params: {
  //   }
  // })
  // prod.save().then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  res.status(201)
})

app.post('/delete/:productId', (req, res) => {
  console.log('called /delete')

  res.status(200)
})

app.post('/', (req, res) => {
  console.log('called /')

  Product.find({}).exec().then(products => {
    console.log(products)
    res.status(200).json(products)
  }).catch(err => {
    console.err(err)
    res.status(500).json({
      error: err
    })
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})