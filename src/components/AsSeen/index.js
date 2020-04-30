import React from "react"
import styled from "styled-components"

import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

import buns from "../../images/buns.jpg"
import espn from "../../images/espn.png"
import fox from "../../images/fox.jpg"
import tv from "../../images/fit.png"

export const Root = styled(MDBContainer)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  .title {
    margin: 20px;
    text-align: center;
  }
  h2 {
    font-weight: 350;
    color: #36454f;
  }
`

export const ImageWrapper = styled.div`
  display: flex;

  .logo {
    flex: 33.33%;
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    margin: auto;
  }

  img {
    height: auto;
    width: 100px;
  }

  @media (max-width: 560px) {
    img {
      height: auto;
      width: 80px;
    }
  }

  @media (max-width: 415px) {
    img {
      height: auto;
      width: 70px;
    }
  }
`

const featuredArr = [
  {
    alt: "Buns of steel dvd",
    image: buns,
  },
  {
    alt: "espn logo",
    image: espn,
  },
  {
    alt: "Fox Sports logo",
    image: fox,
  },
  {
    alt: "FitTv logo",
    image: tv,
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>Tamilee has been featured in:</h2>
    </div>
    <ImageWrapper>
      {featuredArr.map(({ alt, image }) => (
        <div className="logo" key={alt}>
          <img src={image} alt={alt} />
        </div>
      ))}
    </ImageWrapper>
  </Root>
)
