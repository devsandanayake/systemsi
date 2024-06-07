import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import AISecureNet from './Components/AISecureNet'
import NetGuard from './Components/NetGuard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AISecure" element={<AISecureNet />} />
          <Route path="/NetGuard" element={<NetGuard />} />

        </Routes>
      </BrowserRouter>
    )
  }
}

