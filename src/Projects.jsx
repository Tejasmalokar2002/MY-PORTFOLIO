// import React, { useState, useEffect } from "react";
// import { motion, useMotionValue, animate } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// export default function ProjectsSection() {
//   const projects = [
//     {
//   title: "Liquor Counter",
//   desc: "Liquor store management system for inventory, sales, and reporting.",
//   tech: ["Java", "Spring Boot", "Angular", "MySQL"],
//   link: "https://apps.zambientsystems.com/lc",
//   //github: "#"
// },
// {
//   title: "Liquor Store POS",
//   desc: "Point-of-Sale system for billing, shift management, and stock tracking.",
//   tech: ["Java", "Spring Boot", "Angular", "MySQL"],
//   link: "#",
//   //github: "#"
// },{
//   title: "Liquor Counter Mobile App",
//   desc: "Mobile application for liquor store management including inventory and sales tracking.",
//   tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
//   link: "https://play.google.com/work/apps/details?id=io.ionic.liquorCounter&hl=en_IN",
//   // github: "#"
// },{
//   title: "Bar Counter",
//   desc: "System for managing peg-wise liquor sales, inventory, and real-time billing in bars.",
//   tech: ["Java", "Spring Boot", "Angular", "MySQL"],
//   link: "https://zambient.in/lcbar",
//   //github: "#"
// },{
//   title: "Stewards",
//   desc: "Mobile app for restaurant waiters to take customer orders efficiently and sync with the kitchen or POS.",
//   tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
//   link: "#",
//   //github: "#"
// },{
//   title: "LearnerBits",
//   desc: "An educational platform delivering tech news, programming notes, and curated learning content for students and professionals.",
//   tech: ["WordPress"],
//   link: "https://learnerbits.com",
//   //github: "#"
// },
//   ];

//   const itemCount = projects.length;
//   const itemAngle = 360 / itemCount;
//   const radius = 520; // slightly reduced to keep layout tight & responsive

//   const angle = useMotionValue(0);
//   const [index, setIndex] = useState(0);
//   const [autoRotate, setAutoRotate] = useState(true);

//   const rotate = (direction = 1) => {
//     const newIndex = (index + direction + itemCount) % itemCount;
//     setIndex(newIndex);

//     const currentAngle = angle.get();
//     const targetAngle = currentAngle - direction * itemAngle;

//     animate(angle, targetAngle, {
//       type: "spring",
//       stiffness: 50,
//       damping: 18,
//     });
//   };

//   const rotateLeft = () => {
//     rotate(-1);
//     setAutoRotate(false);
//   };

//   const rotateRight = () => {
//     rotate(1);
//     setAutoRotate(false);
//   };

//   useEffect(() => {
//     if (!autoRotate) return;
//     const interval = setInterval(() => rotate(1), 4000);
//     return () => clearInterval(interval);
//   }, [autoRotate, index]); // keep deps stable

//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-8 md:px-12 py-20 overflow-visible"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
//       </div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-14 tracking-wide"
//       >
//         <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
//           My Projects
//         </span>
//       </motion.h2>

//       {/* Arrows */}
//       <button
//         onClick={rotateLeft}
//         aria-label="Previous"
//         className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 bg-white/5 hover:bg-white/7 text-cyan-300 p-3 sm:p-4 rounded-full backdrop-blur-md transition"
//       >
//         <FiChevronLeft size={24} />
//       </button>
//       <button
//         onClick={rotateRight}
//         aria-label="Next"
//         className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 bg-white/5 hover:bg-white/7 text-cyan-300 p-3 sm:p-4 rounded-full backdrop-blur-md transition"
//       >
//         <FiChevronRight size={24} />
//       </button>

//       {/* 3D Carousel */}
//       <div className="relative w-full h-[480px] sm:h-[560px] flex items-center justify-center perspective-[2000px] select-none">
//         <motion.div
//           style={{
//             transformStyle: "preserve-3d",
//             rotateY: angle,
//           }}
//           className="relative w-[280px] sm:w-[360px] md:w-[440px] h-[360px] sm:h-[400px]"
//         >
//           {projects.map((p, i) => {
//             const theta = itemAngle * i;
//             const isActive = i === index;

//             return (
//              <motion.div
//   key={i}
//   className={`absolute w-64 sm:w-72 md:w-80 transition-all duration-500 cursor-pointer
//     ${isActive ? "scale-105 sm:scale-110 z-40 opacity-100" : "scale-90 opacity-40 blur-[2px] z-10"}
//   `}
//   style={{
//     transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
//   }}
//   onClick={() => {
//     const currentAngle = angle.get();
//     const delta = (i - index) * itemAngle;
//     const target = currentAngle - delta;
//     animate(angle, target, { type: "spring", stiffness: 50, damping: 18 });
//     setIndex(i);
//     setAutoRotate(false);
//   }}
// >
//   {/* Gradient border wrapper */}
//   <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400/30 to-pink-500/30 group h-full">
//     {/* Inner glass panel */}
//     <div className="bg-black/70 p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 relative overflow-hidden flex flex-col h-full">
      
//       {/* HUD scanline animation */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
//         animate={{ y: ["-100%", "100%"] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Title */}
//       <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
//         {p.title}
//       </h3>

//       {/* Description */}
//       <p className="text-slate-300 text-sm sm:text-base flex-grow mb-4">
//         {p.desc}
//       </p>

//       {/* Tech stack */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {p.tech.map((t, j) => (
//           <span
//             key={j}
//             className="px-2 py-1 text-xs rounded-full bg-white/5 text-slate-200 border border-white/10"
//           >
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* Links */}
//       <div className="flex gap-3">
//         <a
//           href={p.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-white/10 hover:bg-cyan-500/20 transition"
//         >
//           <FaGithub /> Code
//         </a>
//         <a
//           href={p.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-semibold hover:from-cyan-300 hover:to-pink-300 transition"
//         >
//           <FaExternalLinkAlt /> Live
//         </a>
//       </div>
//     </div>
//   </div>
// </motion.div>

//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Image imports
import LiquorCounterImg from "./assets/LiquorCounter.png";
import POSImg from "./assets/LC-POS.png";
import MobileAppImg from "./assets/LC-Mobile.png";
import BarCounterImg from "./assets/BarCounter.png";
import StewardsImg from "./assets/Stewards.png";
import LearnerBitsImg from "./assets/Learner.png";

// Project data
const projects = [
  {
    title: "Liquor Counter",
    desc: "Liquor store management system for inventory, sales, and reporting.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "https://apps.zambientsystems.com/lc",
    image: LiquorCounterImg,
    bullets: [
      "Modular system built for multi-state compliance (TSBCL, KSBCL, APBCL)",
      "Real-time stock updates and dynamic reporting via Chart.js",
      "Reduced manual reconciliation and improved billing accuracy"
    ],
  },
  {
    title: "Liquor Store POS",
    desc: "Point-of-Sale system for billing, shift management, and stock tracking.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "#",
    image: POSImg,
    bullets: [
      "Real-time inventory sync with barcode-based billing",
      "Optimized transactional flow for high-speed billing",
      "Improved checkout speed and reduced stock mismatches"
    ],
  },
  {
    title: "Liquor Counter Mobile App",
    desc: "Mobile app for liquor store management including inventory and sales tracking.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
    link: "https://play.google.com/work/apps/details?id=io.ionic.liquorCounter&hl=en_IN",
    image: MobileAppImg,
    bullets: [
      "Track sales, stock, and profit/loss on-the-go",
      "Integrated real-time dashboards using Chart.js",
      "Reduced manual reporting efforts by 60%"
    ],
  },
  {
    title: "Bar Counter",
    desc: "System for managing peg-wise liquor sales, inventory, and real-time billing in bars.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    link: "https://zambient.in/lcbar",
    image: BarCounterImg,
    bullets: [
      "Unit-wise billing (30ml, 60ml, 90ml) with real-time stock tracking",
      "Shift-wise operations and live dashboards for transparency",
      "Improved efficiency by 45% with reduced stock discrepancies"
    ],
  },
  {
    title: "Stewards",
    desc: "Mobile app for restaurant waiters to take customer orders efficiently and sync with the kitchen or POS.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
    link: "#",
    image: StewardsImg,
    bullets: [
      "Real-time table and order management for waitstaff",
      "Built with Ionic for seamless mobile UX",
      "Boosted service speed and minimized order errors"
    ],
  },
  {
    title: "LearnerBits",
    desc: "An educational platform delivering tech news, programming notes, and curated learning content for students and professionals.",
    tech: ["WordPress"],
    link: "https://learnerbits.com",
    image: LearnerBitsImg,
    bullets: [
      "Curated tech news, programming notes, and job updates",
      "Supports students and professionals with upskilling resources",
      "Offers custom web development services for clients"
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-16 min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background */}
     {/* Background - Matching Experience Section */}
<div className="absolute inset-0 pointer-events-none z-0">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>

{/* Starfield background */}
<div className="absolute inset-0 z-0">
  {Array.from({ length: 100 }).map((_, i) => {
    const size = Math.random() * 2;
    return (
      <div
        key={`star1-${i}`}
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
  })}
</div>

<div className="absolute inset-0 z-0 opacity-30">
  {Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 1.5;
    return (
      <div
        key={`star2-${i}`}
        className="absolute rounded-full bg-white animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: Math.random() * 0.2 + 0.05,
          animationDuration: `${Math.random() * 3 + 2}s`,
        }}
      />
    );
  })}
</div>


      {/* Moving Grid Overlay */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10 z-0
          bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),
          linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)]
          bg-[size:60px_60px]"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 z-10 text-center"
      >
        🚀 My Projects
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl z-10"
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="relative w-full max-w-[90%] h-[410px] mx-auto rounded-xl overflow-hidden shadow-xl group border border-white/10 backdrop-blur-md bg-white/5"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${p.image})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  </div>

  {/* Card Content */}
  <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full justify-between">
    <div>
      <h3 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
        📦 {p.title}
      </h3>
      <p className="text-xs sm:text-sm mt-2 text-gray-300">{p.desc}</p>

      <ul className="mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
        {p.bullets.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-teal-400 mt-[2px]">✔</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Tech Stack */}
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tech.map((t, i) => (
        <span
          key={i}
          className="text-[10px] sm:text-xs px-2 py-1 rounded-md text-white border border-white/20 bg-white/10 hover:bg-teal-500 hover:text-black transition"
        >
          {t}
        </span>
      ))}
    </div>

    {/* External Link */}
{p.link !== "#" && (
  <div className="mt-4 w-full flex justify-center">
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-black text-sm font-medium hover:bg-teal-400 transition"
    >
      Visit Project <FaExternalLinkAlt size={14} />
    </a>
  </div>
)}

  </div>
</motion.div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
