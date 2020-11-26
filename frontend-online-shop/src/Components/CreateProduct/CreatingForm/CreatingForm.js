import React, { useState } from 'react'

import InputField from './InputField/InputField'
import ParamsChooser from './ParamsChooser/ParamsChooser'
import Modal from '../../Modal/Modal'

import './CreatingForm.css'

function CreatingForm() {
  const [ modalParams, setModalParams ] = useState({
    msg: '',
    title: '',
    shown: false
  })

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
    }).then(response => {
      setModalParams({
        msg: response.status === 201 ? 'Product created' : 'Server error',
        title: response.status,
        shown: true
      })
    })
    e.target.reset()
    document.querySelectorAll('input[type=text]').forEach(input => {
      input.value = ''
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
      {
        modalParams.shown &&
        <Modal
          closeModal={ setModalParams.bind(null, {
            msg: '',
            title: '',
            shown: false
          }) }
          message={ modalParams.msg }
          title={ modalParams.title }
        />
      }
    </form>
  )
}

export default CreatingForm