"use client";
import Zentry from "@/fonts/Zentry";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedTitle = ({
  title,
  containerClass,
  sectionId,
}: {
  title: string;
  containerClass: string;
  sectionId?: string;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
      return () => context.revert();
    }, containerRef);
  }, []);

  return (
    <div ref={containerRef} className={`${containerClass} animated-title`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className={`animated-word ${Zentry.className}`}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
