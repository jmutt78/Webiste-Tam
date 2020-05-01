import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout.js";
import SEO from "../components/seo";

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
`;

const Privacy = props => {
  const {
    data: {
      wpgraphql: { page }
    }
  } = props;

  const { title, content } = page;
  console.log(props);
  return (
    <Layout>
      <SEO title={title} />
      <Root>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Root>
    </Layout>
  );
};

export default Privacy;

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        date
      }
    }
  }
`;
