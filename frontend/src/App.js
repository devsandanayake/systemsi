import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Bilinsert from './Components/Bilinsert'
import Bil from './Components/Bil'
import InitiationUp from './Components/InitiationUp'
import InitiationGPON from './Components/InitiationGPON'
import AISecureNet from './Components/AISecureNet/AISecureNet'
import AINetGuard from './Components/AINetGuard/AINetGuard'
import NetGuard from './Components/NetGuard/NetGuard'
import Register from './Components/UserModule/Register'
import Login from './Components/UserModule/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bilinsert" element={<Bilinsert />} />
        <Route path="/bil" element={<Bil />} />
        <Route path="/initiationup" element={<InitiationUp />} />
        <Route path="/initiationgpon" element={<InitiationGPON />} />
        <Route path="/aisecurenet" element={<AISecureNet />} />
        <Route path="/ainetguard" element={<AINetGuard />} />
        <Route path="/netguard" element={<NetGuard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
