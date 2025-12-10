import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Gaganrobin8831",
      // Added ! to force priority
      className: theme === 'dark' ? "!text-white hover:!text-gray-400" : "!text-gray-900 hover:!text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/gagandeep-singh8831?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      className: "!text-blue-600 hover:!text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/singh_gagan9322?igsh=MWRhZzJsdzlzNmZiYw==",
      className: "!text-pink-600 hover:!text-pink-400",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/+916280738831",
      className: "!text-green-500 hover:!text-green-300",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:gagandeep.netweb@gmail.com",
      className: "!text-red-500 hover:!text-red-300",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    tl.from(
      ".social-icon",
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className={`w-full py-10 mt-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'border-t border-gray-800' : 'border-t border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        
        <h2 className={`text-2xl font-bold font-serif tracking-wider transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          Gagandeep Singh
        </h2>

        <p className={`text-sm text-center max-w-md transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Building digital experiences with code and creativity. 
          Feel free to connect!
        </p>

        <div className="flex gap-8 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              // Added !text-opacity-100 just in case opacity is affecting it
              className={`social-icon text-4xl shrink-0 transition-transform duration-300 hover:-translate-y-2 ${link.className}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className={`mt-8 text-xs w-full text-center pt-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-500 border-t border-gray-800' : 'text-gray-400 border-t border-gray-200'
        }`}>
          © {new Date().getFullYear()} Gagandeep Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;