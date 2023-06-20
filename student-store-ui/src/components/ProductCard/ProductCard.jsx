import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="product-img">
        <Link to={`/products/${productId}`}>
          <img src={product.image} alt="product image" />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
        </div>
        {/* will need to format */}
        {showDescription && (
          <div className="description">
            <p className="product-description">{product.description}</p>
          </div>
        )}
        <div className="product-actions">
          <div className="product-buttons">
            <button
              className="add"
              onClick={() => handleAddItemToCart(productId)}
            >
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => handleRemoveItemFromCart(productId)}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>
          {quantity > 0 && (
            <div className="qty">
              <p className="product-quantity">{quantity}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
