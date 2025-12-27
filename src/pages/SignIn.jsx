import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS files/log.css";

const SignIn = ({ setUserDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/payment";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const user = {
      name,
      email,
      phone,
      address,
      paymentMethod,
    };


    setTimeout(() => {
      setUserDetails(user);
      setIsSubmitting(false);
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div className="signin-container">
      <div className="signin-background"></div>

      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="form-title">Sign In & Delivery Details</h2>

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="10-digit phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            id="address"
            className="form-textarea"
            placeholder="Your complete address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="payment" className="form-label">Payment Method:</label>
          <select
            id="payment"
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            "Continue to Payment"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignIn;