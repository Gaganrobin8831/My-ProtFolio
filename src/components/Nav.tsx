import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import ThemeToggle from "./ThemeToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons if needed
import { Link } from "react-router-dom";

function Nav() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for animations
  const containerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // 1️⃣ Initial Load Animation (Same as before)
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".nav-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    tl.from(
      [".nav-title", ".desktop-nav-item", ".theme-toggle", ".hamburger-btn"],
      {
        opacity: 0,
        y: -30,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.2"
    );
  }, { scope: containerRef });

  // 2️⃣ Mobile Menu Animation (Triggered by state)
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        display: "block",
      });

      // Stagger animate the list items in mobile menu
      gsap.fromTo(
        ".mobile-nav-item",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        display: "none",
      });
    }
  }, [isMenuOpen]);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <div ref={containerRef} className="fixed w-full py-6 z-50">
      <div
        className={`nav-container ${theme === "dark" ? "bg-gray-500 text-white" : "bg-gray-200 text-black"
          } w-[90%] lg:w-[80%] mx-auto flex flex-col px-6 py-4 rounded-3xl shadow-2xl transition-colors duration-300`}
      >
        {/* TOP BAR: Logo + Desktop Menu + Toggles */}
        <div className="flex justify-between items-center w-full">
          <h1 className="nav-title font-bold text-3xl font-serif">Gagan</h1>
          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex justify-between items-center gap-10">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="desktop-nav-item hover:border-b-2 border-current cursor-pointer transition-colors duration-300"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="theme-toggle">
              <ThemeToggle />
            </div>

            {/* HAMBURGER BUTTON (Visible on mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger-btn lg:hidden text-3xl focus:outline-none"
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden h-0 opacity-0 hidden mt-4"
        >
          <ul className="flex flex-col items-center gap-6 py-4 border-t border-gray-400/30">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="mobile-nav-item text-xl font-medium hover:text-gray-300 cursor-pointer"
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
                  className="w-full block" // Ensures the link covers the whole clickable area
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;