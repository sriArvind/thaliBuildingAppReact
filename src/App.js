import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Thali from './components/Thali/Thali';
import Checkout from './components/Checkout/Checkout';


const App = () => {

  return (

    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customizeThali' element={<Thali />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

    </>

  );

};


export default App;