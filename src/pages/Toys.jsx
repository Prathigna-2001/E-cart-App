import React from "react";
import toy1 from "../assets/toy1.jpeg";
import toy2 from "../assets/toy2.jpg";
import toy3 from "../assets/toy3.jpg";
import toy4 from "../assets/toy4.jpg";
import toy5 from "../assets/toy5.webp";
import toy6 from "../assets/toy6.webp";
import toy7 from "../assets/toy7.webp";
import toy8 from "../assets/toy8.webp";
import toy9 from "../assets/toy9.avif";
import toy10 from "../assets/toy10.jpg";

const Toys = ({ addToCart }) => {
  const products = [
    { id: 401, name: "Remote Car", price: 899, image: toy1, description: "A speedy remote-controlled car for endless fun!" },
    { id: 402, name: "Building Blocks", price: 499, image: toy2, description: "Colorful blocks to build your imagination!" },
    { id: 403, name: "Doll House", price: 699, image: toy3, description: "A lovely dollhouse with tiny furniture pieces." },
    { id: 404, name: "Puzzle Game", price: 399, image: toy4, description: "A brainy puzzle to challenge your mind!" },
    { id: 405, name: "Racing Car", price: 3799, image: toy5, description: "High-speed racing fun with lights and sounds." },
    { id: 406, name: "Robot Toy", price: 2999, image: toy6, description: "A talking robot with cool moves!" },
    { id: 407, name: "Toy Train", price: 2999, image: toy7, description: "Choo-choo train with tracks and lights!" },
    { id: 408, name: "Toy Plane", price: 2999, image: toy8, description: "A flying toy plane with rotating propellers." },
    { id: 409, name: "Toy Boat", price: 2999, image: toy9, description: "Sail your toy boat in water adventure." },
    { id: 410, name: "toy all lists", price: 2999, image: toy10, description: "A stylish toy car with elegant finish." }
  ];

  return (
    <>
      <div className="product-page">
        <marquee className="toy-marquee" behavior="scroll" direction="left">
          🧸 Welcome to the Kids Toy Zone! 🎉 Fun, learning & joy all in one place! 🚂🪁🎈
        </marquee>
        <h2 className="section-title">Toys Kids Zone 🎈</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              <p className="desc">{product.description}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-page {
          padding: 2rem;
          background: linear-gradient(to right, #fff0f5, #e0ffff);
          font-family: 'Segoe UI', sans-serif;
        }

        .toy-marquee {
          font-size: 1.2rem;
          background: #ffccf9;
          padding: 0.8rem;
          color: #d500f9;
          font-weight: bold;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #ff1493;
          text-shadow: 1px 1px #fce4ec;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .product-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-card h3 {
          margin: 0.8rem 0 0.5rem;
          font-size: 1.2rem;
          color: #333;
        }

        .price {
          font-size: 1.1rem;
          color: #28a745;
          font-weight: bold;
          margin: 0.3rem 0;
        }

        .desc {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1rem;
        }

        .product-card button {
          background-color: #ff4081;
          color: #fff;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .product-card button:hover {
          background-color: #f50057;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .product-img {
            height: 150px;
          }
          .section-title {
            font-size: 2rem;
          }
          .toy-marquee {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Toys;
