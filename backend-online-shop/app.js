const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const DBUrl = 'mongodb://localhost/online-shop'
mongoose.connect(DBUrl, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findRouter = require('./routes/find')
const createRouter = require('./routes/create')
const clearerRouter = require('./routes/clearProducts.dev')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/create', createRouter)
app.use('/deleteall', clearerRouter)
app.use('/find', findRouter)

const port = 8080
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})