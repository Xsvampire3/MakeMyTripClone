import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="register">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
