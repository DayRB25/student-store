import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  products,
}) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="toggle" onClick={handleOnToggle}>
        Back
      </button>
      <div className="cartcontent">
        {isOpen && (
          <>
            <ShoppingCart
              isOpen={isOpen}
              products={products}
              shoppingCart={shoppingCart}
            />
          </>
        )}
      </div>
    </section>
  );
}
