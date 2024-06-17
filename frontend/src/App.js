import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Bilinsert from './Components/Bilinsert';
import Bil from './Components/Bil';
import InitiationUp from './Components/InitiationUp';
import InitiationGPON from './Components/InitiationGPON';
import AISecureNet from './Components/AISecureNet/AISecureNet';
import AINetGuard from './Components/AINetGuard/AINetGuard';
import NetGuard from './Components/NetGuard/NetGuard';
import Register from './Components/UserModule/Register';
import Login from './Components/UserModule/Loging';
import BillUpdateDF from './Components/BillUpdateDF';
import NetGuardAll from './Components/NetGuard/NetGuardAll';

const App = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // Assuming 'role' is stored in localStorage

  return (
    <BrowserRouter>
      <Routes>
        {!token ? (
          // If no token, redirect to login
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : role === 'admin' ? (
          // If user is admin, load all routes
          <>
            <Route path="/" element={<Home />} />
            <Route path="/bilinsert" element={<Bilinsert />} />
            <Route path="/bil" element={<Bil />} />
            <Route path="/initiationup" element={<InitiationUp />} />
            <Route path="/initiationgpon" element={<InitiationGPON />} />
            <Route path="/aisecurenet" element={<AISecureNet />} />
            <Route path="/ainetguard" element={<AINetGuard />} />
            <Route path="/netguard" element={<NetGuard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/route/update/:id" element={<BillUpdateDF />} />
            <Route path="/netguardall" element={<NetGuardAll />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // If user is guest, only show home page
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
