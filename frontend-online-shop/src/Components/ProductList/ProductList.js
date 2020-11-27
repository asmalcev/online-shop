import React, { Component } from 'react'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

import './ProductList.css'

class ProductList extends Component {

  constructor(props) {
    super(props)
    
    this.gotContent = false
    this.gridContent = []
    this.fillGrid = this.fillGrid.bind(this)
    this.fillGridCallersInfo = {
      func: null,
      count: 0
    }
  }

  fillGrid(CALLER_FUNC) {
    if (this.fillGridCallersInfo.func === CALLER_FUNC) {
      this.fillGridCallersInfo.count++
    } else {
      this.fillGridCallersInfo.count = 0
    }
    this.fillGridCallersInfo.func = CALLER_FUNC

    fetch('http://localhost:8080/find', {
      headers: {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.props.searchRequest)
    }).then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.gridContent =
            <p>
              There are not any products in the shop for this request
              <br/>
              But you can add your <Link to="/new">New product</Link>
            </p>
        } else {
          this.gridContent =
            data.map(p => (
              <Product
                key={ p._id }
                name={ p.name }
                description={ p.description }
                params={ p.params }
              />
            ))
        }
        this.gotContent = true
        if (CALLER_FUNC === 'MOUNT') {
          this.forceUpdate()
        } else if (CALLER_FUNC === 'UPDATE') {
          if (this.fillGridCallersInfo.count <= 2) {
            this.forceUpdate()
          } else {
            this.fillGridCallersInfo.count = 0
          }
        }
      })
      .catch(() => {
        this.gridContent =
          <p>
            Can't connect to the server
          </p>
        this.gotContent = true
        if (CALLER_FUNC === 'MOUNT') {
          this.forceUpdate()
        } else if (CALLER_FUNC === 'UPDATE') {
          if (this.fillGridCallersInfo.count <= 2) {
            this.forceUpdate()
          } else {
            this.fillGridCallersInfo.count = 0
          }
        }
      })
  }

  componentDidUpdate() {
    this.fillGrid('UPDATE')
  }

  componentWillMount() {
    this.fillGrid('MOUNT')
  }

  render() {
    return (
      <div className="product-grid">
        {
          this.gotContent ?
          this.gridContent :
          <div>
            Loading...
          </div>
        }
      </div>
    )
  }
}

export default ProductList