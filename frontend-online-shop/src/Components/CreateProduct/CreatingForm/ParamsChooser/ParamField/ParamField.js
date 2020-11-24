import React from 'react'

import './ParamField.css'

function ParamField(props) {
  const closeHandler = e => {
    e.preventDefault()

    props.deleteCallback(props.index)
  }

  const changeHandler = e => {
    const target = e.target
    if (target.className.search(/key/) !== -1) {
      props.changeCallback(props.index, e.target.value, null)
    } else {
      props.changeCallback(props.index, null, e.target.value)
    }

  }

  return (
    <div className="param-container">
      <input
        name="key"
        value={ props.keyValue }
        type="text"
        placeholder="Name"
        className="key-field"
        autoComplete="off"
        onChange={ changeHandler }
        required
      />
      <input
        name="value"
        value={ props.value }
        type="text"
        placeholder="Value" 
        className="value-field"
        autoComplete="off"
        onChange={ changeHandler }
        required
      />
      <button onClick={ closeHandler } className="close-btn" />
    </div>
  )
}

export default ParamField