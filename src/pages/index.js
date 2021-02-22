import React from "react";
import Layout from "./../components/Layout/Layout.react.js";
import ExampleHeader from "../components/ExampleHeader/ExampleHeader.react.js";
import Images from "../components/Images/Images.react.js";

export default function home() {
  return (
    <Layout>
      <div className="page-home">
        <ExampleHeader />
        <Images />
      </div>
    </Layout>
  );
}
