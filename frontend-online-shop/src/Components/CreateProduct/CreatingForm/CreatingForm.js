import React from 'react'
import InputField from './InputField/InputField'
import ParamsChooser from './ParamsChooser/ParamsChooser'

import './CreatingForm.css'

function CreatingForm() {
  const formHandler = e => {
    e.preventDefault()

    const data = {}
    const formData = new FormData(e.target)
    for (let [key, value] of formData.entries()) {
      value = value.trim()
      if (key === "key") {
        if (data.params === undefined) data.params = {}
        data.params[value] = null
      } else if (key === "value") {
        const firstNullIndex = Object.values(data.params).findIndex(v => v === null)
        data.params[ Object.keys(data.params)[firstNullIndex] ] = value
      } else {
        data[key] = value
      }
    }

    fetch('http://localhost:8080/create', {
      headers: {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => console.log(response.status))
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