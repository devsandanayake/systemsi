import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Bilinsert from './Components/Bilinsert'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bilinsert" element={<Bilinsert />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

