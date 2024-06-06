import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Components/Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

