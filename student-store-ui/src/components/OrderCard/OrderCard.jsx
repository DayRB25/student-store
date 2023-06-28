import * as React from "react";
import "./OrderCard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderCard({ order, showCart }) {
  let navigate = useNavigate();

  const orderDetails = order.shoppingCart.map((item) => {
    return (
      <div className="order-card-item">
        <p>{`Item ID: ${item.itemId}`}</p>
        <p>{`Quantity: ${item.quantity}`}</p>
      </div>
    );
  });

  return (
    <div className="order-card">
      <div className="order-card-user">
        <p>{order.user.name}</p>
        <p>{order.user.email}</p>
      </div>
      <div className="order-card-cart-details">
        <p>{`Number of Items: ${order.shoppingCart.length}`}</p>
        <p>{`Total: ${order.total}`}</p>
      </div>
      {!showCart && (
        <button onClick={() => navigate(`/orders/${order.id}`)}>Details</button>
      )}
      {showCart && (
        <div className="order-card-items">
          <p className="item-title">Item List:</p>
          {orderDetails}
        </div>
      )}
    </div>
  );
}
