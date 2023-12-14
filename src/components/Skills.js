import React from "react";
import { Link } from "react-router-dom";

//Styled
import styled from "styled-components";

function Skills() {
  return (
    <div className="Skills">
      <div className="Background">
        <div className="box-1">
          <div>
            <i class="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div>
            <i class="fa-brands fa-bootstrap"></i>
            <p>Boostrap</p>
          </div>
          <div>
            <i class="fa-solid fa-desktop"></i>
            <p>Responsive Web Design</p>
          </div>
          <div>
            <i class="fa-brands fa-figma"></i>
            <p>Figma</p>
          </div>
        </div>
        <div className="box-2">
          <div>
            <i class="fa-brands fa-react"></i>
            <p>React</p>
          </div>
          <div>
            <i class="fa-solid fa-code"></i>
            <p>Visual Code Studio</p>
          </div>
          <div>
            <i class="fa-brands fa-github"></i>
          </div>
          <div>
            <i class="fa-solid fa-image"></i>
            <p>SVG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
