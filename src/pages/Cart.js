import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setbuttonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElement = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  function placeOrder() {
    setbuttonText("Ordering...");
    setTimeout(() => {
      console.log("Order Placed");
      setbuttonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElement}
      <p>Total: {totalCostDisplay}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </main>
  );
}

export default Cart;
