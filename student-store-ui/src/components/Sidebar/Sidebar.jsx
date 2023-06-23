import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  products,
}) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="toggle" onClick={handleOnToggle}>
        Open
      </button>
      <div className="cartcontent"></div>
    </section>
  );
}
