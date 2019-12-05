import React from "react";
// import resumeStyle from "../styles/resume.module.css";

const EducationComponent = ({ data }) => (
  <div>
    <h5>{data.degree} @ {data.institute} - {data.location} - {data.year}</h5>
    <ul>
      {data.modules.map((module, index) => <li key={index + 1}>{module}</li>)}
    </ul>
  </div>
)

export default EducationComponent
