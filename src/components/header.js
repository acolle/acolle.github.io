import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects
import headerStyle from "../styles/header.module.scss";

const Header = () => {

  return (
    <header>
      <div className={headerStyle.navBarContainer}>
        <span className={headerStyle.navBarElementDeco + " " + headerStyle.hasBackgroundBlue}>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>About</Link>
        </span>
        <span className={headerStyle.navBarElementDeco + " " + headerStyle.hasBackgroundYellow}>
          <Link to="/resume" activeStyle={{ fontWeight: 600 }}>Resume</Link>
        </span>
        <span className={headerStyle.navBarElementDeco + " " + headerStyle.hasBackgroundRed}>
          <Link to="/projects" activeStyle={{ fontWeight: 600 }}>Projects</Link>
        </span>
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
