import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductPage from './pages/ProductPage';

import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import Header from './components/header/Header';


function App() {
  return (
    <div className='md:px-20'>
      <Header />
      <div className='mt-20'>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/products' >
            <Route index element={<ProductPage />} />
            <Route path=':id' element={<ProductDetailsPage />} />
            <Route path='category/:category' element={<ProductPage />} />
          </Route>
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
