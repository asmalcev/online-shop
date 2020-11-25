import React from 'react'

import './About.css'

function About() {
  const handler = () => {
    fetch('http://localhost:8080', {
      method: 'POST',
      mode: 'no-cors'
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="about">
      <h2>About</h2>
      <div>
        <button onClick={ handler }>Check all</button>
      </div>
    </div>
  )
}

export default About