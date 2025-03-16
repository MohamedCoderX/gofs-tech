"use client"
import React from 'react'
import { BackgroundBeams } from "../Components/ui/background-beams";
import { Cover } from './ui/cover';
import { GlareCard } from './ui/glare-card';
import bg from "../../public/Assets/about-bg.png"

const WhyChooseUs = () => {
  const steps = [
    {
      number: "01",
      title: "Discussion",
      description:
        "Before making a proposal, we meet with clients face-to-face to go through their specific requirements.",
    },
    {
      number: "02",
      title: "Ideas & Concepts",
      description:
        "Our experts come up with all kinds of ideas and plans to make sure that the IT services chosen have the best solutions.",
    },
    {
      number: "03",
      title: "Testing & Trying",
      description:
        "After we all agree on the ideas and plans, we’ll carry them out as planned and give feedback on the results and changes.",
    },
    {
      number: "04",
      title: "Execute & Install",
      description:
        "Once the final blueprint has been accepted, everything will be carried out in accordance with the signed contract.",
    },
  ];
  return (
    <div className="abtt w-full rounded-md relative flex flex-col items-center justify-center antialiased">
   <div className="p-10 mt-0">
      <h2 className='text-center text-sm py-1 px-5 rounded-3xl text-white bg-black w-fit mb-3 m-auto'>Why Choose Us</h2>
   
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-black via-neutral-700 to-black dark:from-neutral-800 dark:via-white dark:to-white">
        We Build amazing websites at<Cover >warp speed</Cover>
      </h1>

    </div>
    <div className="py-8">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-left transition-transform hover:bg-gray-400  h-80 py-20"
            >
              <div className="text-2xl font-semibold text-black">
                {step.number}
              </div>
              <h3 className="mt-2 text-lg font-bold text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-900">{step.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <BackgroundBeams /> */}
  </div>

  )
}

export default WhyChooseUs