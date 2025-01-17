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

  const handleToggleFetch = (newFetch) => {
    setIsFetching(newFetch);
  };

  const handleAddItemToCart = (productId) => {
    // look for item with productId in cart, if found increment count, otherwise add
    let findItem = shoppingCart.find((item) => item.itemId === productId);
    setProducts((prevCart) =>
      prevCart.map((item) => {
        return item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
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
    return newCart;
  };

  const handleRemoveItemFromCart = (productId) => {
    // look for item with productId in cart, if found decrement count, if now 0 remove, otherwise do nothing
    let findItem = shoppingCart.find((item) => item.itemId === productId);

    if (findItem) {
      setShoppingCart((prevCart) =>
        prevCart.map((item) => {
          if (item.itemId === productId) {
            let newQty = item.quantity - 1;
            return { ...item, quantity: newQty };
          }
          return item;
        })
      );
      setProducts((prevCart) =>
        prevCart.map((item) => {
          return item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {};

  const handleOnSubmitCheckoutForm = () => {};

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);
      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res.data.products == []) {
          setError(true);
          setIsFetching(false);
        } else {
          // added quantity property to each product object for quantity tracking in product card component
          const productsWithQuantity = res.data.products.map((product) => ({
            ...product,
            quantity: 0,
          }));
          setProducts(productsWithQuantity);
          setIsFetching(false);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    shoppingCart.forEach((item) => {
      if (item.quantity === 0) {
        setShoppingCart(removeItem(item.itemId));
        return;
      }
    });
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
                  isFetching={isFetching}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  isFetching={isFetching}
                  handleToggleFetch={handleToggleFetch}
                  products={products}
                />
              }
            />
            <Route
              path="*"
              element={<p id="invalidURL">Ooops... Invalid url!</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
