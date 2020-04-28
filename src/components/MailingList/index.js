import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact"
import { Button } from "react-bootstrap"

import fitness from "../../images/women-fitness.jpg"

export const Root = styled(MDBContainer)`
  padding-bottom: 5rem;
  padding-top: 3rem;

  h2 {
    font-weight: 350;
  }
  .title {
    margin: 20px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande",
      sans-serif;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: normal;
    color: #79b3f1;
    padding-top: 5rem;
  }

  p {
    text-align: center;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    color: #79b3f1;
  }

  input {
    width: 480px;
  }

  .btn-outline-secondary {
    color: #fff;
    border-color: #79b3f1 !important;
    color: #79b3f1 !important;
    margin: 0 0 0 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 784px) {
    .btn-outline-secondary {
      margin: 0 0 3rem 0;
    }
    h3 {
      padding-top: 0;
    }
  }
`

export default () => (
  <Root>
    <MDBRow>
      <MDBCol>
        <form>
          <h3>Join Team Tamilee</h3>
          <p>
            Subscribe to the Tamilee Webb newsletter and receive a direct line
            to what's happening and what's new.
          </p>

          <MDBInput type="text" id="contact-email" label="Your Email" />
          <Button variant="outline-secondary">Join Now</Button>
        </form>
      </MDBCol>
      <MDBCol>
        <img
          src={fitness}
          className="img-fluid z-depth-1"
          alt="Women working out to Tamilee Webb"
        />
      </MDBCol>
    </MDBRow>
  </Root>
)
