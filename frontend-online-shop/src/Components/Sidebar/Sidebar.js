import React from 'react'
import { Link } from "react-router-dom"

import './Sidebar.css';

function Sidebar() {
  return (
    <nav>
      <h2>Sidebar</h2>
      <ul>
        <li><Link to="/">Catalog</Link></li>
        <li><Link to="/new">New product</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar;