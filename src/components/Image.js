import React, { useState } from "react";

function Photos({ className, img }) {
  const [hovered, sethovered] = useState(false);
  console.log(hovered);
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <img className="image-grid" src={img.url} alt={img.id} />
    </div>
  );
}
export default Photos;
