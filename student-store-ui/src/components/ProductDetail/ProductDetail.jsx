import * as React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://codepath-store-api.herokuapp.com/store/${id}`
        );

        setProduct(res.data.product);
      } catch (error) {
        // setError(true);
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-detail">
      {product === null && <p>Loading...</p>}
      {product !== null && <p>loaded</p>}
    </div>
  );
}
