import React from "react";
import Layout from "./../components/Layout/Layout.react";
import ExampleHeader from "../components/ExampleHeader/ExampleHeader.react";

export default function Home() {
  return (
    <Layout>
      <div className="page-home">
        <h1>Home</h1>
        <ExampleHeader />
      </div>
    </Layout>
  );
}
