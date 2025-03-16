import React from 'react';

const About = () => {
  const List = ["30+ Successful Projects", "3+ Years Experience", "Global Clients"];
  const highlight = [
    "Cutting-edge web and app development",
    "Creative digital marketing strategies",
    "High-quality graphic design solutions",
    "Client-focused approach"
  ];

  return (
    <div className="mt-20 px-6 md:px-10 text-center">
      {/* Header Section */}
      <h2 className="text-center text-sm py-1 px-5 rounded-3xl text-white bg-black w-fit mb-3 mx-auto">
        About Us
      </h2>
      <h2 className="font-semibold text-3xl md:text-5xl">Websites That Tell Your Brand's Story</h2>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-11 mt-10">
        
        {/* Image Section */}
        <div className="relative max-w-lg">
          <img 
            src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/about-us-img.jpg" 
            alt="About Us"  
            className="rounded-3xl w-full"
          />
          <img 
            src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/about-circle.svg" 
            alt="Icon"  
            className="icon absolute top-1/2 transform -translate-y-1/2 right-0 md:-right-10 w-16 md:w-20"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-left mt-7 text-lg">
            At GOFS, we are a dynamic startup fueled by innovation, creativity, and a commitment to excellence. 
            Our team of skilled professionals brings together expertise in web development, app development, digital marketing, and graphic design, 
            crafting tailored solutions that elevate brands and businesses in the digital world.
            <br /><br />
            With a forward-thinking approach and a passion for perfection, we transform ideas into reality, ensuring impactful and results-driven outcomes. 
            At GOFS, we don’t just build digital solutions—we create experiences that leave a lasting impression. 🚀
          </p>

          {/* List Items */}
          <div className="flex flex-wrap gap-4 text-left mt-7">
            {List.map((item, index) => (
              <li key={index} className="text-white bg-blue-600 px-3 py-1 rounded-2xl">
                {item}
              </li>
            ))}
          </div>

          {/* Highlights */}
          <div className="text-left mt-7">
            {highlight.map((item, index) => (
              <li key={index} className="text-black list-disc ml-5">
                {item}
              </li>
            ))}
          </div>

          {/* Button */}
          <button className="bg-black text-white px-5 py-3 mt-5 rounded-md hover:text-yellow-300 shadow-md shadow-black">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
