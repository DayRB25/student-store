import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
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

  const handleOnToggle = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  const handleAddItemToCart = (productId) => {
    // look for item with productId in cart, if found increment count, otherwise add
    let findItem = shoppingCart.find((item) => item.itemId === productId);

    if (findItem === undefined) {
      setShoppingCart((prevCart) => [
        ...prevCart,
        { itemId: productId, quantity: 1 },
      ]);
    } else {
      setShoppingCart((prevCart) =>
        prevCart.map((item) => {
          return item.itemId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    }
  };

  const removeItem = (productId) => {
    const newCart = shoppingCart.filter((item) => item.itemId !== productId);
    setShoppingCart(newCart);
  };

  const handleRemoveItemFromCart = (productId) => {
    // look for item with productId in cart, if found decrement count, if now 0 remove, otherwise do nothing
    let findItem = shoppingCart.find((item) => item.itemId === productId);

    if (findItem === undefined) {
      return;
    } else {
      setShoppingCart((prevCart) =>
        prevCart.map((item) => {
          if (item.itemId === productId) {
            let newQty = item.quantity - 1;
            if (newQty === 0) {
              removeItem(productId);
              return;
            } else {
              return { ...item, quantity: newQty };
            }
          }
          return item;
        })
      );
    }
  };

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

  useEffect(() => {
    console.log(shoppingCart);
  }, [shoppingCart]);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
            products={products}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  filter={filter}
                  handleFilterChange={handleFilterChange}
                  search={search}
                  handleChangeSearch={handleChangeSearch}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
