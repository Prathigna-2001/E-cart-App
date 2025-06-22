import React from "react";
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

const Electronics = ({ addToCart }) => {
  const products = [
    {
      id: 301,
      name: "Bluetooth Speaker",
      price: 1999,
      image: electronics1,
      description: "A high-quality Bluetooth speaker.",
    },
    {
      id: 302,
      name: "Smart LED Bulb",
      price: 799,
      image: electronics2,
      description: "A smart LED bulb that can be controlled via an app.",
    },
    {
      id: 303,
      name: "Mixer",
      price: 3999,
      image: electronics3,
      description: "High-speed mixer with 5-star ratings.",
    },
    {
      id: 304,
      name: "Headset",
      price: 1999,
      image: electronics4,
      description: "Best sound quality with 4.5-star rating.",
    },
    {
      id: 305,
      name: "Redmi TV",
      price: 24999,
      image: electronics5,
      description: "Smart TV with vivid colors and 4.5-star rating.",
    },
    {
      id: 306,
      name: "Whirlpool 184L",
      price: 19299,
      image: electronics6,
      description: "Compact refrigerator, summer special deal!",
    },
    {
      id: 307,
      name: "iGear Evoke Radio",
      price: 2290,
      image: electronics7,
      description: "Retro modern radio with clear sound.",
    },
    {
      id: 308,
      name: "Classic Radio",
      price: 1900,
      image: electronics8,
      description: "Vintage style, premium quality radio.",
    },
    {
      id: 309,
      name: "Ceiling Fan",
      price: 2999,
      image: electronics9,
      description: "Durable fan with energy saving motor.",
    },
    {
      id: 310,
      name: "Wireless Mouse",
      price: 500,
      image: electronics10,
      description: "Smooth operation, best for laptops.",
    }
  ];

  return (
    <>
      <style>{`
        .electronics-page {
          padding: 40px;
          background: linear-gradient(to bottom, #f7f9fc, #ffffff);
          min-height: 100vh;
          text-align: center;
        }

        .marquee {
          background: #222;
          color: #fff;
          padding: 10px 0;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .marquee img {
          height: 40px;
          margin: 0 20px;
          vertical-align: middle;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 30px;
          color: #333;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }

        .product-card {
          background: rgb(223, 217, 200);
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        }

        .product-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-card h3 {
          font-size: 1.2rem;
          color: #222;
          margin-bottom: 10px;
        }

        .price {
          font-size: 1.1rem;
          color: rgb(26, 6, 136);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .desc {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 15px;
        }

        .cart-btn {
          background: rgb(0, 186, 25);
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: bold;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .cart-btn:hover {
          background: #005f73;
          transform: scale(1.05);
        }
      `}</style>

      <div className="marquee">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          💡 Big Deals on Electronics! 🎧 Free shipping on orders over ₹999 &nbsp;&nbsp;&nbsp;
          <img src={sonyLogo} alt="Sony" />
          <img src={samsungLogo} alt="Samsung" />
          <img src={lgLogo} alt="LG" />
          <img src={philipsLogo} alt="Philips" />
        </marquee>
      </div>

      <div className="electronics-page">
        <h2 className="page-title">Electronics Items:</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              <p className="desc">{product.description}</p>
              <button onClick={() => addToCart(product)} className="cart-btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Electronics;
