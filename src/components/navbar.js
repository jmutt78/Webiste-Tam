import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Navbar, Nav, NavDropdown, Button, Accordion } from "react-bootstrap"

import logo from "../images/logo.jpg"

const StyledNav = styled(Navbar)`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0 auto;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  text-transform: uppercase;
  .active {
    color: #79b3f1;
    font-weight: 600;
    background-color: white;
  }

  .dropdown-toggle {
    display: block;
    width: 100%;

    clear: both;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 0px 3px 5px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  a {
    color: rgba(0, 0, 0, 0.6);
  }

  .navbar-toggler-icon {
    @media (max-width: 575px) {
      padding: 10px;
    }
    @media (max-width: 1077px) {
      padding: 10px;
    }
  }

  img {
    margin: 0;
    border-radius: 50%;
    @media (max-width: 575px) {
      padding: 10px;
    }
    @media (max-width: 1077px) {
      padding: 10px;
    }
  }

  .dropdown-menu a {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    background-color: white;
  }

  .dropdown-menu a:hover,
  .dropdown-menu a:focus {
    color: #79b3f1;
    font-weight: 600;
    background-color: white;
  }

  .ml-auto {
    @media (max-width: 575px) {
      display: none;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }

  .navbar-nav a:hover,
  .navbar-nav a:focus {
    color: #79b3f1;
    font-weight: 600;
    background-color: transparent;
  }

  .acord {
    padding-bottom: 30px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  .accordion {
    width: 100%;
    padding: 30px 0 0 0;
    border-bottom: 1px solid #79b3f1;

    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;

    @media (min-width: 991px) {
      display: none;
    }
  }
  .menu-collapse {
    width: 100%;
    display: flex;
    background-color: #e8e7ec;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    justify-content: center;
    border-top: 1px solid #79b3f1;
    a {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
      font-weight: 500;
    }
  }
  .menu-collapse a:hover,
  .menu-collapse a:focus {
    color: #79b3f1;
    font-weight: 600;
    background-color: white;
  }

  @media (max-width: 575px) {
    padding: 0;
  }
  @media (max-width: 1077px) {
    padding: 0;
  }

  button {
    border: 0;
    background: transparent;
  }
`

export const NavDrop = styled(NavDropdown)`
  a {
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  .btn-outline-secondary {
    color: #fff;
    border-color: #79b3f1 !important;
    color: #79b3f1 !important;
    margin: 0;

    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  @media (max-width: 575px) {
    display: none;
  }
  @media (max-width: 1077px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: block;
  width: 100%;
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  padding: 0.5rem 1rem;
`

const NavBar = ({ siteTitle }) => {
  const serviceLink = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Podcast",
      link: "/podcast",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ]

  const otherLink = [
    {
      title: "Shop Videos",
      link: "/videos",
    },
    {
      title: "Shop Plans",
      link: "/plans",
    },
    {
      title: "Coaching",
      link: "/coaching",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ]
  return (
    <header>
      <StyledNav bg="transparent" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="150"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Accordion>
            <Accordion.Toggle eventKey="1">
              <div className="acord">
                Tamilee <i className="arrow down"></i>
              </div>
            </Accordion.Toggle>
            {serviceLink.map(({ title, link }) => (
              <Accordion.Collapse eventKey="1" key={title}>
                <div className="menu-collapse">
                  <Link to={link} activeStyle={{ color: "#79b3f1" }}>
                    {title}
                  </Link>
                </div>
              </Accordion.Collapse>
            ))}
          </Accordion>
          {otherLink.map(({ title, link }) => (
            <Accordion key={title}>
              <div className="acord">
                <Link to={link} activeClassName="active">
                  {title}
                </Link>
              </div>
            </Accordion>
          ))}
        </Navbar.Collapse>

        <Nav className="ml-auto">
          <NavDrop title="Tamilee" className="nav-dropdown">
            {serviceLink.map(({ title, link }) => (
              <NavDropdown.Item key={title}>
                <Link to={link} activeStyle={{ color: "#79b3f1" }}>
                  {title}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDrop>
          {otherLink.map(({ title, link }) => (
            <LinkContainer key={title}>
              <Link to={link} activeClassName="active">
                {title}
              </Link>
            </LinkContainer>
          ))}
        </Nav>
        <ButtonContainer>
          <Link to="/book">
            <Button variant="outline-secondary">BOOK Tamilee</Button>
          </Link>
        </ButtonContainer>
      </StyledNav>
    </header>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
