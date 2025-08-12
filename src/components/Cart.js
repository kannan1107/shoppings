import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : null}
      {cartItems.map(item => (
        <div key={item.id} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "5px"
        }}>
          <img src={item.image} alt={item.title} style={{ height: "50px"  }} />
          <span>{item.title}</span>
          <span>₹ {item.price}</span>
          <button 
            onClick={() => removeFromCart(item.id)} 
            style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}
          >
            Remove
          </button>

        </div>
      
      ))}
        {cartItems.length > 0 && (
            <div style={{ marginTop: "20px", textAlign: "right", fontWeight: "bold", color: "green" }}>
              
            <h3>Total Amount: ₹ {cartItems.reduce((total, item) => total + item.price, 0)}</h3>
                          <h3> Discount: ₹ 5%</h3>
            <h3>Final Amount: ₹ {cartItems.reduce((total, item) => total + item.price, 0) * 0.95}</h3>
           

            </div>
        )}

 
    </div>
  );
}
