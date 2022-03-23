import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useContext(Context);

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElement = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElement}
      <p>Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
