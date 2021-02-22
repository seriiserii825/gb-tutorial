import React from "react";
import "./Navigation.module.scss";
import { Link } from "gatsby";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
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
        <li>
          <Link to="/examples">Examples</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
