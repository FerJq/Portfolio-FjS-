import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <CSSFooter>
      <i class="fa-solid fa-snowflake"></i>
      <h6>
        Made with love by <span>Fernanda J. Santiago</span>
      </h6>
      <i class="fa-solid fa-snowflake"></i>
    </CSSFooter>
  );
};

const CSSFooter = styled.nav`
  margin-top: 2rem;
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1d1d;
  z-index: 10;

  i {
    color: white;
    margin: 1rem;
    font-size: 1.5rem;
  }

  h6 {
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
  }

  span {
    font-family: "Whisper", cursive;
    font-size: 1.2rem;
    color: #00bbf0;
  }
`;

export default Footer;
