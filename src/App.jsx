import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

import Home from './components/Home'
import Research from './components/Research'
import Aisiem from './components/Aisiem'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/aisiem" element={<Aisiem />} />
      </Routes>
    </>
  )
}

export default App
