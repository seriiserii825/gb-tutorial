import React from "react";
import Layout from "../components/Layout/Layout.react";
import Products from "../components/Products/Products";

export default function products() {
  return (
    <Layout>
      <h1>Products</h1>
      <Products />
    </Layout>
  );
}
