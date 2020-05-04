import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact"

import about from "../../images/about.jpg"

export const Root = styled(MDBContainer)`
  margin: 5rem auto 5rem auto;
  display: felx;
`
export const ImageWrapper = styled(MDBCol)`
  padding: 0;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 3%;
  }
`

export const TextContainer = styled(MDBCol)`
  padding: 0;
`

export const InnerContainer = styled(MDBCard)`
  width: 400px;
  margin: auto;

  padding: 20px;
  position: absolute;
  top: 18%;
  left: 25%;

  h3 {
    text-align: center;
    padding-bottom: 20px;
    font-family: "brandon-grotesque", Sans-serif;
  }
  h3:after {
    margin-left: 70px;
    content: "";
    height: 1px;
    width: 55%;
    background: #f77a24;
    display: block;
  }

  p {
    font-family: "Futura", sans-serif;
    color: #787878;
    font-weight: 100;
  }

  a {
    padding: 0;
    color: #79b3f1 !important;
    text-transform: uppercase;
    padding: 0;
    border: 0;
  }

  @media (max-width: 1180px) {
    top: 10%;
    left: 20%;
    width: 400px;
  }

  @media (max-width: 991px) {
    top: 3%;
    left: 0%;
    position: inherit;
    width: auto;

    h3:after {
      margin-left: 110px;
      width: 45%;
    }
  }

  @media (max-width: 767px) {
    top: 0%;
    left: 0%;
    position: inherit;

    h3:after {
      margin-left: 50px;
      width: 62%;
    }
  }

  @media (max-width: 575px) {
    h3:after {
      margin-left: 150px;
      width: 38%;
    }
  }
  @media (max-width: 400px) {
    h3:after {
      margin-left: 60px;
      width: 60%;
    }
  }
`

export default () => (
  <Root>
    <MDBRow>
      <ImageWrapper sm="4">
        <img src={about} alt="Tamilee Webb" />
      </ImageWrapper>
      <TextContainer>
        <InnerContainer sm="4">
          <MDBCardBody>
            <h3>About Tamilee</h3>
            <p>
              Millions of fans worldwide have long admired Tamilee's no-nonsense
              approach to mind, body, health and fitness that can be achieved
              within the home.
            </p>
            <p>
              Her energy, exuberance and specially designed proven weight loss
              workout programs have consistently elevated her to the top of the
              Billboard charts.
            </p>
            <Link to="/about">
              About Tamilee <MDBIcon icon="angle-right" />
            </Link>
          </MDBCardBody>
        </InnerContainer>
      </TextContainer>
    </MDBRow>
  </Root>
)
