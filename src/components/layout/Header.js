import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="red">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            ContactManager
          </a>
          <ul id="nav-mobile">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact/add">Add</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
