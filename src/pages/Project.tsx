import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  // Separate Refs for each project
  const imgRef1 = useRef(null);
  const paraRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const paraRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    const common = {
      duration: 0.7,
      ease: "power1.out",               // FAST + smooth
      scrollTrigger: {
        start: "top 85%",
        toggleActions: "play none none none", // NO reverse (better for mobile)
      },
    };

    // Project 1 Image
    gsap.from(imgRef1.current, {
      opacity: 0,
      x: isMobile ? -40 : -100,         // smaller movement on mobile
      ...common,
      scrollTrigger: { ...common.scrollTrigger, trigger: imgRef1.current },
    });

    // Project 1 Paragraph
    gsap.from(paraRef1.current, {
      opacity: 0,
      y: isMobile ? 20 : 50,
      ...common,
      scrollTrigger: { ...common.scrollTrigger, trigger: paraRef1.current },
    });

    // Project 2 Image
    gsap.from(imgRef2.current, {
      opacity: 0,
      x: isMobile ? -40 : -100,
      ...common,
      scrollTrigger: { ...common.scrollTrigger, trigger: imgRef2.current },
    });

    // Project 2 Paragraph
    gsap.from(paraRef2.current, {
      opacity: 0,
      y: isMobile ? 20 : 50,
      ...common,
      scrollTrigger: { ...common.scrollTrigger, trigger: paraRef2.current },
    });
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-10 text-center">
      <h1 className="text-[60px] my-6 lg:my-2 font-bold leading-tight h-[75px] underline">
        Project Page
      </h1>

      <p className="text-lg mt-16 lg:my-5">
        This is the Project page where I showcase my projects.
      </p>

      {/* Project 1 */}
      <h2 className="text-4xl font-semibold my-10 py-5 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-500">
        College Webpage
      </h2>

      <div className="lg:w-[80%] mx-auto h-auto flex flex-col lg:flex-row items-center justify-evenly gap-3">
        <img
          ref={imgRef1}
          src="/live/sh.png"
          alt="College Project"
          className="lg:w-[45%] will-change-transform"
        />

        <p ref={paraRef1} className="lg:w-[45%] lg:text-left will-change-transform">
          This live project showcases a production-ready frontend built with React, featuring a
          modular architecture, custom hooks, and reusable components. I implemented dynamic
          routing, API integrations, and optimized rendering for improved performance. The
          interface includes smooth animations, responsive layouts, and an intuitive user
          experience—demonstrating my ability to build clean, scalable, and maintainable UI
          systems for real-world applications.
          <br />
          <a
            href="https://www.shahzadanandcollege.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click and see page
          </a>
        </p>
      </div>

      {/* Project 2 */}
      <h2 className="text-4xl font-semibold my-10 py-5 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-500">
        Image Gallery App
      </h2>

      <div className="lg:w-[80%] mx-auto h-auto flex flex-col lg:flex-row-reverse items-center justify-evenly gap-3">
        <img
          ref={imgRef2}
          src="/live/app.png"
          alt="Image Gallery App"
          className="lg:w-[45%] will-change-transform"
        />

        <p ref={paraRef2} className="lg:w-[45%] lg:text-left will-change-transform">
          I developed a React Native image gallery application that automatically organizes photos
          into category-specific tabs such as All, WhatsApp, Business, and Text Images. One of the
          standout features is the Text Detection Tab, which intelligently filters and displays only
          those images containing readable text. By integrating efficient file-system scanning and
          text extraction logic, the app delivers a smooth, fast, and user-friendly experience.
          <br />
          <a
            href="https://drive.google.com/file/d/1oaHTN8HgIyuvDhsB6ir7UmSoG2l1vFTz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download apk
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
