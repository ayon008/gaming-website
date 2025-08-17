"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import navImage from "@/../public/img/logo.png";
import Button from "../Shared/Buttons/Button";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const navContainerRef = useRef(null);
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const audioRef = useRef(null);
  const [isAudionPlaying, setAudioPlaying] = useState<boolean>(false);
  const [isIndicator, setIndicatorActive] = useState<boolean>(false);
  const toggleAudionIndicator = () => {
    setAudioPlaying((prev) => !prev);
    setIndicatorActive(!isIndicator);
  };

  const [lastY, setY] = useState<number>(0);
  const [isNavVisible, setVisible] = useState<boolean>(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastY) {
      navContainerRef.current.classList.add("floating-nav");
      setVisible(false);
    } else if (currentScrollY < lastY) {
      setVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setY(currentScrollY);
  }, [currentScrollY, lastY]);

  useEffect(() => {
    if (isAudionPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudionPlaying]);

  useGSAP(
    () => {
      gsap.to(".nav", {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    },
    { dependencies: [isNavVisible] }
  );

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 nav"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Image src={navImage} alt="logo" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, i) => {
                return (
                  <Link className="nav-hover-btn" key={i} href={"/"}>
                    {item}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => toggleAudionIndicator()}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                src={"/audio/loop.mp3"}
                loop
                className="hidden"
                ref={audioRef}
              ></audio>
              {[1, 2, 3].map((bar) => {
                return (
                  <div
                    key={bar}
                    className={`indicator-line !bg-white ${isIndicator ? "active" : ""}`}
                    style={{ animationDelay: `${bar}*0.1s` }}
                  ></div>
                );
              })}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
