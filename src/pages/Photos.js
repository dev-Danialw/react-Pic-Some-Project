// import React, { useState, useContext } from "react";
import { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  const ImageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{ImageElements}</main>;
}

export default Photos;
