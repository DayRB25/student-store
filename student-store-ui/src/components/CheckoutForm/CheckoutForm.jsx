import * as React from "react";
import "./CheckoutForm.css";
import { useState } from "react";

export default function CheckoutForm({
  name,
  email,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const handleFormChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    handleOnCheckoutFormChange(inputName, inputValue);
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
        onChange={handleFormChange}
      />
      <input
        className="checkout-form-input"
        type="text"
        placeholder="Student Name"
        name="name"
        value={name}
        onChange={handleFormChange}
      />
      <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
        Checkout
      </button>
    </div>
  );
}
