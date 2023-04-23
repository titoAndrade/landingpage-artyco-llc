import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

const Home = React.lazy(() => import('./routes/Home'))

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'))
// const Loader = React.lazy(() => import('./components/Loader/Loader'))

function App() {
  return (
    // <Suspense id='all' fallback={<Loader id='all' />}>
    <Suspense id='all'>

      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    
    </Suspense>
  );
}

export default App;
