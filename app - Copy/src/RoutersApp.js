import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductsPage from './Product.js';
import FormPage from './Forme.js';
import Home from './Home.js';
import Hiii from './hi.js'

const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/forme" element={<FormPage />} />
        <Route path="/hii" element={<Hiii/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
