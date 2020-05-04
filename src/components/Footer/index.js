import React from "react"
import { Link } from "gatsby"

import {
  Root,
  TopContainer,
  CollumnContainer,
  CTAContainer,
  ImageContainer,
  ServicesContainer,
  SocailContainer,
  FooterContainer,
} from "./style"

import logo from "../../images/logo.jpg"
import FaceBook from "../../../assets/facebook.svg"
import Insta from "../../../assets/instagram.svg"
import Linkedin from "../../../assets/linkedin.svg"
import Mail from "../../../assets/mail.svg"
import YouTube from "../../../assets/youtube.svg"

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer>
      <Root>
        <TopContainer>
          <ImageContainer>
            <img
              src={logo}
              width="200"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </ImageContainer>
          <CTAContainer>
            <h3>Take care of your Body and your Body will take care of YOU</h3>
          </CTAContainer>
        </TopContainer>
        <CollumnContainer>
          <ServicesContainer>
            <h4>Tamilee</h4>

            <Link to="/about">About</Link>
            <Link to="/podcast">Podcast</Link>
            <Link to="/contact">Contact</Link>
          </ServicesContainer>
          <ServicesContainer>
            <h4>Shop</h4>
            <Link to="/videos">Videos</Link>
            <Link to="/webbworkouts">Webb Workouts</Link>
          </ServicesContainer>
          <ServicesContainer>
            <h4>Links</h4>
            <Link to="/coaching">Coaching</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/shipping-returns">Shipping & Returns</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </ServicesContainer>
          <SocailContainer>
            <h4>Social</h4>
            <a
              href="https://www.facebook.com/TamileeWebbFitness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaceBook />
            </a>
            <a
              href="https://www.linkedin.com/pub/tamilee-webb/3/524/ba4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/tamileewebb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Insta />
            </a>
            <a
              href="https://www.youtube.com/user/TheTamileeWebb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube />
            </a>
            <a href="mailto:tamilee.webb@me.com">
              <Mail />
            </a>
          </SocailContainer>
        </CollumnContainer>

        <FooterContainer>
          <p>© {getYear()} Tamilee</p>
          <a
            href="https://jgmsoft.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by JGM Software
          </a>
        </FooterContainer>
      </Root>
    </footer>
  )
}

export default Footer
