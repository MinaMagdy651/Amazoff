import React from "react";
import ReactLoading from "react-loading";
export default function Loading({ height, width }) {
  return (
    <div className="container d-flex justify-content-center">
      <ReactLoading
        type={"bubbles"}
        color={"#000000"}
        height={`${height}px`}
        width={`${width}px`}
      />
    </div>
  );
}
