import React from "react";
import projectStyle from "../styles/project.module.scss";

const ProjectComponent = ({ data }) => (
  <div className={projectStyle.projectContainer}>
    <div>
      <h5>{data.name}</h5>
      {/*
    <div className={projectStyle.tags}>
      {data.tags.map((tag) => <span className={projectStyle.tag}>{tag} </span>)}
    </div>
        */}
      <p>{data.description}</p>
    </div>
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
