import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";
import { useEffect } from "react";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      {shoppingCart.length === 0 && (
        <p id="shopping-cart-no-items">
          You have no items in your shopping cart
        </p>
      )}
    </div>
  );
}
