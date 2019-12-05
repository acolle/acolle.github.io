import React from "react";
// import resumeStyle from "../styles/resume.module.css";

const WorkComponent = ({ data }) => (
  <div>
    <h5>{data.position} @ {data.company} - {data.location} - {data.year}</h5>
    <ul>
      {data.functions.map((task, index) => <li key={index + 1}>{task}</li>)}
    </ul>
  </div>
)

export default WorkComponent
