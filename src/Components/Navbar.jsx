// src/components/Navbar.jsx
import React from "react";
import { CartIcon } from "./Icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">NoirSane</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <span className="cart-icon"><CartIcon /></span>
      </div>
      
    </nav>
  );
}
