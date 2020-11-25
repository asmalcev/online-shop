import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Sidebar from './Sidebar/Sidebar'
import Catalog from './Catalog/Catalog'
import About from './About/About'
import CreateProduct from './CreateProduct/CreateProduct'

function App() {
  return (
    <Router>
      <Sidebar/>

      <section>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/new">
            <CreateProduct/>
          </Route>
          <Route path="/">
            <Catalog/>
          </Route>
        </Switch>
      </section>

    </Router>
  )
}

export default App