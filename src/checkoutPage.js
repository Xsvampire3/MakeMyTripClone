import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";

const CheckoutPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const history = createBrowserHistory();

  // Redirect to Login page if user is not logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedIn(true);
      setUserData(JSON.parse(loggedInUser));
    } else {
      history.push("/login");
    }
  }, []);

  const handlePayment = () => {
    // Perform payment processing here
    alert("Payment successful!");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="fare-summary">
        <h2>Fare Summary</h2>
        <p>Base Fare: 0rs</p>
        <p>Fee and Surcharges: 0rs</p>
        <p>Total Amount: 0rs</p>
      </div>
      <div className="payment-section">
        <h2>Payment Methods</h2>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
