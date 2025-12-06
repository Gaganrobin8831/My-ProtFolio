import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import ThemeToggle from "./ThemeToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1️⃣ Animate the whole nav first
    tl.fromTo(
      ".nav",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // 2️⃣ After nav, animate each text item from top
    tl.from(
      [".nav-title", ".nav-item", ".theme-toggle"],
      {
        opacity: 0,
        y: -30,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15, // each text comes one-by-one
      },
      "-=0.2" // overlap slightly with nav animation
    );
  }, []);

  return (
    <div className="bg-transparent fixed w-full py-6 z-50">
      <div
        className={`nav ${
          theme === "dark" ? "bg-gray-500 " : "bg-gray-200"
        } w-[80%] mx-auto flex justify-between px-4 items-center py-4 rounded-4xl shadow-2xl`}
      >
        <h1 className="nav-title font-bold text-3xl font-serif">Gagan</h1>

        <ul className="flex justify-between items-center gap-10">
          <li className="nav-item hover:border-b-2 cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="nav-item hover:border-b-2 cursor-pointer transition-colors duration-300">
            About
          </li>
          <li className="nav-item hover:border-b-2 cursor-pointer transition-colors duration-300">
            Contact
          </li>
          <li className="nav-item hover:border-b-2 cursor-pointer transition-colors duration-300">
            Query
          </li>
        </ul>

        <div className="theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Nav;
