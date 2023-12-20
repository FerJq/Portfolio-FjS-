import React from "react";
//Styled
import styled from "styled-components";
import { Image } from "./styles.js";
//assets
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

//components
import About from "./About.js";
import Description from "./Description.js";

const Profile = () => {
  return (
    <>
      <header>
        <CSSProfile>
          <CSSInfo>
            <h2>Fernanda J. Santiago</h2>
            <h3>Front End Developer</h3>
          </CSSInfo>
          <Image>
            <img src={pic1} alt="profile_my_picture1" />
            <img src={pic2} alt="profile_my_picture2" />
            <img src={pic3} alt="profile_my_picture3" />
            <img src={pic4} alt="profile_my_picture4" />
          </Image>
        </CSSProfile>
      </header>
      <Description />
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
  padding: 4rem;
  z-index: 2;
  h2 {
    color: white;
    font-weight: 600;
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #00bbf0;
    font-weight: 800;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export default Profile;
