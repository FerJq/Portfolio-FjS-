import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Container>
      <h2>
        Hello, I'm <span>Fernanda J. Santiago</span>
      </h2>
      <h6>Front-End Developer, based in New York</h6>
      <p>
        My name is Fernanda J. Santiago, I'm living in New York City, I was born
        in Venezuela, I'm Systems Technician Software/Hardware(ITI), but I
        decided to start my coding career at SheCodes, because I love how
        computers work, and being able to build your websites, games, or Apps to
        me is amazing, is a whole different world and I love spending my time
        coding and improving every day, now my dream is to become a Full stack
        Engineer Developer.
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  color: white;

  h2 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.2rem;
    color: #00bbf0;
  }

  p {
    font-family: "Josefin Sans", sans-serif;
    margin-top: 0.5rem;
    line-height: 1.8rem;
    font-size: 1.5rem;
  }

  span {
    font-family: "Whisper", cursive;
    font-size: 3.5rem;
  }
`;

export default Description;
