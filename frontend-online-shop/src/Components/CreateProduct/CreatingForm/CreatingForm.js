import React from 'react'
import InputField from './InputField/InputField'
import ParamsChooser from './ParamsChooser/ParamsChooser'

import './CreatingForm.css'

function CreatingForm() {
  const formHandler = e => {
    e.preventDefault()

    fetch('http://localhost:8080/create', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(e.target)
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }
  
  return (
    <form className="creating-form" onSubmit={ formHandler }>
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