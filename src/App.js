import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, About, Cart, SingleProduct, Checkout, Error, Products, PrivateRoute } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' children={SingleProduct} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
