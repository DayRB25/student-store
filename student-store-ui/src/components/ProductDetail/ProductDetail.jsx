import * as React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemFromCart,
  isFetching,
  handleToggleFetch,
  products,
}) {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      handleToggleFetch(true);
      try {
        const res = await axios.get(
          `https://codepath-store-api.herokuapp.com/store/${id}`
        );

        setProduct(res.data.product);
        handleToggleFetch(false);
      } catch (error) {
        // setError(true);
        console.log(error);
        handleToggleFetch(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-detail">
      {isFetching && <p>Loading...</p>}
      {product !== null && (
        <ProductView
          product={product}
          productId={product.id}
          quantity={products[product.id - 1].quantity}
          showDescription={true}
          key={product.id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      )}
    </div>
  );
}
