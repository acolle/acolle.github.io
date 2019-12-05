import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkComponent from "../components/workComponent";
import EducationComponent from "../components/EducationComponent";
import { useStaticQuery, graphql } from "gatsby";

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        education {
          year
          modules
          location
          institute
          grade
          degree
        }
        work {
          company
          year
          location
          position
          functions
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Resume" />
      <h4>Professional Experience</h4>
      {data.dataJson.work.map((workElement, index) => (
        <WorkComponent key={index + 1} data={workElement}/>
      ))}

      <h4>Education</h4>
      {data.dataJson.education.map((educationElement, index) => (
        <EducationComponent key={index + 1} data={educationElement}/>
      ))}
    </Layout>
  )
}

export default Resume
