// AboutSection.jsx
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
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-6 md:px-12 py-16 sm:py-20 overflow-hidden"
    >
      {/* Background Layer 1 - Gradient Orbs */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
          animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Background Layer 2 - Animated Mesh Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full">
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
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400/40 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 sm:w-24 h-16 sm:h-24 border border-cyan-400/20 rounded-xl rotate-45 hover:border-cyan-400/60 hover:shadow-[0_0_30px_#06b6d4]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

     {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed text-center md:text-left">
            I’m a <span className="text-cyan-400 font-semibold">Full Stack Java Developer</span> passionate about crafting
            modern, scalable applications. With expertise in Java, Spring Boot, React, Angular, and mobile apps, I build
            impactful digital experiences. My mission is to write clean, efficient code that solves real-world problems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mt-6 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center bg-white/5 backdrop-blur-lg px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/10 shadow-md w-32 sm:w-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">2+</h3>
              <p className="text-xs sm:text-sm text-slate-300">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center bg-white/5 backdrop-blur-lg px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/10 shadow-md w-32 sm:w-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400">15+</h3>
              <p className="text-xs sm:text-sm text-slate-300">Projects Delivered</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Futuristic Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 8, rotateX: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400/30 to-pink-500/30 group w-full"
            >
              <div className="bg-black/70 p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden h-full flex flex-col">
                {/* HUD Scanline Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className={`text-3xl sm:text-4xl mb-3 sm:mb-4 bg-gradient-to-r ${f.color} inline-block text-transparent bg-clip-text drop-shadow-lg`}
                >
                  {f.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm flex-grow">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
