import React, { Component } from 'react'

import './SearchField.css'

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

class SearchField extends Component {
  constructor(props) {
    super(props)

    this.paramsSearch = false
    this.state = {
      extended: false
    }
    this.changeParamsSearch = this.changeParamsSearch.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.extenderHandler = this.extenderHandler.bind(this)
  }
  
  changeParamsSearch(e) {
    this.paramsSearch = e.target.checked
  } 

  searchHandler(e) {
    const value = e.target.value
    this.props.searchHandler({
      request: value.trim(),
      extendedSearch: {
        paramsSearch: this.paramsSearch
      }
    })
  }

  extenderHandler() {
    this.setState({ extended: !this.state.extended })
  }

  render() {
    return (
      <div className={
        "input-container search-container " + (this.state.extended && "extended")
      }>
        <input
          id={ this.props.id }
          type={ this.props.type }
          placeholder={ this.props.label }
          name={ this.props.name }
          className="input-field"
          autoComplete="off"
          required
          onChange={ debounce(this.searchHandler, 300) }
        />
        <label
          htmlFor={ this.props.id }
          className="textholder"
        >{ this.props.label }</label>
        <div
          className="extender"
          title="Extended mode"
          onClick={ this.extenderHandler }
        ></div>
        <div
          className="extended-options"
        >
          <label><input type="checkbox" onClick={ this.changeParamsSearch }/> Search by parameters</label>
        </div>
      </div>
    )
  }
}

export default SearchField