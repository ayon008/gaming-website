"use client";
import General from "@/fonts/General";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/img/about.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Circular from "@/fonts/Circular";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center", // += center pass houar 800px por trigger hobe
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className={`${General.className} text-center text-sm uppercase md:text-[10px]`}>
          Welcome to Looser Club
          <AnimatedTitle
            title="Unc<b>o</b>ver the <br /> pl<b>a</b>net’s ultimate losers"
            containerClass="mt-5 !text-black text-center"
          />
          <div className={`about-subtext ${Circular.className}`}>
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p className="text-gray-500">
              Looser’s club unites every player from countless games and
              platforms, both digital and physical, into a unified Play Economy
            </p>
          </div>
        </h2>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            src={aboutImage}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
