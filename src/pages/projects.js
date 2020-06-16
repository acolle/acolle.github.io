import React from "react";
import Layout from "../components/layout";
import ProjectComponent from "../components/projectComponent";
import layoutStyle from "../styles/layout.module.scss";
import projectStyle from "../styles/project.module.scss";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        liveProjects {
          name
          description
          tags
          urls {
            name
            value
          }
        }
        sideProjects {
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
      <div className={layoutStyle.section}>
        <h4>Live Projects</h4>
        <div className={projectStyle.projects}>
          {data.dataJson.liveProjects.map((project, index) => (
            <ProjectComponent key={index + 1} data={project}/>
          ))}
        </div>
      </div>

      <div className={layoutStyle.section}>
        <h4>Other projects</h4>
        <div className={projectStyle.projects}>
          {data.dataJson.sideProjects.map((project, index) => (
            <ProjectComponent key={index + 1} data={project}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
