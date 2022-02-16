import React from "react";
import "../styles/Hero.css";

const Hero = ({ imageSrc, displayText }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="background" className="hero__image" />
      <h1 className="hero__title"> {displayText} </h1>
    </div>
  );
};

export default Hero;
