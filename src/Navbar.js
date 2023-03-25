import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userName) => {
      if (userName) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  function handleLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Log out successful");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  }

  return (
    <nav className="navbar">
      <div className="navbarflex">
        <div>
          <Link to="/" className="logo">
            <img
              className="mmt-logo"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="mmtLogo"
            />
          </Link>
        </div>
        <div>
          <div className="nav-flex">
            <ul className="nav-links">
              <li>
                <Link to="/flights" className="li">
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="li">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/trains" className="li">
                  Trains
                </Link>
              </li>
            </ul>
            <div className="user-profile">
              {isLoggedIn ? (
                <button className="logout-button" onClick={handleLogout}>
                  <img
                    style={{ width: "36px", height: "36px" }}
                    src="https://cdn-icons-png.flaticon.com/128/4436/4436954.png"
                    alt="logout"
                  />
                </button>
              ) : (
                <Link to="/login">
                  <img
                    style={{ width: "36px", height: "36px" }}
                    src="https://cdn-icons-png.flaticon.com/128/3711/3711310.png"
                    alt="login"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
