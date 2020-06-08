import React from 'react'
import styled from 'styled-components'

import { MDBContainer } from 'mdbreact'

import buns from '../../images/buns.jpg'
import espn from '../../images/espn.png'
import fox from '../../images/fox.jpg'
import tv from '../../images/fit.png'
import media from '../../images/media.jpg'

export const Root = styled(MDBContainer)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Helvetica', 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
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
    width: 700px;
  }

  @media (max-width: 1000px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 560px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 415px) {
    img {
      width: 300px;
    }
  }
`

const featuredArr = [
  {
    alt: 'Buns of steel dvd',
    image: buns,
  },
  {
    alt: 'espn logo',
    image: espn,
  },
  {
    alt: 'Fox Sports logo',
    image: fox,
  },
  {
    alt: 'FitTv logo',
    image: tv,
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>Tamilee has been featured in:</h2>
    </div>
    <ImageWrapper>
      <div className="logo">
        <img src={media} alt="" />
      </div>
    </ImageWrapper>
  </Root>
)

// {featuredArr.map(({ alt, image }) => (
//   <div className="logo" key={alt}>
//     <img src={image} alt={alt} />
//   </div>
// ))}
