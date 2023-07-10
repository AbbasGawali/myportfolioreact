import React from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import SocialLinks from "./assets/components/SocialLinks";
import About from "./assets/components/About";
import Portfolio from "./assets/components/Portfolio";
import Experience from "./assets/components/Experience";
import Contact from "./assets/components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience/>
      <Contact/>
    </div>
  );
};

export default App;
