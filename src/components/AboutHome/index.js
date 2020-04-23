import React from "react"
import styled from "styled-components"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact"

import about from "../../images/about.jpg"
import ripple from "../../images/ripples.png"

export const Root = styled(MDBContainer)`
  background: url(${ripple});
  background-repeat: repeat;
  margin: 5rem auto 5rem auto;
  display: felx;
`
export const ImageWrapper = styled(MDBCol)`
  padding: 0;
  img {
    max-width: 100%;
    height: auto;
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
    margin-left: 45px;
    content: "";
    height: 1px;
    width: 68%;
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
  }
  @media (max-width: 700px) {
    top: 0%;
    left: 0%;
    position: inherit;
  }
`

export default () => (
  <Root>
    <MDBRow>
      <ImageWrapper sm="4">
        <img src={about} alt="Image of Tamilee Webb" />
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
            <a href="#">
              Learn More <MDBIcon icon="angle-right" />
            </a>
          </MDBCardBody>
        </InnerContainer>
      </TextContainer>
    </MDBRow>
  </Root>
)
