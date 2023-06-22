import * as React from "react";
import "./ProductGrid.css";
import { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  filter,
}) {
  const [filteredProducts, setfilteredProducts] = useState([]);
  ///////
  // adjust product display depending upon selected filter categories
  //////
  useEffect(() => {
    if (filter === "all") {
      setfilteredProducts(products);
      return;
    }
    const newDisplay = products.filter((item) => item.category === filter);
    setfilteredProducts(newDisplay);
  }, [products, filter]);

  ///////
  // generate product card element for each item in filtered product list
  //////
  let shopItems = filteredProducts.map((product) => (
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
