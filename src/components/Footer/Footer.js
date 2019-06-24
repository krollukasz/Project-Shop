import React from "react";
import { NavLink } from "react-router-dom";

// Import styles
import "./Footer.scss";

export const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <span className="footer-copyrights">All rights reserved &copy; 2019 by Łukasz Król</span>
        
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
          
        </div>
      </div>
    </div>
  );
};
