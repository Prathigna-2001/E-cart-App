
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, changeQuantity }) => {
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price} × {item.quantity}
          <button onClick={() => changeQuantity(item.id, +1)}>+</button>
          <button onClick={() => changeQuantity(item.id, -1)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <Link to="/signin"><button disabled={!cartItems.length}>Place Order</button></Link>
    </div>
  );
};

export default Cart;
