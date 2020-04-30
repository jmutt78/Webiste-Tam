import React from "react"
import styled from "styled-components"

import hero from "../images/hero.png"

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"

export const Hero = styled(MDBJumbotron)`
  background: url(${hero});

  background-size: cover;
  background-repeat: no-repeat;

  height: 800px;

  h1 {
    text-align: center;
    padding: 10rem 0 0 0rem;
    margin-left: 28rem;
    text-shadow: white 0px 0px 1px;
    color: black;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 4.1px;
    width: 60%;
  }
  hr {
    margin-right: 24rem;
    width: 30rem;
  }

  @media (max-width: 1110px) {
    height: 600px;

    h1 {
      padding: 10rem 0 0 0;
      margin-left: 0rem;
      font-size: 30px;
      width: 100%;
    }
    hr {
      margin-right: 5rem;
      align-object: center;
      width: 10rem;
    }
  }
`

const Jumbotron = () => {
  return (
    <Hero fluid style={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}>
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <h1 className="h1">
              Take care of your Body and your Body will take care of YOU
            </h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Hero>
  )
}

export default Jumbotron
