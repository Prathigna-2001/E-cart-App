import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, changeQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <style>{`
        .cart-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 25px;
          background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          animation: fadeIn 0.8s ease-in-out;
        }

        .cart-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 30px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
        }

        .empty-cart {
          text-align: center;
          font-size: 1.3rem;
          color: #555;
          padding: 50px 0;
          font-style: italic;
        }

        .cart-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .cart-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          background: #fefefe;
        }

  
        .cart-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 15px;
          border: 3px solid #eee;
          transition: transform 0.3s ease;
        }

        .cart-image:hover {
          transform: scale(1.05);
        }

  
        .cart-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cart-details h3 {
          margin: 0 0 5px;
          font-size: 1.4rem;
          color: #333;
        }

        .cart-price {
          color: #ff3d00;
          font-weight: 700;
          margin: 5px 0 15px;
          font-size: 1.2rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .quantity-controls button {
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          background: #4a90e2;
          color: #c72121ff;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .quantity-controls button:hover {
          background: #357ab7;
          transform: scale(1.1);
        }

        .quantity-controls span {
          font-weight: bold;
          font-size: 1.2rem;
          min-width: 25px;
          text-align: center;
        }

        
        .remove-btn {
          align-self: flex-start;
          background: linear-gradient(45deg, #450a89ff, #ff5252);
          color: #fff;
          border: none;
          padding: 8px 15px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.2s, opacity 0.2s;
        }

        .remove-btn:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        
        .cart-summary {
          text-align: right;
          margin-top: 35px;
          font-size: 1.3rem;
          font-weight: 600;
          color: #222;
        }

        .place-order-btn {
          background: linear-gradient(45deg, #00c853, #b2ff59);
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 12px;
          cursor: pointer;
          margin-top: 15px;
          transition: background 0.3s, transform 0.2s;
        }

        .place-order-btn:hover {
          background: linear-gradient(45deg, #00b341, #a6ff4d);
          transform: scale(1.05);
        }

        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

       
        @media (max-width: 650px) {
          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-image {
            width: 100%;
            height: 200px;
          }

          .cart-summary {
            text-align: center;
          }

          .place-order-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty 😔</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-image" />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="cart-price">₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, +1)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Total Amount: ₹{total.toFixed(2)}</h3>
            <Link to="/signin">
              <button className="place-order-btn">Place Order</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
