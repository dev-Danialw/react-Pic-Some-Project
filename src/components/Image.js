import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Photos({ className, img }) {
  const [hovered, sethovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite()}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite()}
        ></i>
      );
    }
  }
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <img className="image-grid" src={img.url} alt={img.id} />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}
export default Photos;
