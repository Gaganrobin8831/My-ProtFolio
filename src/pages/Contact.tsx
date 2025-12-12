import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
    const txtRef = useRef(null);
    const txtRef2 = useRef(null);

    const theme = useSelector((state: RootState) => state.theme.theme);
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/Gaganrobin8831",
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

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the title and subtitle
        tl.fromTo(txtRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
          .fromTo(txtRef2.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          
          // Stagger animation for social link cards
          .fromTo(
            ".social-link", // Target all elements with class .social-link
            { opacity: 0, y: 30 }, // Initial state (invisible and slightly below)
            {
                opacity: 1, // Final state (fully visible)
                y: 0, // Bring it to its normal position
                stagger: 0.1, // Delay between each element's animation
                duration: 0.5, // Duration for each element
                ease: "power2.out", // Easing function
            }
        );
    }, []); // Runs once on mount

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="px-2 lg:px-5 lg:p-5 text-4xl lg:text-8xl font-serif font font-extrabold my-9 mt-13" ref={txtRef}>
                Contact Me
            </h1>
            <p className="text-2xl text-gray-400" ref={txtRef2}>Get in Touch</p>
            <div className="lg:w-[80%] mx-auto min-h-[30%] flex flex-wrap justify-center items-center p-5 gap-6">
                {socialLinks.map((link, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-evenly shadow-2xl p-5 social-link" // Add class social-link here
                    >
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className={`social-icon text-4xl shrink-0 transition-transform duration-300 hover:-translate-y-2 ${link.className}`}
                        >
                            {link.icon}
                        </a>
                        <h2>{link.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
