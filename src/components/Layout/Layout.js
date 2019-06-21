import React from "react";
import { Header } from "./Header/Header.js";
import { Footer } from "./Footer/Footer.js";

// Import styles
import "./Layout.scss";

export class Layout extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  };
};
