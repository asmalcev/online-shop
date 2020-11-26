import React, { Component } from 'react'
import Product from '../Product/Product'
import { Link } from "react-router-dom"

import './ProductList.css'

class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gridContent: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/find', {
      method: 'POST'
    }).then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({
            gridContent: <p>
              There are not any products in the shop
              <br/>
              But you can add your <Link to="/new">New product</Link></p>
          })
        } else {
          this.setState({
            gridContent:
              data.map(p => (
                <Product
                  key={ p._id }
                  name={ p.name }
                  description={ p.description }
                  params={ p.params }
                />
              ))
          })
        }
      })
  }

  render() {
    return (
      <div className="product-grid">
        { this.state.gridContent }
      </div>
    )
  }
}

export default ProductList