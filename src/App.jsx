import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div
      data-scroll-container
      className='bg-black text-white
      min-h-[100dvh] w-full overflow-x-hidden
      '
    >
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
