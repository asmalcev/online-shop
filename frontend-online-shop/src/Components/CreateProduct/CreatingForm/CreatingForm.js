import React from 'react'
import InputField from './InputField/InputField'
import ParamsChooser from './ParamsChooser/ParamsChooser'

import './CreatingForm.css'

function CreatingForm() {
  return (
    <form className="creating-form">
      <InputField
        id="name-field"
        type="text"
        name="name"
        label="Product name"
      />
      <InputField
        id="description-field"
        type="textarea"
        name="description"
        label="Description"
      />
      <ParamsChooser/>
      <input type="submit" value="Create"/>
    </form>
  )
}

export default CreatingForm