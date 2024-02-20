import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import FormPage from './Forme.js';
import Home from './App.js';

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
