import React from "react";
import ReactLoading from "react-loading";
export default function Loading({ height, width, type }) {
  return (
    <ReactLoading
      type={type}
      color={"#000000"}
      height={`${height}px`}
      width={`${width}px`}
    />
  );
}
