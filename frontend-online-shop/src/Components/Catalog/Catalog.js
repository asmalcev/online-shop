import React from 'react'
import ProductList from '../ProductList/ProductList'

import './Catalog.css'

function Catalog() {
  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <ProductList/>
    </div>
  )
}

export default Catalog