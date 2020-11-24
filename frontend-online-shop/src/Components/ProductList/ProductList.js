import React, { Component } from 'react'
import Product from '../Product/Product'

import './ProductList.css'

import products from './products'

class ProductList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const gridContent = products.map(p => (
      <Product
        key={ p.id }
        name={ p.name }
        description={ p.description }
        params={ p.params }
      />
    ))

    return (
      <div className="product-grid">
        { gridContent }
      </div>
    )
  }
}

export default ProductList