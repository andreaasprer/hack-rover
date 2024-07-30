import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// React Pages
import About from './pages/About'
import Home from './pages/Home'
import Progress from './pages/Progress'

const App = () => {
  return (
    <div className='App'>
      {/* using browser router to link all the separate react pages into the website */}
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