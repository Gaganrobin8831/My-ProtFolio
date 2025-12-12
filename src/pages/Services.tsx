import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiJavascript
} from "react-icons/si";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Application",
      icons: [
        <FaReact className="text-5xl text-blue-500" />,
        <FaNodeJs className="text-5xl text-green-600" />,
        <SiExpress className="text-5xl text-gray-700" />,
        <SiMongodb className="text-5xl text-green-700" />
      ],
      description:
        "I build complete full-stack applications using React for the frontend and Node.js, Express, and MongoDB for backend APIs and database. Scalable, fast, and secure.",
    },

    {
      title: "React Native Mobile App",
      icons: [
        <SiReact className="text-5xl text-blue-400" />
      ],
      description:
        "Cross-platform Android and iOS mobile apps using React Native. Smooth UI, optimized performance, and modern mobile experiences.",
    },

    {
      title: "Static Webpage Development",
      icons: [
        <FaHtml5 className="text-5xl text-orange-600" />,
        <FaCss3Alt className="text-5xl text-blue-600" />,
        <SiTailwindcss className="text-5xl text-cyan-500" />,
        <SiJavascript className="text-5xl text-yellow-400" />
      ],
      description:
        "Beautiful and responsive static websites built with HTML, CSS, Tailwind, and JavaScript. Perfect for portfolios, landing pages, and business sites.",
    },

    {
      title: "Modern Webpage (React + GSAP + Tailwind)",
      icons: [
        <FaReact className="text-5xl text-blue-500" />,
        <SiTailwindcss className="text-5xl text-cyan-500" />
      ],
      description:
        "Highly interactive and animated modern web pages using React, GSAP animations, and Tailwind CSS for fast development and clean UI.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <h1 className="text-5xl lg:text-8xl font-extrabold font-serif my-15">
        Services
      </h1>

      <div className="w-full max-w-[1200px] flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-2xl min-h-[300px] w-[500px] p-7 rounded-xl hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-gray-900"
          >
            <h2 className="text-2xl text-white! font-bold mb-3">{service.title}</h2>

            <div className="flex gap-4 mb-4 flex-wrap">
              {service.icons.map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
