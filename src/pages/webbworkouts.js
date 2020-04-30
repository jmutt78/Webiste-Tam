import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Workouts from "../components/Workouts"

const WebbWorkouts = () => (
  <Layout>
    <SEO title="Webb Workouts" />
    <Workouts />
  </Layout>
)

export default WebbWorkouts
