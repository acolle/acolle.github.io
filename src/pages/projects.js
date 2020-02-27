import React from "react";
import Layout from "../components/layout";
import ProjectComponent from "../components/projectComponent";
import projectStyle from "../styles/project.module.scss";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        projects {
          name
          description
          tags
          urls {
            name
            value
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <h4>Projects</h4>
      <div className={projectStyle.projects}>
        {data.dataJson.projects.map((project, index) => (
          <ProjectComponent key={index + 1} data={project}/>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
