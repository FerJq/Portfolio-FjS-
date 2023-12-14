import React from "react";
import { Link } from "react-router-dom";
//Styled
import styled from "styled-components";
//Animation

const Navbar = () => {
  return (
    <CssNav>
      <h1 id="logo">
        <Link className="link" to="/">
          FjS.
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="/pages">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </CssNav>
  );
};

const CssNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 10rem;
  background: #25161b;
  position: sticky;
  top: 0;
  z-index: 10;

  .link {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
  }

  ul {
    font-family: "Josefin Sans", sans-serif;
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  #logo {
    .link {
      font-weight: bolder;
      font-family: "Whisper", cursive;
      font-size: 2rem;
    }
  }
`;

export default Navbar;
