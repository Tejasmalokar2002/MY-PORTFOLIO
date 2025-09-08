// ExperienceTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'EIDIKO Systems Integrator',
    period: 'July 2024 - Present',
    details: [
      'Developed and maintained scalable web applications following Agile methodology.',
      'Improved system performance by integrating modern technologies into legacy systems.',
      'Ensured clean, maintainable code with optimized backend services and responsive UIs.',
    ],
    color: 'from-cyan-400 to-cyan-600',
    dotColor: 'bg-cyan-500'
  },
  {
    role: 'AIML Intern',
    company: 'IBaseTechnologies',
    period: 'Sept 2023 - Oct 2023',
    details: [
      'Gained hands-on experience with AI/ML projects.',
      'Implemented data preprocessing and basic model training pipelines.',
    ],
    color: 'from-indigo-400 to-indigo-600',
    dotColor: 'bg-indigo-500'
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Soft2Technologies',
    period: 'Oct 2022 - April 2023',
    details: [
      'Assisted in developing backend services and UI components.',
      'Learned best practices for clean coding and Agile workflows.',
    ],
    color: 'from-pink-400 to-pink-600',
    dotColor: 'bg-pink-500'
  },
];

// Generate random stars for the background
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2;
    stars.push(
      <div
        key={i}
        className="absolute rounded-full bg-white animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: Math.random() * 0.3 + 0.1,
          animationDuration: `${Math.random() * 3 + 2}s`,
        }}
      />
    );
  }
  return stars;
};

export default function Experience() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-8 md:px-12 py-20 overflow-visible">
      {/* Background - Matching Projects Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Space Background with Stars */}
      <div className="absolute inset-0 z-0">
        {generateStars(100)}
      </div>
      
      {/* Distant stars twinkling */}
      <div className="absolute inset-0 z-0 opacity-30">
        {generateStars(50)}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-14 tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
            My Experience Journey
          </span>
        </motion.h2>

        {/* Vertical Timeline Road */}
        <div className="relative flex justify-center">
          {/* Central Road Line */}
          <div className="absolute w-1 h-full bg-gradient-to-b from-cyan-400 via-indigo-400 to-pink-400 rounded-full z-2"></div>
          
          {/* Road Glow */}
          <div className="absolute w-10 h-full bg-gradient-to-b from-cyan-900/10 via-indigo-900/10 to-pink-900/10 blur-md z-1"></div>

          <div className="relative z-10 w-full">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative mb-16 w-full sm:w-[45%] ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}
                >
                  {/* Road Marker Dot */}
                  <div 
                    className={`absolute top-6 w-5 h-5 rounded-full border-2 border-white shadow-lg z-20 ${isLeft ? 'sm:-right-10 -right-8' : 'sm:-left-10 -left-8'} ${exp.dotColor}`}
                  />
                  
                  {/* Connecting Line to Road */}
                  <div className={`absolute top-8 h-1 w-6 ${isLeft ? 'sm:right-0 right-0 bg-gradient-to-l from-cyan-400/50 to-transparent' : 'sm:left-0 left-0 bg-gradient-to-r from-cyan-400/50 to-transparent'} z-1`}></div>

                  {/* Experience Card with Reference Styling */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 8, rotateX: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`relative p-[2px] rounded-2xl bg-gradient-to-r ${exp.color}/30 group w-full`}
                  >
                    <div className="bg-black/70 p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden h-full flex flex-col">
                      {/* HUD Scanline Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <h3 className="text-xl font-bold mb-2 relative z-10">{exp.role}</h3>
                      <p className="text-cyan-200 font-medium mb-1 relative z-10">{exp.company}</p>
                      <p className="text-slate-300 text-sm mb-4 relative z-10 italic">{exp.period}</p>
                      <ul className="text-slate-300 text-sm space-y-2 relative z-10">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="leading-relaxed">• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}