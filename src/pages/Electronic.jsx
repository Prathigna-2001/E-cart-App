import React, { useState } from "react";
import electronics1 from "../assets/electronic1.webp";
import electronics2 from "../assets/electronic2.webp";
import electronics3 from "../assets/electronic3.jpg";
import electronics4 from "../assets/electronic4.jpg";
import electronics5 from "../assets/electronic5.jpg";
import electronics6 from "../assets/electronic6.jpg";
import electronics7 from "../assets/electronic7.jpg";
import electronics8 from "../assets/electronic8.jpg";
import electronics9 from "../assets/electronic9.jpg";
import electronics10 from "../assets/electronic10.jpg";
import sonyLogo from "../assets/sony.png";
import samsungLogo from "../assets/samsung.png";
import lgLogo from "../assets/lg.png";
import philipsLogo from "../assets/philips.jpg";
import "../CSS files/electronic.css";

const productsData = [
  { id: 301, name: "Bluetooth Speaker", price: 1999, image: electronics1, brand: "Sony", rating: 4.5, description: "High-quality Bluetooth speaker with clear sound." },
  { id: 302, name: "Smart LED Bulb", price: 799, image: electronics2, brand: "Philips", rating: 4.2, description: "Control your lighting via smartphone app." },
  { id: 303, name: "Mixer Grinder", price: 3999, image: electronics3, brand: "LG", rating: 5, description: "Powerful and durable kitchen mixer." },
  { id: 304, name: "Wireless Headset", price: 1999, image: electronics4, brand: "Samsung", rating: 4.5, description: "Crystal-clear sound and deep bass." },
  { id: 305, name: "Redmi Smart TV", price: 24999, image: electronics5, brand: "Xiaomi", rating: 4.5, description: "Vivid display and smart Android features." },
  { id: 306, name: "Whirlpool Refrigerator", price: 19299, image: electronics6, brand: "Whirlpool", rating: 4.7, description: "Energy-efficient cooling system." },
  { id: 307, name: "iGear Retro Radio", price: 2290, image: electronics7, brand: "iGear", rating: 4.3, description: "Old-school design with modern sound." },
  { id: 308, name: "Philips Classic Radio", price: 1900, image: electronics8, brand: "Philips", rating: 4.1, description: "Premium vintage design and durable build." },
  { id: 309, name: "Crompton Ceiling Fan", price: 3999, image: electronics9, brand: "Crompton", rating: 4.4, description: "Silent operation with high air delivery." },
  { id: 310, name: "Wireless Mouse", price: 500, image: electronics10, brand: "Logitech", rating: 4.2, description: "Smooth tracking and compact design." },
];

const Electronics = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [addedMessage, setAddedMessage] = useState("");
  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedMessage(`${product.name} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  const filteredProducts = productsData
    .filter(p => (selectedBrand === "All" || p.brand === selectedBrand) && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder === "lowToHigh" ? a.price - b.price : sortOrder === "highToLow" ? b.price - a.price : 0);

  return (
    <div className="electronics-container">
      {addedMessage && <div className="added-popup">{addedMessage}</div>}
      <div className="cart-count">
        🛒 {cart.length}
      </div>
      <div className="brand-marquee">
        <div className="marquee-content">
          <span className="marquee-text">
            ⚡ Big Discounts on Electronics! 🚀 Free Shipping Above ₹999 &nbsp;&nbsp;
          </span>
          <div className="brand-logos">
            <img src={sonyLogo} alt="Sony" className="brand-logo" />
            <img src={samsungLogo} alt="Samsung" className="brand-logo" />
            <img src={lgLogo} alt="LG" className="brand-logo" />
            <img src={philipsLogo} alt="Philips" className="brand-logo" />
          </div>
          <span className="marquee-text">
            💥 Use Coupon Code: <strong>ELECTRO10</strong> for 10% OFF! &nbsp;&nbsp;
          </span>
        </div>
      </div>
      <div className="electronics-header">
        <h1 className="electronics-title">Premium Electronics</h1>
        <p className="electronics-subtitle">
          Discover the latest tech, gadgets, and appliances at best prices
        </p>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍 Search electronics..."
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="filter-select" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="All">All Brands</option>
          {[...new Set(productsData.map(p => p.brand))].map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select className="filter-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
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
        ))}
      </div>

    </div>
  );
};

export default Electronics;
