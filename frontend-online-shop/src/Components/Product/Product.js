import React from 'react'

import './Product.css'

function Product(props) {
  let tags = []
  for (let p in props.params) {
    tags.push(<span key={ p }>{ props.params[p] }</span>)
  }

  return (
    <div className="product">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className="params">
        { tags }
      </div>
    </div>
  )
}

export default Product