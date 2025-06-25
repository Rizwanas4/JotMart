import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Price from './Components/Price';
import {CartProvider} from './CartContext.jsx';
import {Toaster} from 'react-hot-toast';
// import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <CartProvider>
      
    <Router>
      <Toaster position="top-center" reverseOrder={false}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Price />} />
      </Routes>
      </Router>
       </CartProvider>
    
  );
}

export default App;
