import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { CardGroup, Card, Button } from "react-bootstrap"

import buns from "../../images/buns.jpg"
import red from "../../images/tamilee-red.png"
import coach from "../../images/Tamilee-kneel.jpg"

export const Root = styled(MDBContainer)`
  padding-bottom: 5rem;
  padding-top: 3rem;

  h2 {
    font-weight: 350;
  }
  .title {
    margin: 20px;
    text-align: center;
    padding-bottom: 2rem;
    font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande",
      sans-serif;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: normal;
    color: #79b3f1;
  }

  .card {
    box-shadow: none;
  }

  .card-body {
    display: flex;
    flex-direction: column;
  }
  a {
    color: #79b3f1;
  }

  .btn-outline-secondary {
    color: #fff;
    border-color: #79b3f1 !important;
    color: #79b3f1 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 4575px) {
    .card {
      margin-bottom: 0px;
    }
  }
`

const prodArr = [
  {
    type: "Digital",
    title: "Webb Digital",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: buns,
    back: "#fff4e1",
    link: "/digital",
  },
  {
    type: "Workouts",
    title: "Webb Workouts",
    text:
      "You will learn that working out the way you WANT to work out is the BEST way to work out. Period. STOP thinking you have to suffer through dreadful, painful, high impact workouts you hate doing. Let me show you that when you are in control of FEELING FIT, you can, and will! ",
    image: red,
    back: "#ffd085",
    link: "/Workouts",
  },
  {
    type: "Coaching",
    title: "Webb Coaching",
    text:
      "Sometimes we need a little guidance to help reach our goals or take it to the next level.  Besides helping millions change their bodies, Tamilee has helped other fitness professionals with their business goals, strategy for branding, marketing, social media and resources.",
    image: coach,
    back: "#fff4e1",
    link: "/Coaching",
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>The Tamilee Experience</h2>
    </div>
    <MDBRow>
      <CardGroup>
        {prodArr.map(({ type, image, title, text, back, link }) => (
          <Card style={{ background: back }}>
            <Card.Img variant="top" src={image} />
            <Card.Body variant="d-flex">
              <h3>{title}</h3>
              <Card.Text>{text}</Card.Text>

              <Button variant="outline-secondary mt-auto btn btn-lg btn-block btn-primary ">
                <Link to={link}>Explore {type}</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </MDBRow>
  </Root>
)
