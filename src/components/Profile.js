import React from "react";
//Styled
import styled from "styled-components";
//assets
import picture from "../assets/picture.png";
const Profile = () => {
  return (
    <div className="Profile">
      <div />
      <CSSInfo>
        <div className="Picture">
          <img src={picture} />
        </div>
        <div className="Info">
          <h2>Fernanda J. Santiago.</h2>
          <p>
            My name is Fernanda J. Santiago, I'm living in New York City, I was
            born in Venezuela, I'm Systems Technician Software/Hardware(ITI),
            but I decided to start my coding career at SheCodes, because I love
            how computers work, and being able to build your websites, games, or
            Apps to me is amazing, is a whole different world and I love
            spending my time coding and improving every day, now my dream is to
            become a Full stack Engineer Developer, Enjoy my website, You can
            check my projects on the button below.
          </p>
        </div>
      </CSSInfo>
      <div />
    </div>
  );
};

const CSSProfile = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const CSSInfo = styled.div`
  display: flex;
`;

export default Profile;
