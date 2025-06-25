import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800">
      {/* Header */}
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

        <div className="text-purple-600 text-3xl cursor-pointer fas fa-bars md:hidden"></div>
      </header>

      {/* Contact Form Section */}
      <section className="flex justify-center items-center pt-32 pb-10 px-4 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Contact Us</h2>

          <label className="block mb-2 text-sm text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded border border-purple-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="block mb-2 text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded border border-purple-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="block mb-2 text-sm text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-3 rounded border border-purple-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="block mb-2 text-sm text-gray-700">Subject</label>
          <textarea
            name="subject"
            rows="4"
            required
            className="w-full p-3 rounded border border-purple-300 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.subject}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
