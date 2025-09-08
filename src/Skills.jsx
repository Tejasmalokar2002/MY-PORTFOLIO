// SkillsGalaxy.jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = {
  Frontend: [
    'React.js',
    'AngularJS',
    'Ionic Framework',
    'HTML',
    'CSS',
    'JavaScript',
  ],
  Backend: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Microservices',
    'Hibernate ORM',
    'Apache Kafka',
  ],
  Databases: ['MySQL', 'Oracle SQL'],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'JIRA',
    'Docker',
    'Jenkins',
    'FluentD',
    'ServiceNow',
  ],
  Cloud: ['Google Play Console'],
}

// Skill information data
const SKILL_INFO = {
  'React.js': {
    description: 'A JavaScript library for building user interfaces with component-based architecture.',
    experience: '3+ years of experience building responsive web applications',
    projects: ['E-commerce Dashboard', 'Task Management System', 'Portfolio Website']
  },
  'AngularJS': {
    description: 'A structural framework for dynamic web apps using HTML as template language.',
    experience: '2 years working on enterprise applications',
    projects: ['Internal CRM System', 'Data Visualization Platform']
  },
  'Ionic Framework': {
    description: 'Cross-platform mobile app development framework with web technologies.',
    experience: '2 years building hybrid mobile applications',
    projects: ['Fitness Tracking App', 'Event Management Mobile App']
  },
  'HTML': {
    description: 'The standard markup language for documents designed to be displayed in a web browser.',
    experience: '5+ years of semantic HTML development',
    projects: ['All web projects']
  },
  'CSS': {
    description: 'Style sheet language used for describing the presentation of a document.',
    experience: '5+ years including CSS3, Flexbox, and Grid',
    projects: ['All web projects', 'CSS Animations', 'Responsive Designs']
  },
  'JavaScript': {
    description: 'Programming language that enables interactive web pages and is an essential part of web applications.',
    experience: '5+ years of ES6+ modern JavaScript development',
    projects: ['All web applications', 'API Integrations', 'Dynamic Content']
  },
  'Java': {
    description: 'Object-oriented programming language used for building enterprise-scale applications.',
    experience: '4+ years of Java development',
    projects: ['Banking System Backend', 'Inventory Management']
  },
  'Spring Boot': {
    description: 'Java-based framework used to create microservices with minimal configuration.',
    experience: '3 years building RESTful APIs and microservices',
    projects: ['E-commerce API', 'User Authentication Service']
  },
  'Spring Security': {
    description: 'Powerful and highly customizable authentication and access-control framework.',
    experience: '2 years implementing security in Spring applications',
    projects: ['JWT Authentication', 'OAuth2 Implementation']
  },
  'Spring Data JPA': {
    description: 'Part of the larger Spring Data family that makes it easy to easily implement JPA based repositories.',
    experience: '3 years of database interaction in Spring applications',
    projects: ['Data Access Layers', 'Repository Patterns']
  },
  'Microservices': {
    description: 'Architectural style that structures an application as a collection of loosely coupled services.',
    experience: '2 years designing and implementing microservices architecture',
    projects: ['Distributed Banking System', 'Modular E-commerce Platform']
  },
  'Hibernate ORM': {
    description: 'Object-relational mapping tool for Java programming language.',
    experience: '3 years of ORM implementation',
    projects: ['Database Abstraction Layers', 'Object-Relational Mapping']
  },
  'Apache Kafka': {
    description: 'Distributed event streaming platform capable of handling trillions of events a day.',
    experience: '1 year implementing event-driven architectures',
    projects: ['Real-time Notification System', 'Event Sourcing']
  },
  'MySQL': {
    description: 'Open-source relational database management system.',
    experience: '4+ years of database design and optimization',
    projects: ['E-commerce Database', 'User Management Systems']
  },
  'Oracle SQL': {
    description: 'Proprietary multi-model database management system produced by Oracle Corporation.',
    experience: '2 years working with enterprise database systems',
    projects: ['Financial Data Management', 'Enterprise Resource Planning']
  },
  'Git': {
    description: 'Distributed version control system for tracking changes in source code during software development.',
    experience: '5+ years of version control in team environments',
    projects: ['All development projects']
  },
  'GitHub': {
    description: 'Web-based hosting service for version control using Git.',
    experience: '5+ years of collaborative development',
    projects: ['Code Repository Management', 'CI/CD Pipelines']
  },
  'JIRA': {
    description: 'Proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
    experience: '4 years of agile project management',
    projects: ['Sprint Planning', 'Issue Tracking', 'Project Management']
  },
  'Docker': {
    description: 'Set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    experience: '3 years of containerization and deployment',
    projects: ['Application Containerization', 'Development Environment Setup']
  },
  'Jenkins': {
    description: 'Open-source automation server which enables developers to reliably build, test, and deploy their software.',
    experience: '2 years of CI/CD pipeline implementation',
    projects: ['Automated Deployment Pipelines', 'Testing Automation']
  },
  'FluentD': {
    description: 'Open source data collector for unified logging layer.',
    experience: '1 year of log management and aggregation',
    projects: ['Centralized Logging System', 'Application Monitoring']
  },
  'ServiceNow': {
    description: 'American software company based in Santa Clara, California that develops a cloud computing platform.',
    experience: '2 years of IT service management',
    projects: ['ITSM Implementation', 'Workflow Automation']
  },
  'Google Play Console (Android App Deployment)': {
    description: 'Platform for publishing and managing Android applications on Google Play Store.',
    experience: '2 years of mobile app deployment and management',
    projects: ['App Publishing', 'Release Management', 'Store Optimization']
  }
};

// Color schemes for different categories
const CATEGORY_COLORS = {
  Frontend: {
    primary: 'rgba(97, 218, 251, 0.95)',
    secondary: 'rgba(0, 151, 167, 0.95)',
    gradient: 'linear-gradient(135deg, rgba(97, 218, 251, 0.95), rgba(0, 151, 167, 0.95))'
  },
  Backend: {
    primary: 'rgba(233, 30, 99, 0.95)',
    secondary: 'rgba(194, 24, 91, 0.95)',
    gradient: 'linear-gradient(135deg, rgba(233, 30, 99, 0.95), rgba(194, 24, 91, 0.95))'
  },
  Databases: {
    primary: 'rgba(255, 193, 7, 0.95)',
    secondary: 'rgba(255, 152, 0, 0.95)',
    gradient: 'linear-gradient(135deg, rgba(255, 193, 7, 0.95), rgba(255, 152, 0, 0.95))'
  },
  'Tools & Platforms': {
    primary: 'rgba(76, 175, 80, 0.95)',
    secondary: 'rgba(56, 142, 60, 0.95)',
    gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.95), rgba(56, 142, 60, 0.95))'
  },
  Cloud: {
    primary: 'rgba(156, 39, 176, 0.95)',
    secondary: 'rgba(123, 31, 162, 0.95)',
    gradient: 'linear-gradient(135deg, rgba(156, 39, 176, 0.95), rgba(123, 31, 162, 0.95))'
  }
};

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

// Mobile Cards Layout Component
const SkillsCardsLayout = ({ categories, onSkillSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {Object.entries(categories).map(([category, skills]) => {
        const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Frontend;
        
        return (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
          >
            <h3 
              className="text-lg font-semibold mb-3 pb-2 border-b border-purple-500/30"
              style={{ color: colors.primary.replace('0.95', '1') }}
            >
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <motion.button
                  key={skill}
                  onClick={() => onSkillSelect({ skill, category })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs p-2 rounded-lg text-center transition-all duration-200"
                  style={{ 
                    background: colors.gradient,
                    boxShadow: `0 4px 12px ${colors.primary.replace('0.95', '0.3')}`
                  }}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Orbital Layout Component
const OrbitalLayout = ({ containerRef, size, onSkillSelect }) => {
  const minSide = Math.min(size.w, size.h);
  const rings = Object.keys(CATEGORIES);
  const ringScales = [0.25, 0.45, 0.65, 0.82, 0.95];
  const ringSpeeds = [28, 36, 44, 52, 68];
  const angleOffsetPerRing = [0, 20, 40, 60, 80];

  return (
    <div ref={containerRef} className="relative mx-auto w-full h-[650px] sm:h-[720px] md:h-[760px]">
      {/* central star */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center"
      >
        <motion.div 
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-rose-500 shadow-2xl"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="absolute inset-0 rounded-full blur-md opacity-60 animate-pulse" />
          <div className="relative z-10 text-black font-bold text-xs">YOU</div>
        </motion.div>
        <div className="mt-1 text-xs text-slate-300">Core</div>
      </motion.div>

      {/* Orbits */}
      {rings.map((category, ringIndex) => {
        const skills = CATEGORIES[category];
        const scale = ringScales[ringIndex] ?? (0.3 + ringIndex * 0.15);
        const radius = (minSide / 2) * scale;
        const duration = ringSpeeds[ringIndex] ?? 40;
        const phase = angleOffsetPerRing[ringIndex] ?? 0;
        const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Frontend;

        return (
          <div key={category} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            {/* Enhanced ring circle with glow effect */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: radius * 2,
                height: radius * 2,
                border: `1px dashed ${colors.primary.replace('0.95', '0.3')}`,
                boxShadow: `0 0 25px ${colors.primary.replace('0.95', '0.2')}`,
                pointerEvents: 'none',
              }}
            />

            {/* Additional glow effect */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: radius * 2 + 10,
                height: radius * 2 + 10,
                boxShadow: `0 0 35px ${colors.primary.replace('0.95', '0.1')}`,
                pointerEvents: 'none',
              }}
            />

            {/* rotating wrapper */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: radius * 2, height: radius * 2, '--spin': `${duration}s` }}
            >
              <style>{`
                @keyframes spin-${ringIndex} { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes counter-${ringIndex} { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
              `}</style>

              <div className="absolute inset-0 rounded-full" style={{ animation: `spin-${ringIndex} linear infinite var(--spin)` }}>
                {skills.map((skill, i) => {
                  const angle = (i / skills.length) * 360 + phase;
                  const rad = (angle * Math.PI) / 180;
                  const nodeSize = Math.max(48, Math.min(68, minSide * 0.05));
                  const cx = radius + Math.cos(rad) * radius - nodeSize / 2;
                  const cy = radius + Math.sin(rad) * radius - nodeSize / 2;

                  return (
                    <motion.button
                      key={skill}
                      onClick={() => onSkillSelect({ skill, category })}
                      whileHover={{ scale: 1.15, z: 20 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute flex items-center justify-center rounded-full shadow-xl cursor-pointer"
                      style={{
                        left: cx,
                        top: cy,
                        width: nodeSize,
                        height: nodeSize,
                        pointerEvents: 'auto',
                      }}
                    >
                      <motion.div
                        className="w-full h-full rounded-full flex items-center justify-center text-center px-2 select-none"
                        style={{
                          background: colors.gradient,
                          boxShadow: `0 6px 20px ${colors.primary.replace('0.95', '0.4')}`,
                          color: 'white',
                          animation: `counter-${ringIndex} linear infinite var(--spin)`,
                        }}
                        whileHover={{
                          boxShadow: `0 8px 25px ${colors.primary.replace('0.95', '0.6')}`
                        }}
                      >
                        <span className="text-[11px] sm:text-xs font-medium leading-tight">{skill}</span>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced ring label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
              <div 
                style={{ transform: `translateY(-${radius + 32}px)` }} 
                className="text-xs font-medium tracking-wide select-none px-3 py-1 rounded-full backdrop-blur-sm"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {category}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ w: 900, h: 900 });
  const [selected, setSelected] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleSkillSelect = (skillInfo) => {
    setSelected(skillInfo);
  };

  return (
    <section  id="skills" className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 sm:px-8 md:px-12 py-20 overflow-visible">
      {/* Background - Matching Projects & Experience Sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Enhanced decorative star layers & nebula */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,180,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0033] to-black opacity-80" />
        
        {/* Enhanced star fields */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage:
              'radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,255,255,0.95) 0, transparent 50%),' +
              'radial-gradient(1.5px 1.5px at 70% 40%, rgba(255,255,255,0.9) 0, transparent 60%),' +
              'radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,0.85) 0, transparent 60%),' +
              'radial-gradient(2px 2px at 80% 10%, rgba(180,180,255,0.8) 0, transparent 70%),' +
              'radial-gradient(2px 2px at 20% 60%, rgba(180,255,180,0.7) 0, transparent 70%)',
            opacity: 0.7,
            mixBlendMode: 'screen',
          }} />
        </div>

        {/* Subtle animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: Math.random() * 5 + 3 + 's',
                animationDelay: Math.random() * 2 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
              My Skills Galaxy
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              {isMobile 
                ? 'Browse my skills by category - tap to learn more' 
                : 'An interactive visual map of technologies arranged as orbits — hover to preview, click to focus a skill.'
              }
            </p>
          </div>
          {!isMobile && (
            <div className="hidden sm:flex flex-col items-end text-right text-xs text-slate-400">
              <span className="font-semibold">How to use</span>
              <span>Hover nodes to highlight • Click a node to focus</span>
            </div>
          )}
        </div>

        {/* Conditional rendering based on screen size */}
        {isMobile ? (
          <SkillsCardsLayout 
            categories={CATEGORIES} 
            onSkillSelect={handleSkillSelect} 
          />
        ) : (
          <OrbitalLayout 
            containerRef={containerRef} 
            size={size} 
            onSkillSelect={handleSkillSelect} 
          />
        )}

        {/* Enhanced Focus modal with actual skill information */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-800 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-2xl border border-purple-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0"
                    style={{ 
                      background: CATEGORY_COLORS[selected.category]?.gradient || 
                                'linear-gradient(135deg, rgba(99,102,241,0.95), rgba(139,92,246,0.95))'
                    }}
                  >
                    {selected.skill[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selected.skill}</h3>
                    <p className="text-sm text-slate-300 mt-1">Category: <span className="text-purple-300">{selected.category}</span></p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-slate-300">
                  <p className="mb-3">{SKILL_INFO[selected.skill]?.description || 'No description available.'}</p>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold text-slate-200 mb-1">Experience:</h4>
                    <p>{SKILL_INFO[selected.skill]?.experience || 'Experience information not available.'}</p>
                  </div>
                  
                  {SKILL_INFO[selected.skill]?.projects && (
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">Projects:</h4>
                      <ul className="list-disc list-inside text-slate-300/90 space-y-1">
                        {SKILL_INFO[selected.skill].projects.map((project, index) => (
                          <li key={index}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setSelected(null)} 
                    className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 transition text-white font-medium"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 text-xs text-slate-400 text-center sm:text-left">
          {isMobile 
            ? 'Tap on any skill to view detailed information'
            : 'Tip: Try on desktop for the full interactive orbit experience — nodes are clickable.'
          }
        </div>
      </div>
    </section>
  );
}