// Marquee.jsx
import React from "react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <p className="marquee-text">
          🛍️ <span className="bounce">Welcome</span> to <strong>TrendyStore</strong> – Best Deals on T-Shirts, Electronics, Jeans, Cables & Headsets, Toys! 🚚 Fast Delivery | 💳 Secure Payments | 🔥 Limited Offers! Stock Running Out!
        </p>
        <p className="marquee-text">
          🛍️ <span className="bounce">Welcome</span> to <strong>TrendyStore</strong> – Best Deals on T-Shirts, Electronics, Jeans, Cables & Headsets, Toys! 🚚 Fast Delivery | 💳 Secure Payments | 🔥 Limited Offers! Stock Running Out!
        </p>
      </div>
    </div>
  );
};

export default Marquee;
