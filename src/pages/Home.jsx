import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../CartContext";
import bgVideo from "../assets/video.mp4";
import img1 from "../assets/electronic5.jpg";
import img2 from "../assets/headset.jpg";
import img3 from "../assets/laptop4.jpg";
import img4 from "../assets/jeans.jpg";
import img5 from "../assets/electronic10.jpg";
import img6 from "../assets/googlepixel 8.jpg";
import img7 from "../assets/tshrts gymbewakoof.webp";
import img8 from "../assets/apple mobile.webp";
import img01 from "../assets/mobilez12.webp";
import img02 from "../assets/tshirt ausk.webp";
import img03 from "../assets/toy10.jpg";
import img04 from "../assets/headset.jpg";
import img05 from "../assets/laptop3.jpg";
import "../CSS files/Save.css";

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const featuredProducts = [
    { id: 1, img: img1, title: "4K Ultra HD Smart TV", category: "Electronics", price: "₹599", originalPrice: "₹749", discount: "20% OFF", rating: 4.5 },
    { id: 2, img: img2, title: "Wireless Headphones", category: "Audio", price: "₹129", originalPrice: "₹159", discount: "15% OFF", rating: 4.3 },
    { id: 3, img: img3, title: "Gaming Laptop Pro", category: "Computers", price: "₹999", originalPrice: "₹1299", discount: "25% OFF", rating: 4.7 },
    { id: 4, img: img4, title: "Designer Denim Jeans", category: "Fashion", price: "₹799", originalPrice: "₹999", discount: "30% OFF", rating: 4.2 },
    { id: 5, img: img5, title: "ASUS MOUSES", category: "Electronics", price: "₹699", originalPrice: "₹799", discount: "10% OFF", rating: 4.6 },
    { id: 6, img: img6, title: "GOOGLE mobiles", category: "mobiles", price: "₹45999", originalPrice: "₹31299", discount: "25% OFF", rating: 4.8 },
    { id: 7, img: img7, title: "gym t-shrits", category: "Fashion", price: "₹799", originalPrice: "₹599", discount: "30% OFF", rating: 4.5 },
    { id: 8, img: img8, title: "Apple mobile", category: "mobiles", price: "₹45699", originalPrice: "₹34799", discount: "21% OFF", rating: 4.9 },
  ];

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const filteredProducts = featuredProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to <span className="colorful-text">Trendy World 🌎</span></h1>
            <p className="hero-subtitle">
              Discover the Latest <span className="colorful-text">Fashion</span>,
              <span className="colorful-text"> Electronics</span> & <span className="colorful-text">Essentials</span>
            </p>
            <button className="btn btn-primary" onClick={() => navigate("/products")}>
              🛍️ Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="marquee-section">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <span className="marquee-text">
            🌟 Big Festive Sale — Up to 50% OFF 🎧 | Stylish Fashion Flat 30% Discount 👕 |
            Free Delivery Above ₹499 🚚 | Grab Gadgets Today ⚡
          </span>
          <img src={img1} alt="tv" className="marquee-img" />
          <img src={img2} alt="headphones" className="marquee-img" />
          <img src={img3} alt="laptop" className="marquee-img" />
          <img src={img4} alt="jeans" className="marquee-img" />
          <img src={img5} alt="phone" className="marquee-img" />
        </marquee>
      </section>


      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔎 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      <section className="category-section">
        <h2 className="section-title">✨ Explore Categories ✨</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src={img03} alt="Electronics" />
            <h1>TOYS</h1>
          </div>
          <div className="category-card">
            <img src={img05} alt="Computers" />
            <h1>Computers</h1>
          </div>
          <div className="category-card">
            <img src={img04} alt="Audio" />
            <h1>Electronic Devices</h1>
          </div>
          <div className="category-card">
            <img src={img02} alt="Fashion" />
            <h1>Fashion</h1>
          </div>
          <div className="category-card">
            <img src={img01} alt="Audio" />
            <h1>MOBILES</h1>
          </div>
        </div>
      </section>


      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Featured Products 🔥</h2>
            <p className="section-subtitle">Top trending items this week</p>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <Link to="/products" className="product-link">
                    <div className="product-img-container">
                      <img src={product.img} alt={product.title} className="product-image" />
                      <span className="product-badge">{product.discount}</span>
                    </div>
                  </Link>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-title">{product.title}</h3>
                    <div className="product-pricing">
                      <span className="current-price">{product.price}</span>
                      <span className="original-price">{product.originalPrice}</span>
                    </div>

                    <div className="product-actions">
                      <button className="btn btn-cart" onClick={() => addToCart(product)}>
                        🛒 Add to Cart
                      </button>
                      <button className="btn btn-buy-now" onClick={() => handleBuyNow(product)}>
                        ⚡ Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No products found for "{searchTerm}"</p>
            )}
          </div>
        </div>
      </section>


      <section className="review-section">
        <h2 className="section-title">💖 What Our Customers Say 💖</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p>Amazing quality and super fast delivery! Highly recommend Trendy World best product cloths very good and best product in this app..</p>
            <h4>SRINU</h4>
          </div>
          <div className="review-card">
            <p>Best online store for electronics and fashion. Loved the experience! as electronic device very sound qualify best quality product..</p>
            <h4>SIVA</h4>
          </div>
          <div className="review-card">
            <p>Affordable and stylish products. The website looks fantastic styles product combo offer t-shrits very good best products..</p>
            <h4>SAI KUMAR</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
