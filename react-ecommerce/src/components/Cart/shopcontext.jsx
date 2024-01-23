// Assuming this is your ShopContext.js file

import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Implement your logic to add items to the cart
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Other context provider logic

  const contextValue = {
    cartItems,
    addToCart,
    clearCart,
    // Other values you want to expose
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};
