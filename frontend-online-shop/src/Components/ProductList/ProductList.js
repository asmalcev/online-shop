import React, { Component } from 'react'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

import './ProductList.css'

class ProductList extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      gridContent: []
    }
    this.should = {
      flag1: true,
      flag2: true
    }
    this.flag = true
  }

  fillGrid() {
    fetch('http://localhost:8080/find', {
      method: 'POST',
      body: JSON.stringify({ request: this.props.searchRequest })
    }).then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({ gridContent:
            <p>
              There are not any products in the shop
              <br/>
              But you can add your <Link to="/new">New product</Link>
            </p>
          })
          this.flag = false
        } else {
          this.setState({ gridContent:
            data.map(p => (
              <Product
                key={ p._id }
                name={ p.name }
                description={ p.description }
                params={ p.params }
              />
            ))
          })
          this.flag = false
        }
      })
      .catch(() => {
        this.setState({ gridContent:
          <p>
            Can't connect to the server
          </p>
        })
        this.flag = false
      })
  }

  componentDidUpdate() {
    console.log('--- did update')
    this.fillGrid()
  }

  shouldComponentUpdate() {
    console.log('--- should update')
    return this.flag
  }

  componentDidMount() {
    console.log('--- did mount')
    this.fillGrid()
  }

  render() {
    console.log('--- did render')
    this.flag = true

    return (
      <div className="product-grid">
        { this.state.gridContent }
      </div>
    )
  }
}

export default ProductList