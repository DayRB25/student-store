import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  productId,
  quantity,
  showDescription,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  return (
    <div className="product-view">
      <h3>{product.name}</h3>
      <div className="product-view-card">
        <ProductCard
          product={product}
          productId={productId}
          quantity={quantity}
          showDescription={showDescription}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </div>
    </div>
  );
}
