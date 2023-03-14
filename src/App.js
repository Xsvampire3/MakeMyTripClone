import "./styles.css";
import AddingFlights from "./FlightsBook";
import AddingHotels from "./HotelsBook";
import AddingTrains from "./TrainsBook";
import Login from "./Login";
import Register from "./Register";
import CheckoutPage from "./checkoutPage";
import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarflex">
        <div>
          <Link to="/flights" className="logo">
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
              <Link to="/login" className="login-button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<AddingFlights />} />
          <Route path="/hotels" element={<AddingHotels />} />
          <Route path="/trains" element={<AddingTrains />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
