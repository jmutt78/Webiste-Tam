import React from 'react'
import styled from 'styled-components'

import hero from '../images/hero2.jpg'

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { Jumbotron } from 'react-bootstrap'

export const Hero = styled(Jumbotron)`
  background: url(${hero});

  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 1000px;
  width: 100%;
  background-size: cover;
  h1 {
    text-align: center;
    padding: 10rem 0 0 0rem;
    margin-left: 32rem;

    color: black;
    font-family: 'brandon-grotesque', Sans-serif;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 4.1px;
    width: 60%;
  }
  hr {
    margin-right: 24rem;
    width: 30rem;
  }

  .body {
    font-size: 65px;
    color: #79b3f1;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
  }

  @media (max-width: 1300px) {
    height: 800px;
    background-position: 5.5% 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 1100px) {
    height: 700px;
    background-position: 5.5% 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 800px) {
    height: 500px;
    background-position: 5.5% 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      padding: 10rem 0 0 0;
      margin-left: 0rem;
      font-size: 30px;
      width: 100%;
    }
    .body {
      font-size: 35px;
    }
    hr {
      margin-right: 5rem;
      align-object: center;
      width: 10rem;
    }
  }

  @media (max-width: 700px) {
    height: 450px;
  }

  @media (max-width: 500px) {
    height: 300px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`

const HeroImage = () => {
  return <Hero fluid></Hero>
}

export default HeroImage

// <h1>Take care of your </h1>
// <h1> Body </h1>
// <h1> and your </h1>
// <h1> Body </h1>
// <h1> will take care of YOU</h1>

// <MDBRow>
//   <MDBCol>
//     <h1>
//       <span>Take care of your</span>
//       <span className="body"> Body </span>
//       <span> and your </span>
//       <span className="body">Body </span>
//       <span> will take care of </span>
//       <span className="body">YOU</span>
//     </h1>
//   </MDBCol>
// </MDBRow>
// </MDBContainer>
//
