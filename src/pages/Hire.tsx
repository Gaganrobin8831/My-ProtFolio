import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hire = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(sectionRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",          // 🔥 triggers earlier → works even near top
        end: "bottom 60%",
        once: true,
        markers: false,            // set true to debug
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();     // 🔥 fixes issues when section loads early
    }, 100);

  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto flex flex-col items-center justify-center px-10 text-center my-8 will-change-transform"
    >
      <h1 className="text-[60px] font-bold leading-tight my-14 lg:my-2 h-[75px] underline">
        Why Hire Me
      </h1>

      <div className="text-left max-w-5xl">
        <p className="text-lg my-5">
          Why the "Teacher-Developer" Mix Matters? Because I have spent 1.5 years
          explaining how code works, I don't just copy-paste solutions. I
          understand the 'why' behind every function. This results in:
        </p>

        <li className="ml-2 lg:ml-8">
          Cleaner Code: I write self-documenting code that is easy for teams to maintain.
        </li>

        <li className="ml-2 lg:ml-8">
          Better Communication: I can bridge the gap between technical hurdles and business goals.
        </li>

        <li className="ml-2 lg:ml-8">
          Faster Debugging: helping students fix bugs has trained me to spot errors instantly.
        </li>
      </div>
    </div>
  );
};

export default Hire;
