import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function Photos({ className, img }) {
  const [hovered, sethovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-add-circle-fill cart"
          // onClick={() => addToCart(img)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  // const cartIcon = hovered && (
  //   <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  // );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <img className="image-grid" src={img.url} alt={img.id} />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Photos;
