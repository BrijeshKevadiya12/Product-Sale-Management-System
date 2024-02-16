import './App.css';
import Navbar from './Components/Navbar';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saveproduct from './Components/pages/save-product';
import AllProducts from './Components/pages/allproducts';
import FindProduct from './Components/pages/findproduct';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/save-products" element={<Saveproduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/findproduct" element={<FindProduct />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
