import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import siteData from "../../content/data/siteData.json";
import navData from "../../content/data/navData.json";

export default ({ children }) => {
  return (
    <div>
      <Nav menu={navData} />
      {children}
      <Footer copyright={siteData.siteName} />
    </div>
  );
};
