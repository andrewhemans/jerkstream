import React from "react"
import Schedule from "../components/Schedule"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="columns is-multiline">
      <div className="column">
        <p className="title is-2 has-text-centered has-text-primary">About</p>
        <About />
      </div>
      <div className="column is-half">
        <p className="title is-2 has-text-centered has-text-primary">Upcoming Streams</p>
        <Schedule />
      </div>
    </div>
  </Layout>
)

export default IndexPage
