import React from "react"
import styled from "styled-components"

import { Row, Col, Image } from "react-bootstrap"

export const Root = styled.div`
  padding: 0 0 25px 0;
h3 {
    text-align center;
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
}

`

export const ImageContainer = styled(Image)`
  width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const RowContainer = styled(Row)`
  display: flex;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  p {
    color: #36454f;
    font-weight: 400;
  }

  @media (max-width: 770px) {
    flex-wrap: wrap;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-secondary {
    color: #fff;
    background-color: #8062c6 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  @media (max-width: 770px) {
  }
`

export default () => (
  <Root>
    <h3>
      We are here to help raise our clients to a better state of being and
      health.
    </h3>
    <RowContainer>
      <Col>
        <p>
          Illness, stress, anxiety and negativity have increased with our
          changing times. Many health conditions, are caused by excess stress,
          negative emotions and life traumas. Stress can get stored in our organ
          systems. This can lead to illness, organ dysfunction and isolated pain
          in areas of the body.
        </p>

        <p>
          Our body parts are all connected and work as a whole. At Integrative
          Health Management, we seek to provide multidimensional approaches,
          services and techniques to assist the whole body in healing from pain
          and stress to a better state of being, with limited medication use if
          possible.
        </p>
        <p>
          We consider each patient individually and help assist you to change
          your mindset and use natural supplements to heal you as a whole being.
          When perception and mindset change, all the circumstances in a
          person's life change.
        </p>
        <p>
          The programs we offer utilize Functional Medicine with specialized
          testing, supplementations, Indigo Quantum biofeedback therapies and to
          improve the lives of our patients.
        </p>
        <h4>Our clients experience</h4>
        <ul>
          <li>Improved health</li>
          <li>Weight management</li>
          <li>Mental clarity</li>
          <li>Life quality</li>
          <li>Decreased anxiety</li>
          <li>Better processing of medications and supplements</li>
          <li>Decreased use of medications</li>
        </ul>
        <h3>
          We will help you turn on the keys in you that will bring you to the
          best and healthiest highest whole... that you already are!!
        </h3>
      </Col>
    </RowContainer>
  </Root>
)
