import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  filter,
  handleFilterChange,
  search,
  handleChangeSearch,
  isFetching,
}) {
  return (
    <div id="home" className="home">
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
        isFetching={isFetching}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
