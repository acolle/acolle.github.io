import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects
import "./header.css";

const Header = () => (
  <header>
    <div className="navBarContainer">
      <Link to="/">Home</Link>
      <Link to="/resume/">Resume</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/art/">Generative Art</Link>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
