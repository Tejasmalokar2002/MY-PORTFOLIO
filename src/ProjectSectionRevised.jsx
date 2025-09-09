import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techIcons = {
  Java: "☕",
  "Spring Boot": "🌱",
  Angular: "🅰️",
  MySQL: "🐬",
  Ionic: "📱",
  WordPress: "📝",
};

const projects = [
  {
    title: "Liquor Counter",
    desc: "Liquor store management system for inventory, sales, and reporting.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "https://apps.zambientsystems.com/lc",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Liquor Store POS",
    desc: "Point-of-Sale system for billing, shift management, and stock tracking.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "#",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Liquor Counter Mobile App",
    desc: "Mobile application for liquor store management including inventory and sales tracking.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
    link: "https://play.google.com/work/apps/details?id=io.ionic.liquorCounter&hl=en_IN",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Bar Counter",
    desc: "System for managing peg-wise liquor sales, inventory, and real-time billing in bars.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "https://zambient.in/lcbar",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Stewards",
    desc: "Mobile app for restaurant waiters to take customer orders efficiently and sync with the kitchen or POS.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
    link: "#",
    color: "from-cyan-400 to-indigo-500",
  },
  {
    title: "LearnerBits",
    desc: "An educational platform delivering tech news, programming notes, and curated learning content for students and professionals.",
    tech: ["WordPress"],
    link: "https://learnerbits.com",
    color: "from-pink-500 to-rose-500",
  },
];

export default function ProjectsGallerySlider() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const total = projects.length;

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // clamp index so we don't go out of range
  const prev = () => setIndex(i => (i - 1 < 0 ? total - visibleCards : i - 1));
  const next = () => setIndex(i => (i + 1 > total - visibleCards ? 0 : i + 1));

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-cyan-400 drop-shadow-lg"
      >
        My Projects
      </motion.h2>

      <div className="relative max-w-6xl w-full flex items-center">
        {/* Left arrow - hidden on mobile if not needed */}
        {visibleCards < total && (
          <button
            onClick={prev}
            aria-label="Previous Projects"
            className="text-cyan-400 hover:text-cyan-200 transition-colors text-3xl sm:text-4xl font-bold z-10 p-2 hidden sm:block"
          >
            ‹
          </button>
        )}

        {/* Slider container */}
        <div className="overflow-hidden flex-grow mx-0 sm:mx-4">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${index * (100 / visibleCards)}%)`, 
              width: `${(total * 100) / visibleCards}%` 
            }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative p-[1px] rounded-xl bg-gradient-to-r from-cyan-400/30 to-pink-500/30 group flex-shrink-0 h-full"
                style={{ width: `${100 / total}%` }}
              >
                <div className="bg-black/70 p-4 sm:p-5 rounded-xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden h-full flex flex-col">
                  {/* HUD Scanline Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className={`text-2xl sm:text-3xl mb-3 bg-gradient-to-r ${project.color} inline-block text-transparent bg-clip-text drop-shadow-lg`}>
                    {project.title}
                  </div>
                  
                  <p className="text-slate-300 text-xs sm:text-sm mb-4 flex-grow">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        title={tech}
                        className="flex items-center gap-1 bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full text-xs font-mono tracking-wide"
                      >
                        <span aria-hidden="true">{techIcons[tech] || "🔧"}</span> {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-cyan-400 font-semibold text-xs sm:text-sm hover:underline flex items-center"
                    >
                      Visit Project <span className="ml-1">→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right arrow - hidden on mobile if not needed */}
        {visibleCards < total && (
          <button
            onClick={next}
            aria-label="Next Projects"
            className="text-cyan-400 hover:text-cyan-200 transition-colors text-3xl sm:text-4xl font-bold z-10 p-2 hidden sm:block"
          >
            ›
          </button>
        )}
      </div>

      {/* Mobile navigation dots */}
      {visibleCards < total && (
        <div className="flex justify-center mt-8 space-x-2 sm:hidden">
          {Array.from({ length: total - visibleCards + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-cyan-400' : 'bg-slate-600'}`}
              aria-label={`Go to project set ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}