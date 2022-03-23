import React from "react";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={item.url} alt={item.id} width="130px" height="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
