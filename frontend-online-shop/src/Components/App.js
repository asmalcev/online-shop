import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Sidebar from './Sidebar/Sidebar'
import Catalog from './Catalog/Catalog'

function App() {
  return (
    <Router>
      <Sidebar/>

      <section>
        <Switch>
          <Route path="/about">
            Welcome to my online shop!
          </Route>
          <Route path="/new">
            
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