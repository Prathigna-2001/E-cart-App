import React from "react";
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

const Laptops = ({ addToCart }) => {
  const products = [
    { id: 201, name: "HP Pavilion 15", price: 54999, image: laptop1, description: "HP Pavilion 15 is a powerful laptop with a 15.6-inch display. Great performance for its price." },
    { id: 202, name: "Dell Inspiron 14", price: 58999, image: laptop2, description: "Sleek laptop with a 14-inch display and a powerful processor." },
    { id: 203, name: "HP Rezon 7", price: 69999, image: laptop3, description: "Business laptop with excellent performance and a 15.6-inch screen." },
    { id: 204, name: "ASUS VIVOBOOK 16", price: 44999, image: laptop4, description: "Budget-friendly laptop with great specs and a big display." },
    { id: 205, name: "ACER Aspire 5", price: 49999, image: laptop5, description: "Perfect for work and everyday use with 15-inch screen." },
    { id: 206, name: "Apple MacBook Pro", price: 69999, image: laptop6, description: "Sleek design with strong performance, ideal for professionals." },
    { id: 207, name: "Samsung Galaxy Book4", price: 45789, image: laptop7, description: "Stylish laptop with excellent portability and power." },
    { id: 208, name: "Lenovo ThinkPad", price: 59999, image: laptop8, description: "Built for business use with a robust design and smooth performance." },
    { id: 209, name: "Dell XPS13", price: 79999, image: laptop9, description: "High-end laptop with top-tier features and compact size." },
    { id: 210, name: "Dell Inspiron 15 5000", price: 49999, image: laptop10, description: "Budget laptop that’s good for students and casual use." },
  ];

  return (
    <div className="product-page">
      <style>{`
        .product-page {
          padding: 40px 20px;
          background: linear-gradient(135deg, #e8f0fe, #ffffff);
          min-height: 100vh;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .marquee {
          background: linear-gradient(to right, #000428, #004e92);
          color: #fff;
          font-size: 1.3rem;
          padding: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .product-page h2 {
          font-size: 2.5rem;
          color: #222;
          margin: 30px 0 10px;
          text-transform: uppercase;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: auto;
        }

        .product-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .product-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 15px;
          transition: transform 0.3s ease-in-out;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-card h1 {
          font-size: 1.2rem;
          color: #0277bd;
          margin: 10px 0 5px;
        }

        .product-card p {
          font-size: 0.95rem;
          color: #444;
          margin: 5px 0;
        }

        .product-card button {
          margin-top: auto;
          padding: 10px 20px;
          background: #009688;
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .product-card button:hover {
          background: #7b1fa2;
          transform: scale(1.1);
        }

        @media screen and (max-width: 768px) {
          .product-img {
            height: 180px;
          }
        }
      `}</style>

      <div className="marquee">🔥 Best Deals on Laptops | Limited Time Offer | Save up to 30% 🔥</div>
      <h2>Laptops</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h1>{product.name}</h1>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
