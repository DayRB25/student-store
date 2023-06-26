import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ReceiptModal.css";

export default function ReceiptModal({ name, products, total, clearReceipt }) {
  return (
    <div class="receipt-modal">
      <div id="receipt-modal-content" class="receipt-modal-content">
        <h3>{`Thanks for shopping, ${name}!`}</h3>
        <div class="receipt-modal-products">
          {products.map((product) => (
            <ProductCard
              product={product}
              productId={product.id}
              quantity={product.quantity}
              showDescription={false}
              displayActions={false}
            />
          ))}
        </div>
        <p class="receipt-modal-total">{`Your total was: $${parseFloat(
          total
        ).toFixed(2)}`}</p>
        <button class="receipt-modal-close" onClick={clearReceipt}>
          Done
        </button>
      </div>
    </div>
  );
}
