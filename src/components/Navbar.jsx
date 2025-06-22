import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <img
            src="/onlineshope.jpg"  
            alt="Shop Logo"
            className="logo-image"
         width="50px" height="60px"  margin="20px"  />
          <span className="brand-text">My Trendy Shop App</span>
        </Link>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/tshirts">T-Shirts</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/toys">Toys</Link>
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Navbar;
