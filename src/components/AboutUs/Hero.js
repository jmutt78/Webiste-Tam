import React from "react";
import styled from "styled-components";

import { Jumbotron } from "react-bootstrap";
import IHM from "../../images/ihm.jpg";

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
`;

export const Hero = styled(Jumbotron)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${IHM});
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;
  height: 100%;
  width: auto;
  height: 800px;

  h1 {
    color: white;
    text-align: center;
    padding: 10rem 0 0 0;
    color: #ffffff;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 74px;
    font-weight: 300;
    letter-spacing: 4.1px;
  }
`;

export default () => (
  <Root>
    <Hero />
  </Root>
);
