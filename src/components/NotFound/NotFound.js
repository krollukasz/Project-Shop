import React from "react";
import "./NotFound.scss";

const NotFound = () => (
  <div className="error-page">
    <img className="error-page-photo" src={`/images/404.jpg`} alt={`404 error`} />
  </div>
);

export default NotFound;
