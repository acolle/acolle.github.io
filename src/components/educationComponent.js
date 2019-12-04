import React from "react";
import resumeStyle from "../styles/resume.module.css";

const EducationComponent = ({ data }) => (
  <div>
    <h4>{data.degree}</h4>
    <h5>{data.institute} - {data.location} - {data.year}</h5>
    <p>{data.modules}</p>
  </div>
)

export default EducationComponent
