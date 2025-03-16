import { 
  FaAndroid, FaNodeJs, FaPython, FaReact, FaSwift, 
  FaAngular, FaJava, FaWindows 
} from "react-icons/fa";
import { SiFlutter, SiCodeigniter, SiFsharp, SiLaravel } from "react-icons/si";

export default function TechnologiesSection() {
  const technologies = [
    { name: "Android", icon: <FaAndroid size="100%" className="text-green-500" /> },
    { name: "Codeigniter", icon: <SiCodeigniter size="100%" className="text-red-500" /> },
    { name: "Flutter", icon: <SiFlutter size="100%" className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs size="100%" className="text-green-600" /> },
    { name: "Python", icon: <FaPython size="100%" className="text-yellow-500" /> },
    { name: "React", icon: <FaReact size="100%" className="text-blue-500" /> },
    { name: "Swift", icon: <FaSwift size="100%" className="text-orange-500" /> },
    { name: "Angular", icon: <FaAngular size="100%" className="text-red-600" /> },
    { name: "C#", icon: <SiFsharp size="100%" className="text-purple-500" /> },
    { name: "Java", icon: <FaJava size="100%" className="text-orange-600" /> },
    { name: "Windows", icon: <FaWindows size="100%" className="text-blue-700" /> },
    { name: "Laravel", icon: <SiLaravel size="100%" className="text-red-500" /> },
  ];

  return (
    <section className="text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-sm md:text-md lg:text-lg py-2 px-6 rounded-3xl text-white bg-black w-fit mx-auto">
            Tech
          </h2>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-4 text-black">
            Technologies We Use To Build
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-black text-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                {tech.icon}
              </div>
              <p className="mt-3 text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
