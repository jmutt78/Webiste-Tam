import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import AsSeen from "../components/AsSeen"
import AboutHome from "../components/AboutHome"
import Products from "../components/Products"
import Testimonial from "../components/Testimonial"
import MailingList from "../components/MailingList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <AsSeen />
    <AboutHome />
    <Testimonial />
    <Products />
    <MailingList />
  </Layout>
)

export default IndexPage
