import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
// import "./Product.scss";

export const Product = (props) => (
  <NavLink
    className="product"
    exact to={"/product/" + props.index}
    index={props.index} >

    <p className="product-info">{props.productInfo}</p>
    <p className="product-name">{props.name}</p>
    <p className="product-price">$ {props.price}</p>
    <img className="product-image" src={props.image} alt="product-image" />
  </NavLink>
);