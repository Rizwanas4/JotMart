// src/Components/Cart.jsx
import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import toast from 'react-hot-toast';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-200 to-purple-100 text-gray-800">
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

      {/* Cart Content */}
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4 mb-4 md:mb-0"
                />
                <div className="flex-grow w-full">
                  <h3 className="text-xl font-semibold text-purple-700">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-l hover:bg-purple-200 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 bg-purple-50 text-purple-700 border border-purple-200">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-r hover:bg-purple-200 transition"
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success("Item removed from cart");
                      }}
                      className="ml-4 text-sm text-red-600 hover:text-red-800 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-purple-800 font-bold text-lg mt-4 md:mt-0 md:ml-4">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8 border-t border-purple-300 pt-4">
              <h4 className="text-2xl font-bold text-purple-800">Total: ₹{totalAmount}</h4>
              <button onClick={() => navigate('/price')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
