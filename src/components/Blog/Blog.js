import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Root = styled.div`
  padding: 0 0 25px 0;
h3 {
    text-align center;
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
}

a {
  color: #8062c6;
  font-weight: 600;
}


@media screen and (max-width: 579px) {
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.3em;
  }
}
`

export const Section = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`

export const CardContainer = styled.div`
  width: 31.33%;
  margin-right: 1%;
  margin-left: 1%;
  .cardio :hover {
    border-radius: 4px;
    box-shadow: 3px 7px 14px 0 rgba(0, 0, 0, 0.11);
    margin-top: -30px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 0px;
  }
`

export const Card = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 28px;
  flex-direction: column;
  flex: 1;
  border-radius: 8px;
  color: #30364d;
  text-decoration: none;
`

export const Image = styled.div`
  width: 100%;
  height: 216px;
  border-radius: 4px;
  background-color: #f8f8ff;
  background-image: url(${props => props.image});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Title = styled.div`
  display: flex;
  padding: 35px 10px 10px 10px;
  flex-direction: column;
  flex: 1;
  text-align: center;
  h4 {
    margin-bottom: 8px;
    font-family: sofia-pro, sans-serif;
    font-size: 18px;
    line-height: 1.25em;
    text-transform: capitalize;
  }
`

export const Author = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: center;
  align-items: center;
  color: #798099;
  font-size: 12px;
  line-height: 20px;
`

export default ({ posts }) => (
  <Root>
    <Section>
      <Container>
        {posts.nodes.map(post => (
          <CardContainer key={post.id}>
            <div className="cardio">
              <Link to={post.slug}>
                <Card>
                  <Image image={post.featuredImage.sourceUrl} />
                  <Title>
                    <h4>{post.title}</h4>
                  </Title>
                  <Author>
                    <p>by {post.author.name}</p>
                  </Author>
                </Card>
              </Link>
            </div>
          </CardContainer>
        ))}
      </Container>
    </Section>
  </Root>
)
