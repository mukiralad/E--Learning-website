import React from "react";
import pastelbg from "../assets/pastel-bg.png";
import introImg from "../assets/intro.png";
import elcImg from "../assets/elc.png";
import ppsImg from "../assets/pps.png";
import emImg from "../assets/em.png";
import spodImg from "../assets/spod.png";
import beeImg from "../assets/bee.png";
import { useUserAuth } from "../Auth";
import Hero from "./Hero";
import Slider from "./Slider";
import "../styles/Landing.css";
import NavbarBox from "./NavbarBox";

function Landing() {
  const { user } = useUserAuth();
  return (
    <div className="App">
      <NavbarBox />

      <Hero imageSrc={pastelbg} displayText={user && user.email} />

      <Slider
        imageSrc={introImg}
        title={"Introduction"}
        subtitle={
          "A brief introduction to the courses you will learning throughout the semester."
        }
        courseRoute="/introduction"
      />

      <Slider
        imageSrc={elcImg}
        title={"English Language and Communication"}
        subtitle={
          "Communication is a skill which involves systematic and continuous process of speaking, listening and understanding. We must learn to speak well and communicate effectively. "
        }
        flipped={true}
        courseRoute="/elc"
      />

      <Slider
        imageSrc={ppsImg}
        title={"Programming for Problem Solving         "}
        subtitle={
          "Problem solving is the process of identifying a problem, developing an algorithm for it and finally implementing the algorithm to develop a computer program. "
        }
        courseRoute="/pps"
      />

      <Slider
        imageSrc={emImg}
        title={"Engineering Mathematics - I         "}
        subtitle={
          "Engineering mathematics is a branch of applied mathematics concerning mathematical methods and techniques that are typically used in engineering and industry."
        }
        flipped={true}
        courseRoute="/em"
      />

      <Slider
        imageSrc={spodImg}
        title={"Semiconductor Physics and Optoelectronic Devices"}
        subtitle={
          "SPOD  deals with the physics and technology of semiconductor optoelectronic devices such as light emitting diodes, laser diodes and photodiodes, which are becoming important components in consumer optoelectronics, IT and communication devices."
        }
        courseRoute="/spod"
      />

      <Slider
        imageSrc={beeImg}
        title={"Basic Electrical Engineering"}
        subtitle={
          "Electrical engineering is an engineering discipline concerned with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism."
        }
        flipped={true}
        courseRoute="/bee"
      />
    </div>
  );
}

export default Landing;
