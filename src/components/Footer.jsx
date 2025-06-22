import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-about">
      <h2>TrendyCart</h2>
      <p>Your favorite destination for fashion & electronics.</p>
      <h5>we are the best price and products all items and good rating out of view to 5..</h5>
    </div>
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tshirts">T-Shirts</a></li>
        <li><a href="/electronics">Electronics</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <h4>Follow Us</h4>
      <h1>this tready shoppin and best products..</h1>
      <div className="social-icons">
      <ol>
       <li>t-shirts</li>
       <li>electronics</li>
       <li>mobiles</li>
       <li>laptop</li>
       </ol>
      </div>
    </div>
  </div>
  <p className="footer-bottom">AMBTI PRATHIGNA ©2025 TrendyCart. All rights reserved.</p>
</footer>

  );
};

export default Footer;
