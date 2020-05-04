import React from "react"
import styled from "styled-components"

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact"
import { Button } from "react-bootstrap"

import tamilee from "../../images/tamilee-hand.jpg"

export const Root = styled(MDBContainer)`
  padding-bottom: 5rem;
  padding-top: 3rem;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  color: #333333;
  h2 {
    font-weight: 350;
    margin: 20px;
    text-align: center;
  }
  h4 {
    margin: 20px;
    text-align: center;
  }
  .title {
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 680px;
    object-fit: cover;
  }
  .btn-outline-secondary {
    color: #fff;
    border-color: #79b3f1 !important;
    color: #79b3f1 !important;

    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  a {
    margin: 0 auto 0 auto;
  }

  @media (max-width: 784px) {
    .btn-outline-secondary {
      margin: 0 0 3rem 0;
    }
    img {
      height: 450px;
    }
  }
`

export const Card = styled(MDBCard)`
  display: flex;

  padding: 10px 35px 35px 60px;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    margin-bottom: 25px;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
  }
  ul {
    list-style: none;
  }

  ul li:before {
    content: " ✓ ";
  }
  li {
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: left;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    align-items: center;
    padding: 35px 35px 35px 35px;

    h4 {
      font-size: 19px;
    }

    li {
      font-size: 15px;
    }
  }
`

export default () => (
  <Root>
    <div className="title">
      <h2>Coaching</h2>
      <h4>
        Sometimes we need a little guidance to help reach our goals or take it
        to the next level.
      </h4>
    </div>
    <MDBRow>
      <MDBCol md="6" className="order-1">
        <Card>
          <MDBCardBody>
            <p>
              Besides helping millions change their bodies, Tamilee has helped
              other fitness professionals with their business goals, strategy
              for branding, marketing, social media and resources.
            </p>
            <p>
              Tamilee’s coaching expert goes beyond health & fitness; maybe
              you’re looking to find balance between work and home, or you’re
              ready to go from a job to your passion in life. Helping others
              success, discover or transition is what Tamilee loves to do.
            </p>

            <ul>
              <li>Help you find the answers to your questions.</li>
              <li>Help you design a plan for your needs.</li>
              <li>
                Eliminate any doubt or obstacles that is keeping you from your
                goal.
              </li>
              <li>Inspire you daily to reach the next step toward the goal.</li>
              <li>
                Tools & techniques to help you identify and achieve your goals.
              </li>
            </ul>
          </MDBCardBody>
          <a class="contact-item" href="mailto:tamilee.webb@me.com">
            <Button variant="outline-secondary">Get Started</Button>
          </a>
        </Card>
      </MDBCol>
      <MDBCol md="6">
        <img
          src={tamilee}
          className="img-fluid z-depth-1"
          alt="Women working out to Tamilee Webb"
        />
      </MDBCol>
    </MDBRow>
  </Root>
)
