const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  params: Object
})

module.exports = mongoose.model('ProductModel', ProductSchema)