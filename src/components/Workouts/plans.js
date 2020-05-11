import React from 'react'
import styled from 'styled-components'

import {
  MDBCard,
  MDBCardGroup,
  MDBCardText,
  MDBCardBody,
  MDBContainer,
} from 'mdbreact'
import { Button } from 'react-bootstrap'

export const Root = styled(MDBContainer)`
  padding-top: 2rem;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande",
    sans-serif;
  .card-body {
    display: flex;
    flex-direction: column;
  }

  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #f77a24;
    width: 10%;
  }
  h4 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: normal;

  }

  .title {
    padding-bottom: 2rem;
  }
'
`

const planArr = [
  {
    title: 'Monthly',
    text: 'Pay monthly ',
    price: '$11.99',
    month: '$11.99',
    link: 'https://www.designyourfitplans.com/offers/LrsuMewf/checkout',
  },
  {
    title: '3-Months',
    text: 'Pay for 3 months at a time and save 8%',
    price: '$32.97',
    month: '$10.99',
    link: 'https://www.designyourfitplans.com/offers/H9FCCUPX/checkout',
  },
  {
    title: 'Yearly',
    text: 'Pay for 10 months and get 2 months for FREE!',
    price: '$120',
    month: '$10.00',
    link: 'https://www.designyourfitplans.com/offers/aFmv3YFL/checkout',
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>Choose a Plan</h2>
      <hr />
    </div>
    <MDBCardGroup>
      {planArr.map(({ title, text, price, link, month }) => (
        <MDBCard>
          <MDBCardBody>
            <h4>{month} / Month</h4>

            <MDBCardText>* Billed as one payment of {price}</MDBCardText>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary mt-auto btn btn-lg btn-block btn-primary ">
                Join - {title}
              </Button>
            </a>
          </MDBCardBody>
        </MDBCard>
      ))}
    </MDBCardGroup>
  </Root>
)
