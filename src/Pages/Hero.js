import React from "react";
import ButtonGS from "../Components/ButtonGS";
import HeroContent from "../Components/HeroContent";
import HeroSummit from "../Components/HeroSummit";
import Navbar from "../Components/Navbar";

const Hero = () => {
  return (
    <div className="h-screen Hero__background-img">
      <Navbar></Navbar>
      <HeroContent></HeroContent>
      <HeroSummit></HeroSummit>   
    </div>
  );
};

export default Hero;
