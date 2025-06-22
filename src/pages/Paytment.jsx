import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cartItems, userDetails, coupon, setCoupon }) => {
  const [discount, setDiscount] = useState(coupon);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = total - (total * discount) / 100;

  const applyCoupon = (value) => {
    setDiscount(value);
    setCoupon(value);
  };

  const handlePayment = () => {
    navigate("/order-confirm");
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p><strong>User:</strong> {userDetails.name}</p>
      <p><strong>Address:</strong> {userDetails.address}</p>
      <p><strong>Total:</strong> ₹{total}</p>

      <div>
        <h4>Apply Coupon:</h4>
        {[10, 20, 30, 40, 50].map((val) => (
          <button key={val} onClick={() => applyCoupon(val)}>{val}% OFF</button>
        ))}
      </div>

      {discount > 0 && (
        <p><strong>Discounted Total:</strong> ₹{discountedTotal.toFixed(2)}</p>
      )}

      <button onClick={handlePayment}>Pay ₹{discount > 0 ? discountedTotal.toFixed(2) : total}</button>
    </div>
  );
};

export default Payment;
