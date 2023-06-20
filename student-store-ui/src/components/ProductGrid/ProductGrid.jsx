import * as React from "react";
import "./ProductGrid.css";

import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const shopItems = products.map((product) => (
    <ProductCard
      product={product}
      productId={product.id}
      quantity={0}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart}
      showDescription={false}
      key={product.id}
    />
  ));

  return (
    <div className="product-grid">
      {products.length == 0 && <p>Loading...</p>}
      {!products.length == 0 && shopItems}
    </div>
  );
}
