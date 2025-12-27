import React from 'react';

const Footer = ({
  companyName = "TrendyCart",
  aboutText = "Your favorite destination for fashion & electronics.",
  rating= "We offer the best prices and products, all items rated 5 stars!",
  links = [
    { name: "Home", url: "/" },
    { name: "T-Shirts", url: "/tshirts" },
    { name: "Electronics", url: "/electronics" },
    { name: "Cart", url: "/cart" },
    { name: "Toys", url: "/toys" },
    { name: "Laptop", url: "/laptops" },
    {name:"medicine",url:"/medicin" }
  ],
  socialInfo = "SmartBuy India – Trendy shopping in 2025  SmartBuy India shopping & online and in-store experiences, focusing on personalization, sustainability, and convenience. Shoppers use social commerce, voice search, and AR to enhance buying journeys. Resale markets and cross-border shopping are booming.",
  copyrightYear = new Date().getFullYear()
}) => {
  return (
    <footer className="footer" aria-label="Footer section">
      <div className="footer-container">
        <div className="footer-about">
          <h2>{companyName}</h2>
          <p>{aboutText}</p>
          <h5>{rating}</h5>
        </div>
        <nav className="footer-links" aria-label="Quick links navigation">
          <h4>Quick Links</h4>
          <ul>
            {links.map(({ name, url }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <p>{socialInfo}</p>
        </div>
      </div>
      <p className="footer-bottom">
        {companyName} ©{copyrightYear}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
