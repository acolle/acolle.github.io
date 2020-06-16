import React from "react";
import skillStyle from "../styles/skill.module.scss";

const skillComponent = ({ data }) => {

  return (
    <div className={skillStyle.skillContainer}>
      <div className={skillStyle.techLogo}>
        <img src={`/icons/${data.icon}.svg`}/>
      </div>
      <div className={skillStyle.description}>
        <p><b>{data.name}</b> - {data.description}</p>
      </div>
    </div>
  )
}

export default skillComponent
