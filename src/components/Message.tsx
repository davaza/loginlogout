import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Message({ msg }: { msg: string }) {
  return <div className="alert alert-danger">{msg}</div>;
}
