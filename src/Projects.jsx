import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectsSection() {
  const projects = [
    { title: "E-Commerce Platform", desc: "Full-stack app with Spring Boot + React, secure payments & analytics.", tech: ["Java", "Spring Boot", "React"], link: "#", github: "#" },
    { title: "AI Chat Assistant", desc: "Built with NLP & OpenAI APIs, deployed with Docker & Kubernetes.", tech: ["Node.js", "Docker", "K8s"], link: "#", github: "#" },
    { title: "Mobile Banking App", desc: "Android app with biometric login & realtime notifications.", tech: ["Java", "Android", "Firebase"], link: "#", github: "#" },
    { title: "Portfolio Website", desc: "3D animated React + Vite portfolio with Tailwind & Framer Motion.", tech: ["React", "Tailwind", "Framer Motion"], link: "#", github: "#" },
    { title: "Crypto Dashboard", desc: "Realtime market analysis with WebSockets & charting.", tech: ["Next.js", "WebSockets", "Chart.js"], link: "#", github: "#" },
    { title: "Food Delivery App", desc: "MERN app with live order tracking & Stripe payments.", tech: ["MongoDB", "Express", "React", "Node"], link: "#", github: "#" },
    { title: "IoT Smart Home", desc: "Control lights & sensors via mobile app + Raspberry Pi.", tech: ["Python", "Flask", "IoT"], link: "#", github: "#" },
    { title: "Social Media App", desc: "Realtime chat, posts, and notifications with Firebase.", tech: ["React Native", "Firebase"], link: "#", github: "#" },
  ];

  const itemCount = projects.length;
  const itemAngle = 360 / itemCount;
  const radius = 520; // slightly reduced to keep layout tight & responsive

  const angle = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const rotate = (direction = 1) => {
    const newIndex = (index + direction + itemCount) % itemCount;
    setIndex(newIndex);

    const currentAngle = angle.get();
    const targetAngle = currentAngle - direction * itemAngle;

    animate(angle, targetAngle, {
      type: "spring",
      stiffness: 50,
      damping: 18,
    });
  };

  const rotateLeft = () => {
    rotate(-1);
    setAutoRotate(false);
  };

  const rotateRight = () => {
    rotate(1);
    setAutoRotate(false);
  };

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => rotate(1), 4000);
    return () => clearInterval(interval);
  }, [autoRotate, index]); // keep deps stable

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-8 md:px-12 py-20 overflow-visible"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-14 tracking-wide"
      >
        <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
          My Projects
        </span>
      </motion.h2>

      {/* Arrows */}
      <button
        onClick={rotateLeft}
        aria-label="Previous"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 bg-white/5 hover:bg-white/7 text-cyan-300 p-3 sm:p-4 rounded-full backdrop-blur-md transition"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={rotateRight}
        aria-label="Next"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 bg-white/5 hover:bg-white/7 text-cyan-300 p-3 sm:p-4 rounded-full backdrop-blur-md transition"
      >
        <FiChevronRight size={24} />
      </button>

      {/* 3D Carousel */}
      <div className="relative w-full h-[480px] sm:h-[560px] flex items-center justify-center perspective-[2000px] select-none">
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            rotateY: angle,
          }}
          className="relative w-[280px] sm:w-[360px] md:w-[440px] h-[360px] sm:h-[400px]"
        >
          {projects.map((p, i) => {
            const theta = itemAngle * i;
            const isActive = i === index;

            return (
             <motion.div
  key={i}
  className={`absolute w-64 sm:w-72 md:w-80 transition-all duration-500 cursor-pointer
    ${isActive ? "scale-105 sm:scale-110 z-40 opacity-100" : "scale-90 opacity-40 blur-[2px] z-10"}
  `}
  style={{
    transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
  }}
  onClick={() => {
    const currentAngle = angle.get();
    const delta = (i - index) * itemAngle;
    const target = currentAngle - delta;
    animate(angle, target, { type: "spring", stiffness: 50, damping: 18 });
    setIndex(i);
    setAutoRotate(false);
  }}
>
  {/* Gradient border wrapper */}
  <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400/30 to-pink-500/30 group h-full">
    {/* Inner glass panel */}
    <div className="bg-black/70 p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden flex flex-col h-full">
      
      {/* HUD scanline animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        {p.title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-sm sm:text-base flex-grow mb-4">
        {p.desc}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {p.tech.map((t, j) => (
          <span
            key={j}
            className="px-2 py-1 text-xs rounded-full bg-white/5 text-slate-200 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-white/10 hover:bg-cyan-500/20 transition"
        >
          <FaGithub /> Code
        </a>
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-semibold hover:from-cyan-300 hover:to-pink-300 transition"
        >
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  </div>
</motion.div>

            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
