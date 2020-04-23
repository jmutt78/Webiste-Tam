import React from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBadge,
} from "mdbreact"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import AsSeen from "../components/AsSeen"
import AboutHome from "../components/AboutHome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <AsSeen />
    <AboutHome />
  </Layout>
)

export default IndexPage
