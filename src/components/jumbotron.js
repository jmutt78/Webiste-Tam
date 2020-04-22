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
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${hero});

  background-size: cover;
  background-repeat: no-repeat;

  height: 800px;

  h1 {
    color: white;
    text-align: center;
    padding: 10rem 0 0 10rem;
    color: #ffffff;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: 4.1px;
    width: 80%;
  }
  @media (max-width: 980px) {
    height: 600px;

    h1 {
      padding: 10rem 0 0 0;

      font-size: 30px;
      width: 100%;
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
            <hr className="my-4" style={{ width: "30rem" }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Hero>
  )
}

export default Jumbotron
