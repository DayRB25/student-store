import * as React from "react";
import "./OrderCard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderCard({ order, showCart }) {
  let navigate = useNavigate();

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
        <button onClick={() => navigate(`/orders/${order.id}`)}>
          View Order
        </button>
      )}
      {showCart && (
        <div className="order-card-cart-items">
          {order.shoppingCart.map((item) => (
            <>
              <p>{`Item: ${item.itemId}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
