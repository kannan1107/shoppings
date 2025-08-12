import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #ddd", borderRadius: "5px", padding: "10px",
      textAlign: "center", width: "250px", margin: "10px"
    }}>
      <img src={product.image} alt={product.title} style={{ height: "150px" }} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        style={{ background: "green", color: "white", padding: "5px 10px", border: "none" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
