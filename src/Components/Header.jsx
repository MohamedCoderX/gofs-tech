import React from 'react'
import { SparklesText } from "./magicui/sparkles-text";
import img from '../../public/Assets/circle.png'
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import 'animate.css'
import { AnimatedShinyText } from './magicui/animated-shiny-text';

const Header = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20">
      
      {/* Tagline */}
      <div className="flex items-center justify-center z-10">
        <div className="group rounded-full border border-black/5 bg-black  text-white transition-all hover:cursor-pointer hover:bg-neutral-200 px-4 py-2">
          <AnimatedShinyText className="text-sm sm:text-base text-white">
            ✨ All in One Solutions
          </AnimatedShinyText>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="animate__animated animate__bounceInLeft text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-white mt-6 z-10">
        Get Your Business
      </h1>
      <h1 className="animate__animated animate__bounceInLeft animate__delay-1s text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-white z-10">
        A Digital Presence At
      </h1>

      {/* Sparkles Text */}
      <SparklesText 
        text="GOFS" 
        className="text-yellow-400 text-4xl sm:text-6xl md:text-7xl lg:text-8xl animate__animated animate__bounceInRight animate__delay-1s z-10"
      />

      {/* Contact Button */}
      <InteractiveHoverButton className="mt-10 sm:mt-14 z-10">
        Contact us
      </InteractiveHoverButton>

      {/* Background Image */}

    
    </div>
  )
}

export default Header;
