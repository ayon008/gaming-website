"use client";
import Robert from "@/fonts/Robert";
import Zentry from "@/fonts/Zentry";
import React, { createContext, useEffect, useRef, useState } from "react";
import Button from "../Shared/Buttons/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export const AudioContext = createContext(null);

const Hero = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedVideo, setLoadedVideo] = useState<number>(1);

  const totalVideos = 4;
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const upComingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVidClick = (): void => {
    setHasClicked(true);
    setCurrentIndex(upComingVideoIndex);
  };

  const getVideoSrc = (index: number): string => {
    return `/videos/hero-${index}.mp4`; // Correct path for public folder
  };

  const handleVideoLoad = () => {
    setLoadedVideo((prev) => prev + 1);
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center",
          scale: 1,
          height: "100%",
          width: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current?.play();
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      // scope: container,
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    if (loadedVideo === totalVideos) {
      setIsLoading(false);
    }
  }, [loadedVideo, setIsLoading]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
    });
    gsap.to("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="h-dvh overflow-hidden rounded-lg relative z-10"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {/* Mini video Click */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideoIndex)} // Dynamically set the video source
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
                preload="auto"
              />
            </div>
          </div>
          <div>
            <video
              autoPlay
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              onLoadedData={handleVideoLoad}
              preload="auto"
            ></video>
            <video
              src={getVideoSrc(currentIndex)}
              loop
              autoPlay
              muted
              className="absolute top-0 left-0 size-full object-center object-cover"
              onLoadedData={handleVideoLoad}
              preload="auto"
            ></video>
          </div>
        </div>
        <h1
          className={`${Zentry.className} hero-heading absolute bottom-5 right-5 !z-40 text-blue-75`}
        >
          G<b className="">a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1
              className={`${Zentry.className} uppercase hero-heading text-blue-100`}
            >
              Redefine
            </h1>
            <p className={`mb-5 max-w-64 ${Robert.className} text-blue-100`}>
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1
        className={`${Zentry.className} hero-heading absolute bottom-5 right-5 text-black`}
      >
        G<b className="">a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
