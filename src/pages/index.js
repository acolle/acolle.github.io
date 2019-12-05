import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyle from "../styles/about.module.css";
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        profile
        skills {
          name
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <h4>About Me</h4>
      <ul>
      {data.dataJson.profile.map((element, index) => (
        <li key={index + 1} className={aboutStyle.list}>{element}</li>
      ))}
      </ul>

      <h4>Skills</h4>
      <ul>
      {data.dataJson.skills.map((element, index) => (
        <li key={index + 1} className={aboutStyle.list}><b>{element.name}</b> - {element.description}</li>
      ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
