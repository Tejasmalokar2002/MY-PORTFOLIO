import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import MessageButton from "./MessageButton";

export default function Header() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" }
  ];

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <header className="relative sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 shadow-xl backdrop-blur-sm overflow-hidden">
        <Stars count={30} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer select-none"
           onClick={() => scrollToSection("home")}>
            <div className="bg-white text-indigo-800 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-lg animate-pulse">
              P1
            </div>
            <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wider">
              PageOne
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <NavButton 
                key={item.id} 
                text={item.name} 
                onClick={() => scrollToSection(item.id)}
              />
            ))}
          </nav>

          {/* Action Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4">
            <ResumeButton />
            {/* <SocialIcon href="https://github.com/yourusername" icon={<FaGithub />} />
            <SocialIcon href="https://linkedin.com/in/yourusername" icon={<FaLinkedin />} /> */}
            <MessageButton/>
          </div>

          {/* Mobile Action Buttons - Visible on mobile */}
          <div className="flex lg:hidden items-center space-x-3 sm:space-x-4">
            <MessageButton className="text-sm" />
            <button
              aria-label="Toggle menu"
              className="relative w-10 h-10 flex items-center justify-center text-white text-xl sm:text-2xl focus:outline-none group"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {/* Animated burger icon */}
              <div className="relative w-6 h-6 transform transition-all duration-300">
                <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 transform ${
                  mobileMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 rotate-45' 
                    : 'top-1 translate-y-0 rotate-0'
                } group-hover:bg-indigo-300`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-0' 
                    : 'opacity-100 top-1/2 -translate-y-1/2'
                } group-hover:bg-indigo-300`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 transform ${
                  mobileMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                    : 'top-5 -translate-y-0 rotate-0'
                } group-hover:bg-indigo-300`}></span>
              </div>
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute inset-0 rounded-full bg-indigo-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Decorative Line Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-glow" />
      </header>

      {/* Mobile Menu - Moved outside the header to fix overflow issue */}
      <MobileMenu open={mobileMenuOpen} menuItems={menuItems} onClose={() => setMobileMenuOpen(false)}>
        <ResumeButton className="w-full text-center mb-4" />
        {/* <div className="flex justify-center space-x-6 mb-4">
          <SocialIcon href="https://github.com/yourusername" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com/in/yourusername" icon={<FaLinkedin />} />
        </div> */}
      </MobileMenu>
    </>
  );
}

// ----------- Components -----------

function NavButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="relative text-white text-base xl:text-lg font-medium tracking-wide group transition duration-300"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute inset-0 rounded-md bg-indigo-700 opacity-0 group-hover:opacity-20 scale-95 group-hover:scale-100 transition-all duration-300"></span>
    </button>
  );
}


function ResumeButton({ className = "" }) {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 font-semibold text-white transition duration-300 ease-out border border-indigo-500 rounded-lg shadow-md group hover:shadow-indigo-500 hover:scale-105 text-sm sm:text-base ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-500 ease-in-out transform group-hover:scale-110 opacity-80 rounded-lg"></span>
      <span className="relative z-10">Resume</span>
    </a>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-indigo-300 text-xl transition-transform transform hover:scale-125"
    >
      {icon}
    </a>
  );
}

// Mobile menu with smooth slide-in/out
// Mobile menu with smooth slide-in/out
function MobileMenu({ open, menuItems, onClose, children }) {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose(); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sliding menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-indigo-900 to-purple-900 shadow-2xl transform transition-transform duration-500 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-8`}
      >
        {/* Close button inside mobile menu */}
        <button
          aria-label="Close menu"
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white text-2xl focus:outline-none group"
          onClick={onClose}
        >
          <div className="relative w-8 h-8">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 group-hover:bg-indigo-300 transition-colors"></span>
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 group-hover:bg-indigo-300 transition-colors"></span>
          </div>
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
        </button>

        {/* Menu items with enhanced styling */}
        <div className="mt-16 space-y-6">
          {menuItems.map((item, index) => (
            <button
              key={item.id} // Use item.id instead of item for the key
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left group relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 text-white text-2xl font-bold tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                {item.name} {/* Render item.name instead of item */}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-indigo-700/50">
          {children}
        </div>
      </nav>
    </>
  );
}

// ----------- Highly Interactive Falling Stars Component --------------
function Stars({ count }) {
  const [clickedStars, setClickedStars] = useState(new Set());
  const [hoveredStar, setHoveredStar] = useState(null);
  const [explodingStar, setExplodingStar] = useState(null);

  const stars = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 5 + Math.random() * 7;
      const size = 2 + Math.random() * 3;
      const opacity = 0.7 + Math.random() * 0.3;
      const twinkleDelay = Math.random() * 5;
      const colorVariant = Math.floor(Math.random() * 3); // 0, 1, or 2 for different colors
      return { left, delay, duration, size, opacity, twinkleDelay, colorVariant, id: i };
    });
  }, [count]);

  const handleStarClick = (id, e) => {
    e.stopPropagation();
    
    // Add to clicked stars
    const newClickedStars = new Set(clickedStars);
    newClickedStars.add(id);
    setClickedStars(newClickedStars);
    
    // Set exploding star
    setExplodingStar(id);
    
    // Create a burst effect
    createBurstEffect(e.clientX, e.clientY);
    
    // Reset explosion after animation completes
    setTimeout(() => {
      setExplodingStar(null);
    }, 1000);
  };

  const createBurstEffect = (x, y) => {
    // This creates a visual burst effect at the click position
    const burst = document.createElement('div');
    burst.style.position = 'fixed';
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;
    burst.style.width = '0';
    burst.style.height = '0';
    burst.style.borderRadius = '50%';
    burst.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(173,216,230,0.4) 40%, transparent 70%)';
    burst.style.transform = 'translate(-50%, -50%)';
    burst.style.zIndex = '100';
    burst.style.pointerEvents = 'none';
    burst.style.transition = 'all 0.8s ease-out';
    
    document.body.appendChild(burst);
    
    // Animate the burst
    setTimeout(() => {
      burst.style.width = '150px';
      burst.style.height = '150px';
      burst.style.opacity = '0';
    }, 10);
    
    // Remove after animation
    setTimeout(() => {
      if (burst.parentNode) {
        burst.parentNode.removeChild(burst);
      }
    }, 800);
  };

  const getStarColor = (colorVariant, isClicked, isHovered) => {
    if (isHovered) return "#FFD700"; // Gold on hover
    
    const colors = [
      "#FFFFFF", // White
      "#BDE4FF", // Light blue
      "#FFB7C5"  // Light pink
    ];
    
    return isClicked ? "#FFA500" : colors[colorVariant]; // Orange when clicked
  };

  const getStarGlow = (colorVariant, isClicked, isHovered) => {
    if (isHovered) {
      return "0 0 15px 5px rgba(255, 215, 0, 0.9), 0 0 30px 10px rgba(255, 215, 0, 0.7)";
    }
    
    if (isClicked) {
      return "0 0 20px 8px rgba(255, 165, 0, 0.9), 0 0 40px 15px rgba(255, 140, 0, 0.6)";
    }
    
    const glows = [
      "0 0 8px 3px rgba(255, 255, 255, 0.8), 0 0 15px 5px rgba(173, 216, 230, 0.6)",
      "0 0 8px 3px rgba(189, 228, 255, 0.8), 0 0 15px 5px rgba(135, 206, 250, 0.6)",
      "0 0 8px 3px rgba(255, 183, 197, 0.8), 0 0 15px 5px rgba(255, 182, 193, 0.6)"
    ];
    
    return glows[colorVariant];
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map(({ left, delay, duration, size, opacity, twinkleDelay, colorVariant, id }) => {
        const isClicked = clickedStars.has(id);
        const isHovered = hoveredStar === id;
        const isExploding = explodingStar === id;
        
        return (
          <span
            key={id}
            onMouseEnter={() => setHoveredStar(id)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={(e) => handleStarClick(id, e)}
            style={{
              left: `${left}%`,
              width: `${isExploding ? size * 3 : size}px`,
              height: `${isExploding ? size * 3 : size}px`,
              animationDelay: `${delay}s, ${twinkleDelay}s`,
              animationDuration: `${isClicked ? duration * 1.5 : duration}s, 2s`,
              animationPlayState: isClicked ? 'paused' : 'running',
              position: "absolute",
              top: "-10px",
              pointerEvents: "auto",
              transformOrigin: "center",
              transition: "all 0.3s ease",
              opacity: isHovered ? 1 : (isClicked ? 0.9 : opacity),
              transform: isHovered ? "scale(2.5)" : (isClicked ? "scale(1.8)" : "scale(1)"),
              boxShadow: getStarGlow(colorVariant, isClicked, isHovered),
              backgroundColor: getStarColor(colorVariant, isClicked, isHovered),
              borderRadius: "50%",
              zIndex: 10,
              cursor: "pointer",
            }}
            className={`animate-fallStar animate-twinkle ${isExploding ? 'animate-ping' : ''}`}
            title="Click me!"
          />
        );
      })}

      <style>{`
        @keyframes fallStar {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-fallStar {
          animation-name: fallStar;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        .animate-twinkle {
          animation-name: fallStar, twinkle;
          animation-iteration-count: infinite, infinite;
        }
      `}</style>
    </div>
  );
}