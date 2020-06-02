import React from 'react'
import styled from 'styled-components'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBCardBody,
  MDBCard,
} from 'mdbreact'

import { Jumbotron } from 'react-bootstrap'

import Plans from './plans'
import Results from './results'
import coach from '../../images/coaching.jpg'
import hands from '../../images/hands.jpg'
import curls from '../../images/curls.jpg'
import workouthero from '../../images/workouthero.png'
import yoga from '../../images/yoga-mat.jpg'
import webb from '../../images/webb.jpg'

export const Hero = styled(Jumbotron)`
  background: url(${workouthero});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;

  h2 {
    text-align: center;
    text-shadow: 1px 1px 2px black;
    width: 100%;

    color: #79b3f1;
    font-family: 'brandon-grotesque', Sans-serif;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 4.1px;
  }

  h4 {
    text-align: center;
    color: #79b3f1;
    text-shadow: 1px 1px 1px black;
  }

  @media (max-width: 1400px) {
    height: 500px;
    background-position: 5.5% 50%;
  }

  @media (max-width: 1280px) {
    height: 500px;
    background-position: 100% 100%;
  }

  @media (max-width: 700px) {
    height: 500px;
    background-position: 5.5% 50%;

    h2 {
      padding: 2rem 0 0 0;
      margin-left: 0rem;
      font-size: 30px;
      width: 100%;
    }
    h4 {
      text-align: center;

      font-size: 1rem;
      width: 100%;
    }
  }
`

export const Tammy = styled(MDBCol)`
  background: url(${yoga});
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;
  border-radius: 15px !important;
  @media (max-width: 700px) {
    background-position: 50% 50%;
    margin: 15px;
  }
`

export const Root = styled(MDBContainer)`
  padding-bottom: 5rem;
  font-family: 'Helvetica', 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
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

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  a {
    color: #79b3f1;
  }
  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #f77a24;
    width: 10%;
  }
`

export const Card = styled(MDBCard)`
  border-radius: 15px !important;
  background-color: #fff;
  padding: 0px 30px 30px 60px;
  box-shadow: 0 0px 0px;

  h4 {
    margin-bottom: 25px;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
  }

  @media (max-width: 993px) {
    padding: 0px 2px 2px 20px;
    h4 {
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 25px;
      font-weight: 300;
    }
  }
`

export default () => (
  <div>
    <Hero fluid></Hero>
    <Root>
      <Card>
        <MDBRow>
          <MDBCol md="6">
            <MDBCardBody>
              <p>Webb Workouts looks something like this:&nbsp;</p>
              <ol>
                <li>
                  <strong>You decide how long</strong>&nbsp;you have to workout:
                  10 minutes, 15 minutes, or 20 minutes. You know your body
                  best. How intense can you go today? Only have 10 minutes in
                  you? Great! Or perhaps you want to get fancy and combine a few
                  for an even longer workout!&nbsp;
                </li>
                <li>
                  Next<strong>&nbsp;you decide which body part</strong>
                  &nbsp;you feel like working! Not feeling like working your
                  legs? Only want to work your arms? Want to work both? You've
                  got it.&nbsp;
                </li>
                <li>
                  The best part about this is that&nbsp;every single month I
                  will be adding<strong>&nbsp;additional new clips</strong>
                  &nbsp;for you to choose from! Some new workouts, and some new
                  edits of old workouts. Either way, there will be fresh new
                  content monthly so you never get sick of the same old
                  videos.&nbsp;
                </li>
              </ol>
              <p style={{ marginTop: '30px' }}>
                <strong>
                  Did I mention that you can access this from anywhere? Even on
                  your phone. Even in the hotel room that has no DVD player.
                </strong>
              </p>
            </MDBCardBody>
          </MDBCol>
          <Tammy md="6" />
        </MDBRow>
      </Card>
      <Plans />
      <Results />
    </Root>
  </div>
)
