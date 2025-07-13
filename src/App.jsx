import React, { useState } from 'react';
import Inputs from './pages/inputs/inputs.jsx';
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    
       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inputs" element={<Inputs />} />
        </Routes>
      </div>
      
   
  )
}

export default App
