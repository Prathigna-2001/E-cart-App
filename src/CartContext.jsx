import React, { createContext, useContext, useState, useCallback } from "react";

// Create Cart Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [coupon, setCoupon] = useState(0);

  // Add item to cart or increase quantity
  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // Change item quantity
  const changeQuantity = useCallback((id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);
  const resetCart = useCallback(() => {
    setCartItems([]);
    setUserDetails(null);
    setCoupon(0);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
        resetCart,
        userDetails,
        setUserDetails,
        coupon,
        setCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
