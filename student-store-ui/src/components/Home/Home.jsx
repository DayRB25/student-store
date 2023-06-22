import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  filter,
  handleFilterChange,
  search,
  handleChangeSearch,
}) {
  return (
    <div className="home">
      <Hero />
      <SearchAndFilter
        filter={filter}
        handleFilterChange={handleFilterChange}
        search={search}
        handleChangeSearch={handleChangeSearch}
      />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        filter={filter}
        search={search}
      />
      <About />
      <Contact />
    </div>
  );
}
