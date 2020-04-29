import React from "react"
import styled from "styled-components"

import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

import curl from "../../images/reverse-curl.jpg"

export const Root = styled(MDBContainer)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;

  h2 {
    font-weight: 350;
    margin: 20px;
    text-align: center;
  }

  p {
    padding-bottom: 3rem;
    margin: 20px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`

export const Box = styled(MDBCol)`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  a {
    border: 3px solid #79b3f1;
    width: 100%;
    display: block;
    text-align: center;
    color: #79b3f1;
    text-transform: uppercase;
    padding: 63px 20px;
    font-size: 30px;
    margin: 15px 0;
  }

  a:hover {
    text-decoration: none;
    background: #79b3f1;
    color: #fff;
  }
`

const contactArr = [
  {
    title: "Webb Digital",
    link: "http://platformpurple.com/help/contact-us/",
  },
  {
    title: "Webb Workouts",
    link: "mailto:tamilee.webb@me.com",
  },
  {
    title: "Webb Coaching",
    link: "mailto:tamilee.webb@me.com",
  },
]

export default () => (
  <Root>
    <div className="title">
      <h2>How Can We Help You?</h2>
      <p>
        To contact us, please click on the department or product you are
        inquiring about.
      </p>
    </div>
    <MDBRow>
      <MDBCol>
        <MDBRow>
          {contactArr.map(({ title, link }) => (
            <Box md="4">
              <a class="contact-item" href={link}>
                {title}
              </a>
            </Box>
          ))}
        </MDBRow>
      </MDBCol>
    </MDBRow>
  </Root>
)
