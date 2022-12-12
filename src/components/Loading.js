import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Recipe data loading...</h4>
      <div className="loaderWrapper">
        <div className="loader">
            <div className="loader loaderInner"></div>
        </div>
      </div>
    </div>
  );
}
