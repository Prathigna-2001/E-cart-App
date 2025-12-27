import React, { useState } from "react";
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
import tshirt11 from "../assets/tshrt11.jpg";
import tshirt12 from "../assets/tshrt12.jpeg";
import tshirt13 from "../assets/pumatshirt.webp";
import tshirt14 from "../assets/tshirt ausk.webp";
import tshirt15 from "../assets/tshrts gymbewakoof.webp";
const Tshirts = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

const products = [

  { id: 1, name: "Red T-Shirt", price: 499, image: tshirt1, description: "Good red t-shirt with premium quality." },
  { id: 2, name: "Blue T-Shirt", price: 599, image: tshirt2, description: "Comfortable blue t-shirt for casual wear." },
  { id: 3, name: "Black Lion", price: 300, image: tshirt3, description: "Black t-shirt with lion print, great quality." },
  { id: 4, name: "Jacquard Polo", price: 450, image: tshirt4, description: "V-neck polo style, soft and breathable." },
  { id: 5, name: "White T-Shirt", price: 400, image: tshirt5, description: "Classic white t-shirt for all occasions." },
  { id: 6, name: "Tennis T-Shirt", price: 699, image: tshirt6, description: "Ideal for tennis/golf with good fitting." },
  { id: 7, name: "Grey T-Shirt", price: 399, image: tshirt7, description: "Trendy grey t-shirt with soft texture." },
  { id: 8, name: "Black T-Shirt", price: 499, image: tshirt8, description: "Sleek black t-shirt with smooth feel." },
  { id: 9, name: "Blue Round Neck", price: 599, image: tshirt9, description: "Stylish blue t-shirt with round neck." },
  { id: 10, name: "Red Classic", price: 699, image: tshirt10, description: "Premium red t-shirt with elegant fit." },
  { id: 11, name:"Royality T-Shirt", price:1000, image:tshirt11, description:"Royality t-shirt with best quality"},
  { id: 12, name:"Colorprint T-Shirt", price:800, image:tshirt12, description:"Colorprint t-shirt with best quality"},
  { id: 13, name: "Puma T-Shirt", price: 760, image: tshirt13, description: "PUMA t-shirts are stylish and comfortable, made from high-quality cotton." },
  { id: 14, name: "Ausk T-Shirt", price: 850, image: tshirt14, description: "Ausk branded t-shirt, perfect fit and premium fabric." },
  { id: 15, name: "Gym Bewakoof T-Shirt", price: 999, image: tshirt15, description: "Trendy Gym Bewakoof t-shirt, ideal for workouts and casual wear." }
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
    <>
      <div className="product-page">
        <h2 align="center">T-Shirts Collection</h2>

    
        <div className="search-container">
          <input
            type="text"
            placeholder="🔎 Search T-Shirts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {alertMessage && <div className="alert">{alertMessage}</div>}

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
                <h5>{p.description}</h5>
                <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p className="no-results">No T-Shirts found for "{searchTerm}"</p>
          )}
        </div>
      </div>

      <style>{`
        .product-page {
          padding: 2rem;
          background: linear-gradient(to right, #8b10e3ff, #e116abff);
          font-family: 'Segoe UI', sans-serif;
        }

        h2 {
          font-size: 2.4rem;
          margin-bottom: 1.5rem;
          color: #0d0868ff;
        }

        .search-container {
          text-align: center;
          margin-bottom: 2rem;
        }

        .search-container input {
          width: 60%;
          padding: 0.7rem 1.2rem;
          border-radius: 30px;
          border: 2px solid #98f00cff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-container input:focus {
          border-color: #2196f3;
          box-shadow: 0 0 12px rgba(212, 19, 119, 0.5);
        }

        .alert {
          background-color: #f4f00eff;
          color: white;
          padding: 0.8rem 1.2rem;
          border-radius: 30px;
          text-align: center;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: fadeInOut 2s forwards;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .product-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.3s ease-in-out;
        }

        .product-card img:hover {
          transform: scale(1.05) rotate(-2deg);
        }

        .product-card h3 {
          margin: 0.8rem 0 0.4rem;
          font-size: 1.2rem;
          color: #111;
        }

        .product-card p {
          font-size: 1rem;
          color: #555;
          font-weight: 600;
        }

        .product-card h5 {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 1rem;
        }

        .product-card button {
          background-color: #2196f3;
          color: #fff;
          padding: 0.6rem 1.4rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .product-card button:hover {
          background-color: #0d8bf2;
          transform: scale(1.05);
        }

        .no-results {
          text-align: center;
          font-size: 1.2rem;
          color: #555;
          margin-top: 2rem;
        }

        @media (max-width: 500px) {
          .product-card img {
            height: 150px;
          }
          .search-container input {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Tshirts;
