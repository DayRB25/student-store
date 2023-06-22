import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState([]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleOnToggle = () => {};

  const handleAddItemToCart = (productId) => {};

  const handleRemoveItemFromCart = (productId) => {};

  const handleOnCheckoutFormChange = (name, value) => {};

  const handleOnSubmitCheckoutForm = () => {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res.data.products == []) {
          setError(true);
        } else {
          setProducts(res.data.products);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home
            products={products}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            filter={filter}
            handleFilterChange={handleFilterChange}
            search={search}
            handleChangeSearch={handleChangeSearch}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}
