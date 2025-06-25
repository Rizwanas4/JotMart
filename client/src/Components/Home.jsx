import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-white via-purple-200 to-purple-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-100 bg-white shadow-md flex items-center justify-between px-4 py-6">
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

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen pt-10 px-4">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h3 className="text-xl sm:text-4xl text-purple-700 font-bold uppercase">
            Smart Supplies for Bright Mind
          </h3>
          <p className="text-purple-500 text-lg mt-3">
            – Your desk's best friend
          </p>

          <Link
            to="/login"
            className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded hover:bg-purple-500 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
