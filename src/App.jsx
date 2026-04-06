import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home'
import Research from './components/Research'
import Aisiem from './components/Aisiem'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/aisiem" element={<Aisiem />} />
    </Routes>
  )
}

export default App
