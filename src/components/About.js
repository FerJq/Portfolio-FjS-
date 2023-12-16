import React from "react";
//styles
import styled from "styled-components";
//assets
import flowers from "../assets/flowers.jpg";
import food from "../assets/food.jpg";
import walks from "../assets/walks.jpg";

const About = () => {
  return (
    <>
      <CSSMainBox>
        <CSSChildrenBox>
          <img src={flowers} />
          <h2>Photography!</h2>
          <p>
            Since young, my parents and family helped me to understand our lives
            are short and live "Today" as the last day, every time that I go
            out, I take time to capture those special moments that life gives to
            me and happen one time in a year, or a million years, Enjoy your
            life and enjoy those small details that are happening around you,
            not everybody can see what life has for you!
          </p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={food} />
          <h2>Cooking!</h2>
          <p>
            Eat is one of the pleasure of life, Cook is always fun, mix all
            those spices, imagination and love will help you to make amazing
            meals, than you and your family can enjoy and help them to be
            healthy. The food is a blessing and keep us living!
          </p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={walks} />
          <h2>Walks!</h2>
          <p>
            Gaming, my favorite hobby, since I was a little girl, I always have
            been enjoying the fantastics worlds than games have to offer, all
            that fantasy, imagination, be able to create your own world and
            share with others is a great experience, not only I have fun with
            games but also learn, about Art, History, Culture and plenty stuff,
            games are a free world than I will always appreciate.
          </p>
        </CSSChildrenBox>
      </CSSMainBox>
    </>
  );
};

const CSSMainBox = styled.div`
  padding: 2rem 2rem;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const CSSChildrenBox = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default About;
