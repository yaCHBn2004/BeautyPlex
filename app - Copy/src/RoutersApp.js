import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductsPage from './Product.js';
import FormPage from './Forme.js';
import Home from './App.js';
import Nav  from './Nav.js';

const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forme" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
