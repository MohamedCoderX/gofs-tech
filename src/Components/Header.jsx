import React from "react";
import Image from "next/image";
import { SparklesText } from "./magicui/sparkles-text";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import circleImg from "../../public/Assets/circle.png";
import "animate.css";

const Header = () => {
  return (
    <div className="w-full py-20 md:py-36 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20">
      
      {/* Tagline */}
      <div className="flex items-center justify-center z-10">
        <div className="group rounded-full border border-black/5 bg-black text-white transition-all hover:cursor-pointer hover:bg-neutral-200 px-4 py-2">
          <AnimatedShinyText className="text-sm sm:text-base text-white">
            ✨ All in One Solutions
          </AnimatedShinyText>
        </div>
      </div>

      {/* SEO-Optimized Main Heading */}
      <h1 className="animate__animated animate__bounceInLeft text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-white mt-6 z-10">
        <span className="">GOFS Tech</span> - The Best Web Development Company
      </h1>

      {/* Sparkles Text */}
      <SparklesText
        text="GOFS Tech"
        className="text-yellow-400 text-4xl sm:text-6xl md:text-7xl lg:text-8xl animate__animated animate__bounceInRight animate__delay-0.5s z-10"
      />

      {/* Contact Button with Accessibility */}
      <InteractiveHoverButton className="mt-10 sm:mt-14 z-10" aria-label="Contact GOFS Tech">
        Contact us
      </InteractiveHoverButton>

      {/* Background Image Optimization */}
      

    </div>
  );
};

export default Header;
