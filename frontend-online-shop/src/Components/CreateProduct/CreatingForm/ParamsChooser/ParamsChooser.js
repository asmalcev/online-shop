import React, { useState } from 'react'
import ParamField from './ParamField/ParamField'

import './ParamsChooser.css'

function ParamsChooser() {
  const [params, setParams] = useState([
    {
      key: '',
      value: ''
    },
    {
      key: '',
      value: ''
    },
    {
      key: '',
      value: ''
    }
  ])
  const deleteParam = index => {
    const tmp = params.slice()
    tmp.splice(index, 1)
    setParams(tmp)
  }

  const changeParam = (index, key, value) => {
    const tmp = params.slice()
    if (key !== null) tmp[index].key = key
    if (value !== null) tmp[index].value = value
    setParams(tmp)
  }

  const fields = params.map((p, i) => 
    <ParamField
      key={ i }
      deleteCallback={ deleteParam }
      changeCallback={ changeParam }
      index={ i }
      keyValue={ p.key }
      value={ p.value }
    />
  )

  const handleAdd = e => {
    e.preventDefault()

    const tmp = params.slice()
    tmp.push({ key: '', value: '' })
    setParams(tmp)
  }

  return (
    <div className="params-list">
      <h3>Parameter name / Parameter value</h3>
      <button className="add-param" onClick={ handleAdd }>Add Parameter</button>
      { fields }
    </div>
  )
}

export default ParamsChooser