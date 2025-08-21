import Image, { StaticImageData } from "next/image";
import React from "react";
import contact_image_1 from "../../../public/img/contact-1.webp";
import contact_image_2 from "../../../public/img/contact-2.webp";
import contact_image_3 from "../../../public/img/swordman.webp";
import contact_image_4 from "../../../public/img/swordman-partial.webp";
import AnimatedTitle from "./AnimatedTitle";
import Zentry from "@/fonts/Zentry";
import Button from "../Shared/Buttons/Button";

const ClipImageBox = ({
  src,
  clipClass,
}: {
  src: StaticImageData;
  clipClass: string;
}) => {
  return (
    <div className={clipClass}>
      <Image src={src} alt="contact_image" />
    </div>
  );
};
const Contact = () => {
  return (
    <div id="contact" className="w-screen px-10 min-h-96 my-20">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden w-72 overflow-hidden h-full sm:block lg:left-20 lg:w-96">
          <ClipImageBox src={contact_image_1} clipClass="contact-clip-path-1" />
          <ClipImageBox
            src={contact_image_2}
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ClipImageBox
            src={contact_image_4}
            clipClass="absolute md:scale-125"
          />
          <ClipImageBox
            src={contact_image_3}
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Loser's club
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass={`special-font !md:text-[6.2rem] w-full ${Zentry.className} !text-5xl !font-black !leading-[.9]`}
          />
          <Button id="contact-btn" title="contact us" containerClass="mt-10 cursor-pointer bg-white text-black" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
