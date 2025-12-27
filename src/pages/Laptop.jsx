import React, { useState } from "react";
import "../CSS files/laptop.css";

import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.jpg";
import laptop4 from "../assets/laptop4.jpg";
import laptop5 from "../assets/laptop5.jpg";
import laptop6 from "../assets/laptop6.jpg";
import laptop7 from "../assets/laptop7.jpg";
import laptop8 from "../assets/laptop8.avif";
import laptop9 from "../assets/laptop9.jpg";
import laptop10 from "../assets/laptop10.jpeg";
import laptop11 from "../assets/laptop11.jpeg";
import laptop12 from "../assets/laptop12.jpeg";

const Laptops = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 201, name: "HP Pavilion 15", price: 54999, image: laptop1, description: "Powerful laptop with 15.6-inch display", brand: "HP", rating: 4.5 },
    { id: 202, name: "Dell Inspiron 14", price: 58999, image: laptop2, description: "Sleek laptop with powerful processor", brand: "Dell", rating: 4.7 },
    { id: 203, name: "HP Rezon 7", price: 69999, image: laptop3, description: "Business laptop with excellent performance", brand: "HP", rating: 4.8 },
    { id: 204, name: "ASUS VIVOBOOK 16", price: 44999, image: laptop4, description: "Budget-friendly with great specs", brand: "ASUS", rating: 4.3 },
    { id: 205, name: "ACER Aspire 5", price: 49999, image: laptop5, description: "Perfect for work and everyday use", brand: "ACER", rating: 4.4 },
    { id: 206, name: "MacBook Pro", price: 69999, image: laptop6, description: "Ideal for professionals", brand: "Apple", rating: 4.9 },
    { id: 207, name: "Samsung Galaxy Book4", price: 45789, image: laptop7, description: "Excellent portability and power", brand: "Samsung", rating: 4.6 },
    { id: 208, name: "Lenovo ThinkPad", price: 59999, image: laptop8, description: "Built for business use", brand: "Lenovo", rating: 4.7 },
    { id: 209, name: "Dell XPS13", price: 79999, image: laptop9, description: "High-end with top-tier features", brand: "Dell", rating: 4.9 },
    { id: 210, name: "Dell Inspiron 15", price: 49999, image: laptop10, description: "Great for students and casual use", brand: "Dell", rating: 4.2 },
    { id: 211, name: "HP Spectre x360", price: 109999, image: laptop11, description: "Premium convertible laptop with touch display", brand: "HP", rating: 4.8 },
    { id: 212, name: "ASUS ROG Zephyrus G14", price: 129999, image: laptop12, description: "Gaming laptop with high-end GPU", brand: "ASUS", rating: 4.9 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="laptops-container">

      <div className="marquee-container">
        <div className="marquee-content">
          <span>🚀 Exclusive Laptop Deals | Free Shipping | Extra 10% Off First Order | Use Code: LAPTOP10 🚀</span>
          <span>🚀 Exclusive Laptop Deals | Free Shipping | Extra 10% Off First Order | Use Code: LAPTOP10 🚀</span>
        </div>
      </div>

      <div className="laptops-header">
        <h1 className="laptops-title">Premium Laptops</h1>
        <p className="laptops-subtitle">Find your perfect computing companion</p>

        <input
          type="text"
          placeholder="Search laptops by name or brand..."
          className="laptop-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-badge">{product.brand}</div>

              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="image-overlay"></div>
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}>
                      {i < product.rating ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="rating-value">{product.rating}</span>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                  <span className="product-price">₹{product.price.toLocaleString()}</span>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No laptops found.</p>
        )}
      </div>
    </div>
  );
};

export default Laptops;
