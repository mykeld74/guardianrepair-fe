import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Styled from "styled-components"
import Container from "./container"
import "./layout.css"

const Page = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Page>
        <Container>{children}</Container>
      </Page>
      {/* <footer>©{new Date().getFullYear()}, Guardian Garage Door Repair</footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
