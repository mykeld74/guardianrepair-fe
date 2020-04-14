import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Styled from "styled-components"
import BgImage from "gatsby-background-image"

const StyledImg = Styled(Img)`
  width: calc(100% - 20px);
  margin: 4vh auto;
  height: auto;
  
`

const IndexPage = ({ data }) => (
  <BgImage fluid={data.bgImage.fluid} className="bgImage">
    <Layout>
      <SEO title="Home" />

      <StyledImg fluid={data.logo.fluid} />
      <div>
        <h1>
          Call or Text: <a href="tel:3039490688">303.949.0688</a>
        </h1>
      </div>
      <div>
        <h1>
          Whether you need a new door or are looking to get your existing door
          repaired we've got you covered.
        </h1>
      </div>
    </Layout>
  </BgImage>
)

export const query = graphql`
  query {
    logo: imageSharp(fluid: { originalName: { eq: "logo.png" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    bgImage: imageSharp(fluid: { originalName: { eq: "homePageBG.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export default IndexPage
