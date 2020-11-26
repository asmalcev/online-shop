import React from 'react'

import './SearchField.css'

function SearchField(props) {
  const debounce = (fn, time) => {
    let timeoutId
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        timeoutId = null
        fn(...args)
      }, time)
    }
  }

  const searchHandler = e => {
    const value = e.target.value
    props.searchHandler(value)
  }

  return (
    <div className="input-container search-container" key={ props.id }>
      <input
        id={ props.id }
        type={ props.type }
        placeholder={ props.label }
        name={ props.name }
        className="input-field"
        autoComplete="off"
        required
        onChange={ debounce(searchHandler, 300) }
      />
      <label htmlFor={ props.id } className="textholder">{ props.label }</label>
    </div>
  )
}

export default SearchField