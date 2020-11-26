import React, { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import SearchField from '../SearchField/SearchField'

import './Catalog.css'

function Catalog() {
  const [ searchRequest, setSearch ] = useState('')

  const searchFieldChange = value => {
    setSearch(value)
  }

  return (
    <div className="catalog">
      <SearchField
        id="search-field"
        label="Search"
        searchHandler={ searchFieldChange }
      />
      <h2>Catalog</h2>
      <ProductList
        searchRequest={ searchRequest }
      />
    </div>
  )
}

export default Catalog