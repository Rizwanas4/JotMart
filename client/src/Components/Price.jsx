import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // ✅ use react-hot-toast

export default function Price() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!paymentMethod || !address || !contact) {
      toast.error('Please fill in all fields!');
      return;
    }

    toast.success(`Order placed successfully using ${paymentMethod}`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800">
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
      </header>

      {/* Main content */}
      <main className="pt-32 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Checkout</h1>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Select Payment Method:</h2>
          <div className="space-y-2">
            {['Cash on Delivery', 'UPI', 'Card'].map((method) => (
              <label key={method} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Delivery Address:</h2>
          <textarea
            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="4"
            value={address}
            placeholder="Enter full address..."
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Number:</h2>
          <input
            type="tel"
            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={contact}
            placeholder="Enter your phone number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleOrder}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md transition"
          >
            Place Order
          </button>
        </div>
      </main>
    </div>
  );
}
