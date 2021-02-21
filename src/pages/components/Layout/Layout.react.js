import React from "react";

import "./Layout.scss";
import Navigation from "../Navigation/Navigation.react";
import Footer from "../Footer/Footer.react";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
