import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { useEffect, useState } from 'react'
import './App.css'

// React Components
import Header from './components/Header'
import CommandCenter from './components/CommandCenter'

// React Pages
import About from './pages/About'
import Home from './pages/Home'
import Progress from './pages/Progress'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
