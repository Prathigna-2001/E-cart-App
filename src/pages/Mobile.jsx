import React from "react";
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

const Mobiles = ({ addToCart }) => {
  const products = [
    { id: 101, name: "Samsung Galaxy M14", price: 12999, image: mobile1, description: "Samsung Galaxy M14 is a budget-friendly smartphone." },
    { id: 102, name: "Redmi Note 12", price: 14999, image: mobile2, description: "Redmi Note 12 is a powerful smartphone." },
    { id: 103, name: "vivo t3pro", price: 16999, image: mobile3, description: "vivo t3pro is a high-end smartphone." },
    { id: 104, name: "Realme NARZO80 PRO", price: 17999, image: mobile4, description: "Realme NARZO 80 Pro is a high-end smartphone." },
    { id: 105, name: "iPhone 14 Pro", price: 39999, image: mobile5, description: "iPhone 14 Pro is a premium smartphone." },
    { id: 106, name: "Oppo F29", price: 24999, image: mobile6, description: "Oppo F29 is a budget-friendly smartphone." },
    { id: 107, name: "Samsung Galaxy S22 Ultra", price: 29999, image: mobile7, description: "S22 Ultra is a premium Android smartphone." },
    { id: 108, name: "OnePlus 9 Pro", price: 24999, image: mobile8, description: "Great for gaming and performance." },
    { id: 109, name: "iQOO Z10", price: 25999, image: mobile9, description: "Best performing smartphone in good condition." },
    { id: 110, name: "Moto Edge 40 Pro+", price: 25999, image: mobile10, description: "Great price with top-tier performance." },
  ];

  return (
    <div className="product-page">
      <marquee className="marquee">🔥 Best Mobile Deals of the Year - Limited Time Offers 🔥</marquee>
      <h2 className="section-title">Top Mobile Phones</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="desc">{product.description}</p>
            <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
