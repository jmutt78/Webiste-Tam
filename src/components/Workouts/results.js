import React from 'react'
import styled from 'styled-components'

import {
  MDBCard,
  MDBCardGroup,
  MDBCardText,
  MDBCardBody,
  MDBContainer,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from 'mdbreact'

import Deane from '../../images/Deane.jpg'
import Debbie from '../../images/Debbie.jpg'
import Lorrin from '../../images/Lorrin.jpg'

export const Root = styled(MDBContainer)`
  padding-top: 2rem;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande",
    sans-serif;
  .card-body {
    display: flex;
    flex-direction: column;
  }


  h4 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: normal;

  }
  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #f77a24;
    width: 10%;
  }
  .title {
    padding-bottom: 2rem;
  }
'
`

export const ImageWrapper = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;
  width: 525px;
  @media (max-width: 560px) {
    width: 300px;
    height: ${props => props.height};
    background-size: contain;
  }
`

export const CardWrapper = styled.div`
  padding-top: 15px;
`

export const RowWrapper = styled(MDBRow)`
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 560px) {
    margin: 0px;
  }
`

const resultsArr = [
  {
    title: 'Deanne R 43yrs old',
    text: 'Wanted more BUNS',
    image: Deane,
  },

  {
    title: 'Lorrin B 52yrs old',
    text: 'Wanted more BUNS',
    image: Lorrin,
  },
  {
    title: 'Debbie K 50yrs old',
    text: 'Lost 18 pounds, 22 inches',
    image: Debbie,
    height: '250px',
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>Real Results</h2>
      <hr />
    </div>
    <RowWrapper>
      {resultsArr.map(({ title, text, image, height }) => (
        <CardWrapper>
          <ImageWrapper image={image} height={height ? height : '300px'} />
          <div>
            <h4>{title}</h4>
          </div>
        </CardWrapper>
      ))}
    </RowWrapper>
  </Root>
)
