import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://jotmart-backend.onrender.com/api/login", {
      email,
      password
    });

    toast.success("Login successful!");
    navigate('/products');
  } catch (error) {
    toast.error("Invalid email or password");
    console.error("Login error:", error);
  }
};


  return (
    <div className="bg-gradient-to-br from-white via-purple-200 to-purple-100 min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-purple-600 font-bold text-3xl hover:text-purple-800 transition">
  JOTMART
</Link>


        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 text-lg hover:text-purple-600">Home</Link>
          <Link to="/products" className="text-gray-700 text-lg hover:text-purple-600">Products</Link>
          <Link to="/cart" className="text-gray-700 text-lg hover:text-purple-600">Cart</Link>
          <Link to="/contact" className="text-gray-700 text-lg hover:text-purple-600">Contact</Link>
        </nav>

        <div id="menu-bars" className="text-purple-600 text-3xl cursor-pointer fas fa-bars md:hidden"></div>
      </header>

      {/* Login Section */}
      <section className="flex items-center justify-center min-h-screen pt-28 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-10">
          <form onSubmit={handleLogin}>
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Login</h2>

            <label className="block mb-2 text-sm text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded border border-purple-300 bg-purple-50 text-gray-800 mb-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 rounded border border-purple-300 bg-purple-50 text-gray-800 mb-6 text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded text-lg transition"
            >
              Login
            </button>

            <p className="text-sm mt-6 text-center text-gray-700">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
