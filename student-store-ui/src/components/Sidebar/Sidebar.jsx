import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  products,
}) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="toggle" onClick={handleOnToggle}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>
      <div className="cartcontent">
        {isOpen && (
          <>
            <ShoppingCart
              isOpen={isOpen}
              products={products}
              shoppingCart={shoppingCart}
            />
            <CheckoutForm />
          </>
        )}
      </div>
    </section>
  );
}
