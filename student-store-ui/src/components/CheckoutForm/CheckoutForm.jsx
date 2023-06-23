import * as React from "react";
import "./CheckoutForm.css";
import { useState } from "react";

export default function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="checkout-form">
      <h3>Payment Info</h3>
      <input
        className="checkout-form-input"
        type="email"
        placeholder="student@codepath.org"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="checkout-form-input"
        type="text"
        placeholder="Student Name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <button className="checkout-button">Checkout</button>
    </div>
  );
}
