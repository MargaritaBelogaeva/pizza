import React from 'react'

import { Header } from './components'
import { Home, Cart } from './pages'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return(
    <Router>
          <div className="wrapper">
            <Header />
            <div className="content">
            <Routes>
            <Route path="/" Component={Home} /> 
            <Route path="/cart" Component={Cart}/>
            </Routes>
            </div>
          </div>
          </Router>
  )
}

export default App
