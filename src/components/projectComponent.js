import React from "react";
import projectStyle from "../styles/project.module.css";

const ProjectComponent = ({ data }) => (
  <div className={projectStyle.projectContainer}>
    <h5>{data.name}</h5>
    <p>{data.description}</p>
    <div className={projectStyle.urlContainer}>
      {data.urls.map((url) => {
        if (url.value !== '') {
          return <a href={url.value} target="_blank" rel="noopener noreferrer"><img src={`/${url.name}.png`} alt={`${url.name}`} className={projectStyle.logo}/></a>
        } else {
          return <span style={{display:'none'}}></span>
        }
      })}
    </div>
  </div>
)

export default ProjectComponent
