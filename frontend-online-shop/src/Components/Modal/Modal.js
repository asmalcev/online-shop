import React from 'react'

import './Modal.css'

function Modal(props) {
  return (
    <div className="modal">
      <div className="message">
        <h3>{ props.title }/{ props.message }</h3>
        <button onClick={ props.closeModal }>Close</button>
      </div>
    </div>
  )
}

export default Modal