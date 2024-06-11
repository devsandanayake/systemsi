import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Bilinsert from './Components/Bilinsert'
import Bil from './Components/Bil'
import InitiationUp from './Components/InitiationUp'
import InitiationGPON from './Components/InitiationGPON'
import AISecurenet from './Components/AISecure/AINetGuard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bilinsert" element={<Bilinsert />} />
          <Route path="/bil" element={<Bil />} />
          <Route path="/initiationup" element={<InitiationUp />} />
          <Route path="/initiationgpon" element={<InitiationGPON />} />
          <Route path="/aisecurenet" element={<AISecurenet />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

