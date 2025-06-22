import React from "react";
import tshirt1 from "../assets/tshrt1.webp";
import tshirt2 from "../assets/tshirt2.webp";
import tshirt3 from "../assets/tshirt3.webp";
import tshirt4 from "../assets/tshirt 4.webp";
import tshirt5 from "../assets/tshirt5.png";
import tshirt6 from "../assets/tshirt6.jpg";
import tshirt7 from "../assets/tshirt7.jpg";
import tshirt8 from "../assets/tshirt8.jpg";
import tshirt9 from "../assets/tshirt9.webp";
import tshirt10 from "../assets/tshirt10.webp";

const Tshirts = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Red T-Shirt", price: 499, image: tshirt1, description: "It is a good red t-shirt with best quality." },
    { id: 2, name: "Blue T-Shirt", price: 599, image: tshirt2, description: "Comfortable blue t-shirt, best for casual wear." },
    { id: 3, name: "Black Lion", price: 300, image: tshirt3, description: "Black t-shirt with lion print, great quality." },
    { id: 4, name: "Jacquard Polo", price: 450, image: tshirt4, description: "V-neck polo style, soft and breathable." },
    { id: 5, name: "White T-Shirt", price: 400, image: tshirt5, description: "Classic white t-shirt for all occasions." },
    { id: 6, name: "Tennis T-Shirt", price: 699, image: tshirt6, description: "Ideal for tennis/golf with good fitting." },
    { id: 7, name: "Grey T-Shirt", price: 399, image: tshirt7, description: "Trendy grey t-shirt with soft texture." },
    { id: 8, name: "Black T-Shirt", price: 499, image: tshirt8, description: "Sleek black t-shirt with smooth feel." },
    { id: 9, name: "Blue Round Neck", price: 599, image: tshirt9, description: "Stylish blue t-shirt with round neck." },
    { id: 10, name: "Red Classic", price: 699, image: tshirt10, description: "Premium red t-shirt with elegant fit." },
  ];

  return (
    <>
      <div className="product-page">
        <h2 align="center">T-Shirts Collection</h2>
        <div className="product-list">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <h5>{p.description}</h5>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-page {
          padding: 2rem;
          background: linear-gradient(to right, #f8f9fa, #e0f7fa);
          font-family: 'Segoe UI', sans-serif;
        }

        h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.3s ease-in-out;
        }

        .product-card img:hover {
          transform: scale(1.05) rotate(-2deg);
        }

        .product-card h3 {
          margin: 0.8rem 0 0.4rem;
          font-size: 1.1rem;
          color: #111;
        }

        .product-card p {
          font-size: 1rem;
          color: #555;
        }

        .product-card h5 {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 1rem;
        }

        .product-card button {
          background-color: #ff6f61;
          color: #fff;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background-color 0.3s ease;
        }

        .product-card button:hover {
          background-color: #ff3d3d;
        }

        @media (max-width: 500px) {
          .product-card img {
            height: 150px;
          }
        }
      `}</style>
    </>
  );
};

export default Tshirts;
