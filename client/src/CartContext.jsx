import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newProduct = { ...product, id: Date.now(), quantity: 1 };
        return [...prev, newProduct];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter(item => item.id !== id));
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };