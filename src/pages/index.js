import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillComponent from '../components/skillComponent';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        htmlTest
        profile
        skills {
          name
          description
          icon
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <h4>Hi there! <span role="img" aria-labelledby="hi">&#x1F44B;</span></h4>
      <p>
        I'm Anthony, a Software Developer born in France and living in Dublin for 4 years.
        Prior to completing a Higher Diploma in Computer Sciences (1st Class Honours)
        from National College of Ireland, I received a Master’s in Management (specialised in Digital Marketing)
        from DCU Business School.
      </p>
      <p>
        In my spare time, I enjoy coding and making things.
        I just released my first project <a href="https://socca.io" target="_blank" rel="noopener noreferrer">SOCCA</a>,
        a virtual café where people from all backgrounds and horizons can meet up for a few minutes to learn new things,
        share ideas and challenge their beliefs.
      </p>
      <p>
        I picked up creative coding using tools like <a href="https://processing.org/" target="_blank" rel="noopener noreferrer">Processing</a> or <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">p5.js</a>.
        You should check it out if you have never heard of them. You can make pretty cool stuff like what you can see below.
        I'm currently learning <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">Three.js</a>,
        an amazing JavaScript library that uses WebGL under the hood to make animated 3D computer graphics directly in the browser.
      </p>

      <div style={{display:'flex', justifyContent: 'center'}}>
        <img src="/img/blop.gif" alt="blop" style={{width: '200px'}}/>
      </div>

      <h4>Skills</h4>
      <p>Here is an overview of the main technologies I enjoy using. The MERN stack would be my go-to stack for prototyping and developing, but I'm also comfortable with Java and I am always open to learn new technologies.</p>
      {data.dataJson.skills.map((element, index) => (
        <SkillComponent key={index + 1} data={element}/>
      ))}
    </Layout>
  )
}

export default IndexPage
