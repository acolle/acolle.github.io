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
      <img src="/portrait_.png" alt="self" className={sidebarStyle.image}/>
      <div className={sidebarStyle.information}>
        <b>{data.dataJson.name}</b>
        <br/>
        <span>{data.dataJson.position}</span>
        <br/>
        <span>{data.dataJson.location}</span>
        <br/>
        <div className={sidebarStyle.contact}>
          <span><img src="/email.png" alt="email" className={sidebarStyle.logo} onClick={handleOnClick}/></span>
          <a href={data.dataJson.social.github.address} target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github" className={sidebarStyle.logo}/></a>
        </div>
        <div className={"" + (displayEmail ? sidebarStyle.show : sidebarStyle.hidden)}>anthonycolle84 at gmail.com</div>
      </div>
    </div>
  )
}

export default Sidebar
