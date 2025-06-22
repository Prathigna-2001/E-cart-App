import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = ({ resetCart }) => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);      
  const intervalRef = useRef(null);     
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    resetCart();

    intervalRef.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    timeoutRef.current = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [resetCart, navigate]);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [countdown]);

  const goHomeNow = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    navigate("/", { replace: true });
  };

  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#2e7d32" }}>
        🎉 Order Successful!
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#555" }}>
        Thank you for your purchase. Redirecting in <strong>{countdown}</strong>s…
      </p>
      <button
        onClick={goHomeNow}
        style={{
          padding: "0.8rem 1.6rem",
          fontSize: "1rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "40px",
          cursor: "pointer",
        }}
      >
        Go Home Now
      </button>
    </div>
  );
};

export default OrderSuccess;
