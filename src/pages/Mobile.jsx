import React, { useState } from "react";
import "../pages/mobile.css";

import mobile1 from "../assets/mobile1.avif";
import mobile2 from "../assets/moblle2.jpg";
import mobile3 from "../assets/mobile3.webp";
import mobile4 from "../assets/mobile4.jpg";
import mobile5 from "../assets/mobile5.webp";
import mobile6 from "../assets/mobile6.webp";
import mobile7 from "../assets/mobile7.webp";
import mobile8 from "../assets/mobile8.jpg";
import mobile9 from "../assets/mobile9.jpg";
import mobile10 from "../assets/mobile10.webp";
import mobile11 from "../assets/moblies12.jpg"; 
import mobile12 from "../assets/mobilez12.webp"; 

const Mobiles = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const products = [
    { id: 101, name: "Samsung Galaxy M14", price: 12999, image: mobile1, description: "Budget-friendly smartphone", rating: 4.3 },
    { id: 102, name: "Redmi Note 12", price: 14999, image: mobile2, description: "Powerful smartphone for daily use", rating: 4.5 },
    { id: 103, name: "Vivo T3 Pro", price: 16999, image: mobile3, description: "High-end smartphone with smooth performance", rating: 4.6 },
    { id: 104, name: "Realme NARZO80 PRO", price: 17999, image: mobile4, description: "Excellent specs and gaming performance", rating: 4.4 },
    { id: 105, name: "iPhone 14 Pro", price: 39999, image: mobile5, description: "Premium Apple smartphone", rating: 4.9 },
    { id: 106, name: "Oppo F29", price: 24999, image: mobile6, description: "Affordable smartphone with good battery", rating: 4.2 },
    { id: 107, name: "Samsung Galaxy S22 Ultra", price: 29999, image: mobile7, description: "High-end Android smartphone", rating: 4.8 },
    { id: 108, name: "OnePlus 9 Pro", price: 24999, image: mobile8, description: "Fast performance and smooth UI", rating: 4.5 },
    { id: 109, name: "iQOO Z10", price: 25999, image: mobile9, description: "Gaming focused smartphone", rating: 4.6 },
    { id: 110, name: "Moto Edge 40 Pro+", price: 25999, image: mobile10, description: "Premium design with top performance", rating: 4.5 },
    { id: 111, name: "NOTHING 3A phone", price: 46999, image: mobile11, description: "Flagship Google phone with excellent camera", rating: 4.7 },
    { id: 112, name: "Samsung Galaxy Z Fold 5", price: 159999, image: mobile12, description: "Futuristic foldable smartphone", rating: 4.9 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlertMessage(`✅ "${product.name}" added to cart!`);
    setTimeout(() => setAlertMessage(""), 2000);
  };

  return (
    <div className="mobiles-container">
  
      <div className="marquee-container">
        <div className="marquee-content">
          <span>🔥 Best Mobile Deals of the Year - Limited Time Offers 🔥</span>
          <span>🔥 Best Mobile Deals of the Year - Limited Time Offers 🔥</span>
        </div>
      </div>

      
      <div className="mobiles-header">
        <h1 className="mobiles-title">Top Mobile Phones</h1>
        <input
          type="text"
          placeholder="Search Mobile..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

   
      {alertMessage && <div className="alert">{alertMessage}</div>}

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
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
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No mobiles found.</p>
        )}
      </div>

      <style>{`
        .alert {
          background-color: #169c1bff;
          color: white;
          padding: 0.8rem 1.2rem;
          border-radius: 30px;
          text-align: center;
          font-weight: 600;
          margin: 1rem 0;
          animation: fadeInOut 2s forwards;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Mobiles;
