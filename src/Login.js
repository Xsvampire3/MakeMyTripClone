import "./styles.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setUsername(username);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>Welcome back, {username}!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
              Login
            </button>
            <p>
              Don't have an account yet?{" "}
              <Link to="/register">Register now</Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
