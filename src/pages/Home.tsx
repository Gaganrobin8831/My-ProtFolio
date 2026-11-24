import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TbFileCv } from "react-icons/tb";

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const fullText = "Gagandeep Singh";
  const [displayText, setDisplayText] = useState("");

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        imageRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

    gsap.set(imageRef.current, { force3D: true, z: 0.01, willChange: "transform" });

    // Lighter floating animation
    gsap.to(imageRef.current, {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      force3D: true,
    });
  }, { scope: containerRef });

  useEffect(() => {
    let index = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (forward) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          forward = false;
          setTimeout(() => {}, 900);
        }
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        index--;

        if (index === 0) {
          forward = true;
        }
      }
    }, forward ? 180 : 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      // 👇 ADDED pt-24 (padding top) to push content down on mobile
      // 👇 Added lg:pt-0 so it resets on desktop if your desktop nav is different
      className="-z-10 min-h-screen w-full flex flex-col lg:flex-row items-center justify-evenly px-10 pt-24 lg:pt-0"
    >

      {/* LEFT TEXT */}
      <div ref={textRef} className="lg:w-[40%]">
        <h3 className="text-2xl font-bold mt-6 lg:mt-0">Welcome to My Portfolio</h3>

        <h1 className="text-[60px] font-bold leading-tight mt-5 mb-19 lg:mt-0 lg:mb-0 h-[75px]">
          {displayText}
          <span className="border-r-4 border-black dark:border-white ml-1 animate-pulse"></span>
        </h1>

        <p className="mt-4 text-lg">
          Full Stack Engineer | React Native Developer | Tech Mentor.  
          I build scalable applications, simplify complex logic, and focus on
          writing clean, efficient, and maintainable code.
        </p>
          
        

      {/* RIGHT IMAGE */}
      <div
        ref={imageRef}
        className="
          w-[330px] h-[330px] rounded-full overflow-hidden shadow-2xl 
          flex items-center justify-center cursor-pointer 
          hover:scale-105
          will-change-transform
          mt-10 lg:mt-0 
        "
        // 👆 Added mt-10 lg:mt-0 to the image wrapper for better spacing on mobile between text and image
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <img
          src="/images/profile1.png"
          alt="Profile"
          className="
            w-full h-full rounded-full 
            object-cover 
            hover:scale-110 
            will-change-transform
            select-none
          "
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;