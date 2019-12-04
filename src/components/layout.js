import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Sidebar from "./sidebar";
import layoutStyle from "../styles/layout.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={layoutStyle.content}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <footer style={{textAlign: `center`, fontSize: `0.8rem`}}>
        © {new Date().getFullYear()}, Built with {` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
