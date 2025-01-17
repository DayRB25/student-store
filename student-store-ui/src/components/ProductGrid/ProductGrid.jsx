import * as React from "react";
import "./ProductGrid.css";
import { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  filter,
  search,
  isFetching,
}) {
  // state defining the products matching filter
  const [filteredProducts, setfilteredProducts] = useState([]);
  // state defining the products matching both filter and search term
  const [searchedProducts, setSearchedProducts] = useState([]);

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
  // adjust filtered product display depending upon current search term
  //////
  useEffect(() => {
    if (search === "") {
      setSearchedProducts(filteredProducts);
    } else {
      const newDisplay = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedProducts(newDisplay);
    }
  }, [search, filteredProducts]);

  ///////
  // generate product card element for each item in filtered product list
  //////

  let shopItems = searchedProducts.map((product) => (
    <ProductCard
      product={product}
      productId={product.id}
      quantity={product.quantity}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart}
      showDescription={false}
      key={product.id}
    />
  ));

  return (
    <div id="product-grid" className="product-grid">
      {isFetching && <p>Loading...</p>}
      {!isFetching && shopItems}
    </div>
  );
}
