"use client"
import { FocusCards } from "./ui/focus-cards";
import img from '../../public/Assets/Web.jpg'
import img1 from '../../public/Assets/App.jpg'
import img2 from '../../public/Assets/Digital.jpg'
import img3 from '../../public/Assets/graphic.jpg'
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function OurServices() {
  const cards = [
    {
      title: "Web Development",
      para:"We build responsive, high-performance websites and custom web apps tailored to your business needs.",
      src: img,
    },
    {
      title: "App development",
      para:"We build responsive, high-performance websites and custom web apps tailored to your business needs.",
      src: img1,
    },
    {
      title: "Digital marketing",
      para:"We build responsive, high-performance websites and custom web apps tailored to your business needs.",
      src: img2,
    },
    {
      title: "Graphic Designing",
      para:"We build responsive, high-performance websites and custom web apps tailored to your business needs.",
      src: img3,
    },
   

  ];

  return <div className="mb-10 huv py-20 mt-10">
 
    <div className=' mx-10 text-center'>
  <h2 className='text-center text-sm py-1 px-5 rounded-3xl text-black bg-white w-fit mb-3 m-auto'>Services</h2>
  <h2 className='font-semibold text-5xl mb-8 text-white'>Services Tailored for You</h2>
  </div><FocusCards cards={cards} />
  
  </div>;
}
