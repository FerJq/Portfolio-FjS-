import React from "react";

//Styled
import styled from "styled-components";
//Animation

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="Logo">
          <p>FjS</p>
        </div>
        <div className="Reference">
          <a>Home</a>
          <a>Profile</a>
          <a>Skills</a>
          <a>Contact</a>
          <a>Footer</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
