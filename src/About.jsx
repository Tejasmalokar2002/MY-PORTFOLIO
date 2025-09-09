import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    { 
      icon: <FaCode />,
      title: "Clean & Scalable Code",
      desc: "Writing maintainable, modular, and high-performing code with Java, Spring Boot, and modern frameworks.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaRocket />,
      title: "Agile Development",
      desc: "Adapting quickly to project needs with CI/CD pipelines, sprint-based delivery, and DevOps practices.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Thriving in agile teams, mentoring juniors, and collaborating across domains to build great products.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      desc: "Transforming complex challenges into innovative, scalable easy-to-use solutions with critical thinking.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 overflow-hidden"
    >
      {/* Background Layer 1 - Gradient Orbs */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 left-0 sm:left-5 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl"
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-0 sm:right-5 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
          animate={{ x: [0, -20, 20, 0], y: [0, 15, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Background Layer 2 - Animated Mesh Grid */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background Layer 3 - Floating Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400/40 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Background Layer 4 - Rotating Hexagons */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden sm:block">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-cyan-400/20 rounded-xl rotate-45"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 20)}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i + 4}
            className="absolute w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-cyan-400/20 rounded-xl rotate-45"
            style={{
              bottom: `${20 + (i * 15)}%`,
              right: `${10 + (i * 20)}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
            I’m a <span className="text-cyan-400 font-semibold">Full Stack Java Developer</span> passionate about crafting
            modern, scalable applications. With expertise in Java, Spring Boot, React, Angular, and mobile apps, I build
            impactful digital experiences. My mission is to write clean, efficient code that solves real-world problems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-lg px-4 sm:px-5 py-3 rounded-xl border border-white/10 shadow-md min-w-[120px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">2+</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-lg px-4 sm:px-5 py-3 rounded-xl border border-white/10 shadow-md min-w-[120px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400">15+</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Projects Delivered</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Futuristic Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full px-2 sm:px-0"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-[1px] rounded-xl bg-gradient-to-r from-cyan-400/30 to-pink-500/30 group w-full"
            >
              <div className="bg-black/70 p-4 sm:p-5 rounded-xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden h-full flex flex-col">
                {/* HUD Scanline Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className={`text-2xl sm:text-3xl mb-2 sm:mb-3 bg-gradient-to-r ${f.color} inline-block text-transparent bg-clip-text drop-shadow-lg`}
                >
                  {f.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{f.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm flex-grow">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}