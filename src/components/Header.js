import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Header() {
  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>

      <i className={"ri-shopping-cart-line ri-fw ri-2x"}></i>
    </header>
  );
}

export default Header;
