

import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [coupon, setCoupon] = useState(0);

  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback(id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  
  const changeQuantity = useCallback((id, delta) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  const resetCart = useCallback(() => {
    setCartItems([]);
    setUserDetails(null);
    setCoupon(0);
  }, []);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      changeQuantity,
      resetCart,
      userDetails, setUserDetails,
      coupon, setCoupon
    }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
