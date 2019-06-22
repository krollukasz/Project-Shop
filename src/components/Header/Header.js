import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


// Import styles
import "./Header.scss";

export const Header = props => {
  return (
    <div className="header">
      <nav className="navigation-wrapper">
        <a href="/" className="shop-name">
          <img src="/images/logo.png" alt="logo" />
          <span className="logo-text">
            Computer Shop
          </span>
        </a>
        <div className="links-wrapper">
          <div>
            <ul className="links">
              <li className="navigation-link">
                <NavLink exact to="/" className="link-nav" activeClassName="activeLink" activeStyle={{ fontWeight: "bold" }}>
                  Home
                </NavLink>
              </li>
              <li className="navigation-link">
                <NavLink exact to="/faq" className="link-nav" activeClassName="activeLink" activeStyle={{ fontWeight: "bold" }}>
                  FAQ
                </NavLink>
              </li>
              <li className="navigation-link">
                <NavLink exact to="/regulations" className="link-nav" activeClassName="activeLink" activeStyle={{ fontWeight: "bold" }}>
                  Regulations
                </NavLink>
              </li>
              <li className="navigation-link">
                <NavLink exact to="/contact" className="link-nav" activeClassName="activeLink" activeStyle={{ fontWeight: "bold" }}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink exact to="/basket" className="basket-icon" activeClassName="activeLink">
            <FontAwesomeIcon icon={ faShoppingBag } />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
