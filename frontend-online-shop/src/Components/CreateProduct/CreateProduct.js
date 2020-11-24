import React from 'react'
import CreatingForm from './CreatingForm/CreatingForm'

import './CreateProduct.css'

function CreateProduct() {
  return (
    <div className="create-product">
      <h2>Create new product</h2>
      <CreatingForm />
    </div>
  )
}

export default CreateProduct