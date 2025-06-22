import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { CartProvider, useCart } from "./CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

import Home from "./pages/Home";
import Tshirts from "./pages/Tshirt";
import Mobiles from "./pages/Mobile";
import Laptops from "./pages/Laptop";
import Electronics from "./pages/Electronic";
import Toys from "./pages/Toys";
import Cart from "./components/Cart";
import SignIn from "./pages/SignIn";
import Payment from "./pages/Paytment";
import OrderConfirm from "./pages/OrderConfirm";
import OrderSuccess from "./pages/OrderSuccess";
import "./index.css";

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

const AppRoutes = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    resetCart,
    userDetails,
    setUserDetails,
    coupon,
    setCoupon,
  } = useCart();

  const isAuth = Boolean(userDetails);

  return (
    <>
      <Marquee />
      <Navbar cartCount={cartItems.length} />
      <Routes>
        
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/tshirts" element={<Tshirts addToCart={addToCart} />} />
        <Route path="/mobiles" element={<Mobiles addToCart={addToCart} />} />
        <Route path="/laptops" element={<Laptops addToCart={addToCart} />} />
        <Route path="/electronics" element={<Electronics addToCart={addToCart} />} />
        <Route path="/toys" element={<Toys addToCart={addToCart} />} />
       
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        } />
        <Route path="/signin" element={<SignIn setUserDetails={setUserDetails} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuth} />}>
          <Route path="/payment" element={
            <Payment
              cartItems={cartItems}
              userDetails={userDetails}
              coupon={coupon}
              setCoupon={setCoupon}
            />
          } />
          <Route path="/order-confirm" element={<OrderConfirm cartItems={cartItems} coupon={coupon} />} />
        </Route>
        <Route path="/order-success" element={<OrderSuccess resetCart={resetCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      
    </>
  );
};

const App = () => (
  <CartProvider>
    <Router>
      <AppRoutes />
    </Router>
  </CartProvider>
  
);

export default App;
