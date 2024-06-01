import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Product from './product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productwebsite" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
