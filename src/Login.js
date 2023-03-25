import "./styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebasecomfig";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userName = data.get("userName");
    const password = data.get("password");
    signInWithEmailAndPassword(auth, userName, password)
      .then((userDetails) => {
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch(() => {
        alert("username or password is invalid");
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login3">
          <div className="login2">
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://cdn-icons-png.flaticon.com/128/7856/7856126.png"
                alt="login-logo"
              />
            </div>
            <div>
              <label>
                Email:
                <input
                  type="text"
                  name="userName"
                  placeholder="abc@gmail.com"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </label>
            </div>
          </div>
          <button type="submit" className="button-64">
            Login
          </button>
          <p>
            Don't have an account yet? <Link to="/register">Register now</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
