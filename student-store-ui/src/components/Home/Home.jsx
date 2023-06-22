import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  filter,
  handleFilterChange,
}) {
  return (
    <div className="home">
      <Hero />
      <SearchAndFilter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        filter={filter}
      />
    </div>
  );
}
