import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = ({ setUserDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/payment";

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      address,
      paymentMethod,
    };
    setUserDetails(user);
    navigate(from, { replace: true });
  };

  return (
    <div className="signin-container">
      <style>{`
        .signin-container {
          display: flex;
          justify-content: center;
          padding: 2rem;
          background-color:rgb(61, 141, 12);
          min-height: 100vh;
        }

        .signin-form {
          width: 100%;
          max-width: 400px;
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(19, 208, 211, 0.1);
        }

        .signin-form h2 {
          margin-bottom: 1rem;
          text-align: center;
          color: #333;
        }

        .signin-form label {
          margin-top: 1rem;
          display: block;
          font-weight: bold;
          color: #444;
        }

        .signin-form input,
        .signin-form textarea,
        .signin-form select {
          width: 100%;
          padding: 0.7rem;
          margin-top: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          background-color:rgb(220, 230, 19);
        }

        .signin-form button {
          margin-top: 1.5rem;
          width: 100%;
          padding: 0.8rem;
          background-color:rgb(19, 224, 57);
          color: #fff;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .signin-form button:hover {
          background-color:rgb(220, 22, 203);
        }
      `}</style>

      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In & Delivery Details</h2>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="enter e-mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="tel"
          placeholder=" enter 10-digit number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          placeholder="your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="cod">Cash on Delivery</option>
          <option value="upi">UPI</option>
          <option value="card">Credit/Debit Card</option>
        </select>

        <button type="submit">Continue to Payment</button>
      </form>
      <from>
        <label></label>
      </from>
    </div>
  );
};

export default SignIn;
