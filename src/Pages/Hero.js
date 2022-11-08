import React from "react";
import ButtonGS from "../Components/ButtonGS";
import HeroSummit from "../Components/HeroSummit";
import Navbar from "../Components/Navbar";

const Hero = () => {
  return (
    <div className="Hero__background-img max-h-screen">
      <Navbar></Navbar>
      <div className="Content flex flex-col ml-44 mt-24">
        <div className="Hero__short mb-8">
          <p className="text-main-red uppercase font-medium">
            Creative mind, Creative works.
          </p>
        </div>
        <div className=" mb-20 Hero__text">
          <p className="text-white text-6xl font-bold">
            Barberzy z <br />
            klasą
          </p>
        </div>
        <ButtonGS></ButtonGS>
        <HeroSummit></HeroSummit>
      </div>
    </div>
  );
};

export default Hero;
