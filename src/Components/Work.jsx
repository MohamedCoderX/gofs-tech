import React from 'react'

const Work = () => {
  return (
    <div className="gof max-w-6xl mx-auto px-4 py-12 mt-8 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Text Section */}
        <div className="w-full md:w-3/4">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl py-4">
            Let's Work Together
          </h2>
          <p className="text-md sm:text-lg font-light text-white pb-6">
            Each demo built with Teba will look different. You can customize anything in the appearance of your website with only a few clicks.
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <button className="rounded-xl px-6 py-4 sm:px-8 sm:py-5 bg-white text-black text-sm sm:text-md md:text-lg font-medium transition-transform hover:scale-105">
            Let's Start a Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default Work
