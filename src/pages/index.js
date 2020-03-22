import React from "react"
import Schedule from "../components/Schedule"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles.scss"


const IndexPage = () => {

  return (
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
          <div className="column is-half">
            <p className="title is-2 has-text-centered has-text-primary">Other Resources</p>
            <ul>
              <li><a href="https://soundcloud.com/stockton-archives">Stockton Archives on SoundCloud</a></li>
              <li><a href="https://www.musicgoround.com/locations/stockton-ca">Stockton Music Go Round</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  };

export default IndexPage
