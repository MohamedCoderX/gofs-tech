"use client";
import { useEffect, useRef } from "react";

// Example logos
const logos = [
  "https://i.ibb.co/gMKGLG09/Falcon.png",
  "https://i.ibb.co/KpYr7BRZ/Whats-App-Image-2025-03-07-at-01-01-48.jpg",
  "https://www.nexevo.in/images/nexevo-best-web-design-company-in-bangalore.svg",
  "https://i.ibb.co/TDMS1x1P/sm.png"
];

export default function Partner() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    let scrollAmount = 0;

    const scrollLogos = () => {
      if (scrollEl) {
        scrollAmount += 0.5; // Adjust speed here
        if (scrollAmount >= scrollEl.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollEl.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollLogos);
      }
    };

    scrollLogos();
  }, []);

  return (
    <section className="w-full py-12 ">
      {/* Heading */}
      <div className="mb-8 text-center px-4">
        <h2 className="inline-block px-5 py-2 text-xs sm:text-sm md:text-md lg:text-lg text-white bg-black rounded-3xl">
          Partners
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mt-4">
          Our Partners &amp; Supporters
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative max-w-6xl mx-auto overflow-hidden px-4">
        {/* Fade effect on left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
        {/* Fade effect on right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex w-[200%] gap-8 animate-marquee" ref={scrollRef}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center h-16 sm:h-20 md:h-24 lg:h-28 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${index}`}
                className="h-full object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
