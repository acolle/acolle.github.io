import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects
import headerStyle from "../styles/header.module.css";

const Header = () => {

  const finished = false;

  return (
    <header>
      <div className={headerStyle.navBarContainer}>
        <Link to="/">About</Link>
        <Link to="/resume/">Resume</Link>
        <Link to="/projects/">Projects</Link>
        {finished && <Link to="/art/">Generative Art</Link>}
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
