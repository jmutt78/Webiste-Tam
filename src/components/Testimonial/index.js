import React from "react"
import styled from "styled-components"
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon,
} from "mdbreact"

export const Root = styled.div`
  padding: 1px 150px 50px 150px;
  background-color: #79b3f1;
  width: 100%;
  margin-left: 0;
  color: white;
  .carousel-indicators li {
    background-color: white;
  }
  .carousel-indicators {
    bottom: -90px;
  }
  h4 {
    font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande",
      sans-serif;
  }

  p {
    font-family: "sofia-pro", Sans-serif;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
  }

  @media (max-width: 575px) {
    border-radius: 0;
    padding: 10px 15px 10px 15px;
    p {
      font-size: 15px;
    }
    .carousel-indicators {
      bottom: -60px;
    }
  }
`

const testArr = [
  {
    key: "1",
    title: `Name 1`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
  {
    key: "2",
    title: `Name 2`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
  {
    key: "3",
    title: `Name 3`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
  {
    key: "4",
    title: `Name 4`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
]

export default () => {
  return (
    <Root>
      <section className="text-center my-5">
        <h3 className="h2-responsive font-weight-bold my-4">
          Tamilee - in their words
        </h3>

        <MDBCarousel
          activeItem={1}
          length={testArr.length}
          testimonial
          interval={false}
          showIndicators={true}
          className="no-flex"
        >
          <MDBCarouselInner>
            {testArr.map(({ title, text, key }) => (
              <MDBCarouselItem itemId={key}>
                <p>
                  <MDBIcon icon="quote-left" /> {text}
                </p>
                <h4 className="font-weight-bold">{title}</h4>

                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </Root>
  )
}
