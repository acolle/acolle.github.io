import React from "react";
import resumeStyle from "../styles/resume.module.css";

const WorkComponent = ({ data }) => (
  <div>
    <h4>{data.position}</h4>
    <h5>{data.company} - {data.location} - {data.year}</h5>
  </div>
)

export default WorkComponent
