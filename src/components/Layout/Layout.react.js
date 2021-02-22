import React from "react";
import "./Layout.scss";
import Navigation from "./../Navigation/Navigation.react";
import Footer from "./../Footer/Footer.react";
import { Main } from "../../styledComponents/main";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
