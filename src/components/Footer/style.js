import styled from "styled-components"

export const Root = styled.div`
  padding: 25px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1280px;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
`

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  border-bottom: 1px solid #79b3f1;
  img {
    margin: 0 10px 15px 15px;
    justify-content: center;
    border-radius: 50%;
  }

  @media (max-width: 575px) {
    margin-bottom: 25px;
    padding-bottom: 25px;
  }
`

export const CollumnContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  webkit-box-direction: normal;
  border-bottom: 1px solid #79b3f1;
  padding-bottom: 30px;
  @media (max-width: 575px) {
    flex-wrap: wrap;
  }
`

export const CTAContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex: 1;
  h3 {
    text-align: center;
    display: block;
    margin-bottom: 0px;
    font-size: 25px;
    line-height: 28px;
  }

  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
    justify-content: center;

    h3 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 18px;
      line-height: 1.2em;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #79b3f1;

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    border-right-style: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .btn-outline-secondary {
    color: #fff;
    border-color: #79b3f1 !important;
    color: #79b3f1 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 575px) {
    width: 100%;
    justify-content: center;
    order: 1;
  }
`

export const HoursContainer = styled.div`
  width: 25%;
  margin-right: 5%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;
  li {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #36454f;
    font-size: 16px;
    line-height: 44px;
    margin-bottom: 0px;
  }
  ul {
    list-style-type: none;
  }

  h4 {
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }

  .wrapper {
    display: block;
  }
  @media (max-width: 575px) {
    order: 1;
    width: 100%;
    margin-bottom: 5px;
    margin-top: 25px;

    h4 {
      margin-bottom: 10px;
    }
    ul {
      margin: 0;
    }
  }
`

export const ServicesContainer = styled.div`
  width: 25%;
  margin-right: 2%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;

  a {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #36454f;
    font-size: 16px;
    line-height: 44px;
    text-decoration: none;
    cursor: pointer;
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }

  h4:after {
    content: " ";
    height: 1px;
    width: 5%;
    background: #f77a24;
    display: block;
  }

  @media (max-width: 575px) {
    width: 100%;
    margin-top: 25px;
    margin-bottom: 5px;
    justify-content: center;
    border-bottom: 1px solid #79b3f1;
    h4 {
      margin-bottom: 10px;
    }
  }
`

export const SocailContainer = styled.div`
  width: 8%;
  margin-right: 2%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;

  svg {
    width: 35px;
    height: auto;
    margin: 5px 0px 5px 0;
    cursor: pointer;
    filter: invert(69%) sepia(9%) saturate(2764%) hue-rotate(181deg)
      brightness(100%) contrast(90%);
  }

  h4 {
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }
  h4:after {
    content: " ";
    height: 1px;
    width: 15%;
    background: #f77a24;
    display: block;
  }
  @media (max-width: 575px) {
    width: 100%;
    display: block;
    margin-bottom: 0px;
    padding-top: 10px;
    flex-direction: row;
    order: 1;
    h4 {
      display: none;
    }
    svg {
      width: 35px;
      height: auto;
      margin: 0px 5px 0px 5px;
    }
  }
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #79b3f1;
  border-bottom: 1px solid #79b3f1;

  a {
    color: #36454f;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 18px;
  }

  svg {
    width: 35px;
    height: auto;
    margin: 5px 10px 5px 0;
    cursor: pointer;
    filter: invert(69%) sepia(9%) saturate(2764%) hue-rotate(181deg)
      brightness(100%) contrast(90%);
    @media (max-width: 575px) {
      width: 25px;
      margin: 0px 10px 0px 0;
      height: auto;
    }
  }

  .left {
    display: flex;
    width: 25%;
    align-items: center;
  }

  .middle {
    display: flex;
    width: 25%;
    justify-content: flex-start;
    align-items: center;
  }

  .right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
  }

  @media (max-width: 575px) {
    padding-top: 23px;
    padding-bottom: 22px;
    flex-direction: column;

    .left {
      width: 100%;
      margin-bottom: 20px;
    }

    .middle {
      width: 100%;
      margin-bottom: 20px;
    }

    .right {
      width: 100%;
      margin-bottom: 0px;
      order: 1;
    }
  }
`

export const FooterContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px none rgba(190, 199, 195, 0.6);
  font-size: 14px;
  a {
    color: #36454f;
    margin-bottom: 1.45rem;
    font-size: 14px;
  }
  @media (max-width: 575px) {
    flex-wrap: wrap;
    border-top-style: solid;
  }
`
