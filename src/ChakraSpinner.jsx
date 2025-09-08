// src/components/ChakraSpinner.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function ChakraSpinner() {
  const [open, setOpen] = useState(false);

  const icons = [
    { icon: <FaLinkedin />, link: "https://linkedin.com", color: "text-blue-500" },
    { icon: <FaGithub />, link: "https://github.com", color: "text-gray-200" },
    { icon: <FaInstagram />, link: "https://instagram.com", color: "text-pink-500" },
    { icon: <SiFiverr />, link: "https://fiverr.com", color: "text-green-400" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 w-20 h-20">
      <div className="relative w-full h-full flex items-center justify-center">

        {/* ✨ Clickable Chakra Toggle Button (no glow, transparent) */}
        <button
          aria-label="Toggle social menu"
          onClick={() => setOpen(!open)}
          className="absolute z-20 w-10 h-10 rounded-full bg-transparent border border-white/20 hover:border-white/40 transition pointer-events-auto"
        >
          <span className="sr-only">Toggle social menu</span>
        </button>

        {/* ✨ Galaxy Rings */}
        <div className="absolute w-full h-full border-[1.5px] border-indigo-400 rounded-full animate-rotate-x galaxy-ring pointer-events-none" />
        <div className="absolute w-[85%] h-[85%] border-[1.5px] border-pink-500 rounded-full animate-rotate-y galaxy-ring pointer-events-none" />
        <div className="absolute w-[70%] h-[70%] border-[1.5px] border-blue-400 rounded-full animate-rotate-z galaxy-ring pointer-events-none" />
        <div className="absolute w-[55%] h-[55%] border-[1.5px] border-violet-500 rounded-full animate-rotate-x galaxy-ring opacity-80 pointer-events-none" />
        <div className="absolute w-[40%] h-[40%] border-[1.5px] border-fuchsia-400 rounded-full animate-rotate-y galaxy-ring opacity-60 pointer-events-none" />

        {/* ✨ Twinkling Stars */}
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star-twinkle pointer-events-none"
            style={{
              top: `${50 + 35 * Math.sin((i * 2 * Math.PI) / 12)}%`,
              left: `${50 + 35 * Math.cos((i * 2 * Math.PI) / 12)}%`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        {/* 🔗 Social Media Half Circle (animates on click) */}
        {icons.map((item, i) => {
          const angle = (Math.PI / 1) + (Math.PI / 2 * i) / (icons.length - 1); // 90° to 180°
          const radius = -90;
          const x = open ? -radius * Math.cos(angle) : 0;
          const y = open ? -radius * Math.sin(angle) : 0;

          return (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute text-2xl ${item.color} transition-all duration-500`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: open ? 1 : 0,
              }}
            >
              {item.icon}
            </a>
          );
        })}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .galaxy-ring {
          box-shadow:
            0 0 12px rgba(173, 216, 230, 0.5),
            inset 0 0 8px rgba(255, 255, 255, 0.1);
        }

        @keyframes rotate-x {
          0% { transform: rotateX(0deg) rotate(0deg); }
          100% { transform: rotateX(360deg) rotate(360deg); }
        }

        @keyframes rotate-y {
          0% { transform: rotateY(0deg) rotate(0deg); }
          100% { transform: rotateY(360deg) rotate(360deg); }
        }

        @keyframes rotate-z {
          0% { transform: rotateZ(0deg) rotate(0deg); }
          100% { transform: rotateZ(360deg) rotate(360deg); }
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.5); }
        }

        .animate-rotate-x {
          animation: rotate-x 6s linear infinite;
          transform-style: preserve-3d;
        }

        .animate-rotate-y {
          animation: rotate-y 7s linear infinite;
          transform-style: preserve-3d;
        }

        .animate-rotate-z {
          animation: rotate-z 9s linear infinite;
        }

        .animate-star-twinkle {
          animation: star-twinkle 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
