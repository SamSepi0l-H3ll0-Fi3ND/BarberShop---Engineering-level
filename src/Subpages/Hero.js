import React from "react";
import ButtonGS from "../Components/ButtonGS";
import HeroContent from "../Components/HeroContent";
import HeroSummit from "../Components/HeroSummit";
import Navbar from "../Components/Navbar";

const Hero = () => {
  return (
    <div className="h-max xl:h-screen w-full Hero__background-img" >
      <Navbar></Navbar>
      <HeroContent id='hero' ></HeroContent>
      <HeroSummit></HeroSummit>   
    </div>
  );
};

export default Hero;
