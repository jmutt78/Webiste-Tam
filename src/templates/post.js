import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { format, parseISO } from "date-fns"

import Layout from "../components/layout.js"
import SEO from "../components/seo"

export const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 2rem 2rem;
  max-width: 940px;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
  }

  .date {
    text-align: center;
  }

  img {
    width: 900px;
    height: 450px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    padding: 1rem 2rem 2rem;
  }
`

const Post = props => {
  const {
    data: {
      wpgraphql: { post },
    },
  } = props

  const { title, content, date, featuredImage } = post
  console.log(props)
  return (
    <Layout>
      <SEO title={title} />
      <Root>
        <h1>{title}</h1>
        <img
          src={featuredImage.sourceUrl}
          alt={featuredImage.altText}
          rounded
        />
        <p className="date">{format(parseISO(date), "MMMM dd, yyyy")}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Root>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        slug
        content
        uri
        date
        featuredImage {
          altText
          sourceUrl
        }
      }
    }
  }
`
