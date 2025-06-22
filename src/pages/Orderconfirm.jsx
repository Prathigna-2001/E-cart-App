
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirm = ({ cartItems, coupon }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const final = total - (total * coupon) / 100;

  return (
    <div>
      <h2>Confirm Order</h2>
      {cartItems.map(i => (
        <div key={i.id}>
          {i.name} × {i.quantity} = ₹{i.price * i.quantity}
        </div>
      ))}
      <h3>Final Total: ₹{final.toFixed(2)}</h3>
      <button onClick={() => navigate("/order-success")}>Place Order</button>
    </div>
  );
};

export default OrderConfirm;
