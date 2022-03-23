import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} alt={item.id} width="130px" height="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
