import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dr from "../components/AboutUs/Dr"

export const AboutRoot = styled.div`
  @media (max-width: 600px) {
    margin-top: -48px;
  }
`

const AboutUs = () => (
  <Layout>
    <SEO title="About Tamilee" />
    <AboutRoot>
      <Dr />
    </AboutRoot>
  </Layout>
)

export default AboutUs
