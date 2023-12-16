import React from "react";
//Styled
import styled from "styled-components";
import { Image } from "./styles.js";
//assets
import pic1 from "../assets/pic1.jpg";

//components
import About from "./About.js";

const Profile = () => {
  return (
    <>
      <CSSProfile>
        <CSSInfo>
          <h2>Fernanda J. Santiago</h2>
          <p>Front End Developer</p>
        </CSSInfo>
        <Image>
          <img src={pic1} />
        </Image>
      </CSSProfile>
      <About />
    </>
  );
};

const CSSProfile = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const CSSInfo = styled.div`
  flex: 1;
  padding-right: 3rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export default Profile;
