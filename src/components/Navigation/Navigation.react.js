import React from "react";
import "./Navigation.scss";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav className="navigation_wrapper">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
