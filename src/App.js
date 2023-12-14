import React from "react";

//Components
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

//Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Profile />
        <Skills />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
