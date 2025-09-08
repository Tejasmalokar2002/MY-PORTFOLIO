import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaJava, FaAndroid, FaReact, FaBrain, FaLeaf } from "react-icons/fa";
import LaptopImage from "./Laptop.jpg";

export default function HeroSection() {
  const floatVariants = {
    float1: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
    float2: { y: [0, -14, 0], rotate: [0, 6, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
    float3: { y: [0, -12, 0], rotate: [0, -8, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white font-sans px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${LaptopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0" />

      {/* Floating Glows - Fixed positioning */}
      <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-cyan-500/30 blur-[120px] top-[-100px] left-[-150px] animate-pulse z-0" />
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-fuchsia-500/30 blur-[100px] bottom-[-80px] right-[-120px] animate-pulse z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl p-6 sm:p-10 md:p-12 text-center"
      >
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Hi — I’m{" "}
          <motion.span
            className="bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            Tejas
          </motion.span>
        </h1>

        {/* Typewriter */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium mb-6">
          <Typewriter
            words={["Java Developer", "Software Engineer", "Android Developer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Quote */}
        <blockquote className="text-slate-100 italic border-l-4 border-cyan-400 pl-4 py-3 mb-6 rounded-md bg-white/10 shadow-lg text-sm sm:text-base">
          "An optimize mind sees an opportunity where others see an obstacle."
        </blockquote>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Full Stack Java Developer with expertise in scalable web applications using Java, Spring Boot, Angular, and REST APIs. Strong grasp of Agile, Git, CI/CD, and rapid tech adoption.
        </p>

        {/* Projects Button */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-110 text-sm sm:text-base"
          >
            🚀 See Projects
          </a>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-3xl sm:text-4xl md:text-5xl">
          {[
            { icon: <FaJava />, color: "text-red-400", variant: "float1" },
            { icon: <FaAndroid />, color: "text-green-400", variant: "float2" },
            { icon: <FaReact />, color: "text-cyan-400", variant: "float3" },
            { icon: <FaLeaf />, color: "text-emerald-400", variant: "float1" },
            { icon: <FaBrain />, color: "text-purple-400", variant: "float2" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              variants={floatVariants}
              animate={floatVariants[tech.variant]}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className={`${tech.color} relative drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]`}
            >
              {/* Glow Aura */}
              <span className="absolute inset-0 blur-xl opacity-50 animate-pulse">{tech.icon}</span>
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}