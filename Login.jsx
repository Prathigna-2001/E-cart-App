import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      navigate("/signup"); 
    }
  };

  return (
    <div className="login-page" style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ padding: "10px", background: "#16dd41ff", color: "#be17dfff" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
