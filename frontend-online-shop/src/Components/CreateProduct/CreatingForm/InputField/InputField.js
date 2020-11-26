import React from 'react'

import './InputField.css'

function InputField(props) {
  return (
    <div className="input-container" key={ props.id }>
      { props.type === "textarea" ?
        <textarea
          id={ props.id }
          placeholder={ props.label }
          name={ props.name }
          className="input-field"
          required
        ></textarea>
      :
        <input
          id={ props.id }
          type={ props.type }
          placeholder={ props.label }
          name={ props.name }
          className="input-field"
          autoComplete="off"
          required
        />
      }
      <label htmlFor={ props.id } className="textholder">{ props.label }</label>
    </div>
  )
}

export default InputField