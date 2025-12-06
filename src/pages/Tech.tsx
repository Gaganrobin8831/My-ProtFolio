import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare 
} from "react-icons/fa";

import { 
  SiReact, SiExpress, SiMongodb, SiTailwindcss, 
  SiTypescript, SiC, SiCplusplus, SiGreensock 
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const containerRef = useRef(null);

  const techList = [
    { name: "React JS", icon: <FaReact className="text-[70px] text-blue-500" /> },
    { name: "React Native", icon: <SiReact className="text-[70px] text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[70px] text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-[70px] text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[70px] text-green-700" /> },
    { name: "HTML", icon: <FaHtml5 className="text-[70px] text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[70px] text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[70px] text-cyan-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[70px] text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[70px] text-blue-600" /> },
    { name: "GSAP", icon: <SiGreensock className="text-[70px] text-green-400" /> },
    { name: "C", icon: <SiC className="text-[70px] text-gray-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-[70px] text-blue-500" /> },
  ];

useEffect(() => {
  if (!containerRef.current) return;

  const cards = containerRef.current.querySelectorAll(".tech-item");

  cards.forEach(card => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        rotationY: 90,
        transformOrigin: "left center",
      },
      {
        opacity: 1,
        rotationY: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
}, []);



  return (
    <div ref={containerRef} className="tech-container w-full px-5 flex flex-wrap items-center justify-center gap-10 py-10">
      {techList.map((item, index) => (
        <div
          key={index}
          className="tech-item h-[200px] w-[220px] bg-white/6 backdrop-blur-sm shadow-xl rounded-2xl 
                     flex flex-col items-center justify-center gap-4
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          {item.icon}
          <h2 className="text-lg font-semibold text-slate-100">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Tech;
