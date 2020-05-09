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

import Plans from './plans'
import coach from '../../images/coaching.jpg'
import hands from '../../images/hands.jpg'
import curls from '../../images/curls.jpg'
import grey from '../../images/grey-women.jpg'
import yoga from '../../images/yoga-mat.jpg'

export const Hero = styled(MDBJumbotron)`
  background: url(${grey});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 600px;

  h2 {
    text-align: center;

    width: 100%;

    color: black;
    font-family: 'brandon-grotesque', Sans-serif;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 4.1px;
  }

  h4 {
    text-align: center;
    color: black;
  }

  @media (max-width: 700px) {
    height: 600px;
    background-size: fit;
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
`

export const Card = styled(MDBCard)`
  margin-top: -100px;
  border-radius: 15px !important;
  background-color: #fff;
  padding: 0px 30px 30px 60px;
  box-shadow: 0 1px 2px hsla(0, 0%, 4%, 0.1);

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
    <Hero fluid style={{ backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
      <MDBRow>
        <MDBCol>
          <div className="title">
            <h2>Webb Workouts</h2>
            <h4>
              Created by Tamilee Webb best selling author and fitness coach. Her
              passion for health and fitness will help you achieve your fitness
              goals.
            </h4>
          </div>
        </MDBCol>
      </MDBRow>
    </Hero>
    <Root>
      <Card>
        <MDBCardBody>
          <h4>UNLIMITED ACCESS TO WORKOUT VIDEOS</h4>
          <p>
            Fads come and go; outfits, hairstyles, and socks seem to change the
            more time passes.
          </p>
          <p>
            But those aren't the only things that have changed! As time passes,
            our bodies change. I totally get it -- because I'm right there with
            you! We have shifted from wanting to just "look" fit to also wanting
            to "FEEL" fit. We just want to wake up and FEEL good, strong, and
            able to move.{' '}
          </p>
          <p>Can I get an amen? </p>
          <p>
            I asked what you were doing when you were in the best shape of your
            life, and well, that makes two of us!
          </p>
          <p>
            However, we are now in a time where we have shifted away from VHS to
            DVD, to all things DIGITAL.
          </p>
          <p>
            So guess what! Design Your Fit is a monthly membership site that was
            designed for you to do the&nbsp;
            <strong>SAME great tried-and-true workouts</strong>&nbsp;that we
            know worked for you when you were in the&nbsp;
            <strong>BEST shape of your life!</strong>
          </p>
          <p>
            Except, now you can do it{' '}
            <strong>
              just the way you want it, from the convenience of your home{' '}
            </strong>
            (or anywhere else you have your phone/tablet/computer)!&nbsp;
          </p>
          <p>
            Except, now you can do it{' '}
            <strong>
              just the way you want it, from the convenience of your home{' '}
            </strong>
            (or anywhere else you have your phone/tablet/computer)!&nbsp;
          </p>
        </MDBCardBody>
        <MDBRow>
          <MDBCol md="6">
            <MDBCardBody>
              <p>Design Your Fit looks something like this:&nbsp;</p>
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
    </Root>
  </div>
)
