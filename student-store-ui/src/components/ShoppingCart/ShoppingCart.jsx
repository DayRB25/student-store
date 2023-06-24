import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";
import { useEffect } from "react";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  let subTotal = 0;
  const taxRate = 0.0875;
  /////
  // for each item in shoppingCart, use id as idx (idx = id - 1) in products array to get the relevant information, idx works as the data was given
  // in the format of first array element is id 1, second element is id 2, so on and so forth
  /////

  const displayCartItems = shoppingCart.map((item) => {
    const product = products[item.itemId - 1];
    const totalPrice = item.quantity * product.price;
    subTotal += totalPrice;
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{item.quantity}</td>
        <td>{`$${product.price.toFixed(2)}`}</td>
        <td>{`$${totalPrice.toFixed(2)}`}</td>
      </tr>
    );
  });

  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      {shoppingCart.length === 0 && (
        <p id="shopping-cart-no-items">
          You have no items in your shopping cart
        </p>
      )}
      {shoppingCart.length !== 0 && (
        <div className="shopping-cart-items">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {displayCartItems}
              <tr>
                <td>Subtotal:</td>
                <td></td>
                <td></td>
                <td>{`$${subTotal.toFixed(2)}`}</td>
              </tr>
              <tr>
                <td>Taxes and Fees:</td>
                <td></td>
                <td></td>
                <td>{`$${(subTotal * taxRate).toFixed(2)}`}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td></td>
                <td></td>
                <td>{`$${(subTotal * taxRate + subTotal).toFixed(2)}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
