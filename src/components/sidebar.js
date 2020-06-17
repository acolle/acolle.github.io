import React, { useState } from "react";
import sidebarStyle from "../styles/sidebar.module.scss";
import { useStaticQuery, graphql } from "gatsby";

const Sidebar = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        name
        position
        location
        social {
          email {
            address
          }
          github {
            address
          }
        }
      }
    }
  `)

  const [ displayEmail, setDisplayEmail ] = useState(false);

  const handleOnClick = () => {
    setDisplayEmail(!displayEmail);
  }

  return (
    <div className={sidebarStyle.container}>
      <div className={sidebarStyle.infoContainer}>
        <img src="/img/portrait.jpg" alt="self" className={sidebarStyle.image}/>
        <div className={sidebarStyle.information}>
          <b>{data.dataJson.name}</b>
          <br/>
          <span>{data.dataJson.position}</span>
          <br/>
          <span>{data.dataJson.location}</span>
          <br/>
          <div className={sidebarStyle.contact}>
            <span><input type="image" src="/icons/email.png " alt="Submit Form" className={sidebarStyle.logo} onClick={handleOnClick}/></span>
            <a href={data.dataJson.social.github.address} target="_blank" rel="noopener noreferrer"><img src="/icons/github.png" alt="github" className={sidebarStyle.logo}/></a>
          </div>
          <div className={"" + (displayEmail ? sidebarStyle.show : sidebarStyle.hidden)}>anthonycolle84 at gmail.com</div>
        </div>
      </div>
      <div className={sidebarStyle.additionalInfo}>
        <img src="/icons/gatsby-icon.png" alt="gatsby" className={sidebarStyle.logo}/>
        <p style={{margin: '0'}}>Made with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a></p>
      </div>
    </div>
  )
}

export default Sidebar
