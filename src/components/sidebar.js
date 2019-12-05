import React from "react";
import sidebarStyle from "../styles/sidebar.module.css";
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

  return (
    <div className={sidebarStyle.container}>
      <img src="/image.jpg" alt="self" className={sidebarStyle.image}/>
      <div className={sidebarStyle.information}>
        <b>{data.dataJson.name}</b>
        <br/>
        {data.dataJson.position}
        <br/>
        {data.dataJson.location}
        <br/>
        <div className={sidebarStyle.contact}>
          <a href={`mailto:${data.dataJson.social.email.address}`} target="_blank" rel="noopener noreferrer"><img src="/email.png" alt="email" className={sidebarStyle.logo}/></a>
          <a href={data.dataJson.social.github.address} target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github" className={sidebarStyle.logo}/></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
