import React from "react";
import Image from "../components/image";
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
      <Image name="gatsby-astronaut.png"/>
      <h4>{data.dataJson.name}</h4>
      <div className={sidebarStyle.information}>
        {data.dataJson.position}
        <br/>
        {data.dataJson.location}
      </div>
    </div>
  )
}

export default Sidebar
