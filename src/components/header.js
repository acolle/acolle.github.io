import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects
import headerStyle from "../styles/header.module.css";

const Header = () => {

  const finished = false;

  return (
    <header>
      <div className={headerStyle.navBarContainer}>
        <Link to="/" activeStyle={{ fontWeight: 600 }}>About</Link>
        <Link to="/resume" activeStyle={{ fontWeight: 600 }}>Resume</Link>
        <Link to="/projects" activeStyle={{ fontWeight: 600 }}>Projects</Link>
        {finished && <Link to="/art" activeStyle={{ fontWeight: 600 }}>Generative Art</Link>}
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
