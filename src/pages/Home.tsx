import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Typewriter text
  const fullText = "Gagandeep Singh";
  const [displayText, setDisplayText] = useState("");

  // Use useGSAP hook for better performance and cleanup
  useGSAP(() => {
    // GSAP load animation - sequential with proper stagger
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        imageRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5" // Slightly overlap for smooth flow
      );

    // Fix blur: force GPU & exact pixels
    gsap.set(imageRef.current, { force3D: true, z: 0.01, willChange: "transform" });

    // Floating animation without blur - optimized
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      force3D: true,
      
    });
  }, { scope: containerRef });

  // Typewriter effect in separate useEffect to prevent re-renders
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
    }, forward ? 180 : 120); // slower typing, faster deleting

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="-z-10 h-screen w-full flex items-center justify-evenly px-10">

      {/* LEFT TEXT */}
      <div ref={textRef} className="w-[40%]">
        <h3 className="text-2xl font-bold">Welcome to My Portfolio</h3>

        {/* Typewriter */}
        <h1 className="text-[60px] font-bold leading-tight h-[75px]">
          {displayText}
          <span className="border-r-4 border-black dark:border-white ml-1 animate-pulse"></span>
        </h1>

        <p className="mt-4 text-lg">
          Full Stack Engineer | React Native Developer | Tech Mentor.  
          I build scalable applications, simplify complex logic, and focus on
          writing clean, efficient, and maintainable code.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        ref={imageRef}
        className="
          w-[330px] h-[330px] rounded-full overflow-hidden shadow-2xl 
          flex items-center justify-center cursor-pointer 
          hover:scale-105
          will-change-transform
        "
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
