import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order and Grab Food</h2>
        <p>
          We’ve been busy thinking of ways to serve you and keep you happy, 24/7
          Every Day.
        </p>
        <button>See Products</button>
      </div>
    </div>
  );
}

export default header;
