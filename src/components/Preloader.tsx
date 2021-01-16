import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Preloader() {
  return <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
}
