import React from "react";

function Photos({ className, img }) {
  return (
    <div className={`${className} image-container`}>
      <img className="image-grid" src={img.url} alt={img.id} />
    </div>
  );
}
export default Photos;
