import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const handleSuccess = () => {
    navigate("/order-success");
  };

  return (
    <div className="product-page">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>No items to order.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </div>
          ))}
          <button onClick={handleSuccess} style={{ marginTop: "20px" }}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
