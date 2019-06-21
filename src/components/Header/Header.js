import React from "react";
import { NavLink } from "react-router-dom";

// Import styles
import "./Header.scss";

export const Header = props => {
  return (
    <div className="header">
      <nav className="navigation-wrapper">
        <div className="shop-name">
          Computers
        </div>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/faq" activeClassName="active">
          FAQ
        </NavLink>
        <NavLink exact to="/regulations" activeClassName="active">
          Regulations
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};
