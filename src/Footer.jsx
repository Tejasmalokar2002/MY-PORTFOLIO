import React from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaReact, FaJava, FaDocker, FaGit, FaJenkins
} from "react-icons/fa";
import {
  SiAngular, SiIonic, SiHtml5, SiCss3, SiJavascript,
  SiSpringboot, SiHibernate, SiApachekafka,
  SiMysql, SiOracle, SiJira, SiFluentd,
  SiAndroid
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-50 pt-12 pb-6">
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(0,255,255,0.6)]" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-cyan-400">About Me</h4>
          <p className="text-slate-400">
            Passionate full‑stack developer building modern experiences with Java, React & cloud-native tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-pink-400">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-indigo-400">Tech Stack</h4>
          <div className="space-y-4">
            {/* Frontend */}
            <div>
              <p className="font-semibold">Frontend:</p>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-2xl text-slate-300">
                <FaReact title="React" className="hover:text-cyan-400 transition" />
                <SiAngular title="AngularJS" className="hover:text-red-400 transition" />
                <SiIonic title="Ionic" className="hover:text-blue-400 transition" />
                <SiHtml5 title="HTML5" className="hover:text-orange-500 transition" />
                <SiCss3 title="CSS3" className="hover:text-blue-500 transition" />
                <SiJavascript title="JavaScript" className="hover:text-yellow-300 transition" />
              </div>
            </div>
            {/* Backend */}
            <div>
              <p className="font-semibold">Backend:</p>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-2xl text-slate-300">
                <FaJava title="Java" className="hover:text-orange-300 transition" />
                <SiSpringboot title="Spring Boot" className="hover:text-green-400 transition" />
                <SiHibernate title="Hibernate" className="hover:text-purple-400 transition" />
                <SiApachekafka title="Apache Kafka" className="hover:text-red-600 transition" />
                <span className="text-sm">Spring Security</span>
                <span className="text-sm">Spring Data JPA</span>
                <span className="text-sm">Microservices</span>
              </div>
            </div>
            {/* Databases */}
            <div>
              <p className="font-semibold">Databases:</p>
              <div className="flex items-center gap-3 mt-1 text-2xl text-slate-300">
                <SiMysql title="MySQL" />
                <SiOracle title="Oracle SQL" className="hover:text-red-500 transition" />
              </div>
            </div>
            {/* Tools & Platforms */}
            <div>
              <p className="font-semibold">Tools & Platforms:</p>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-2xl text-slate-300">
                <FaGit title="Git" />
                <FaGithub title="GitHub" />
                <SiJira title="JIRA" />
                <FaDocker title="Docker" />
                <FaJenkins title="Jenkins" />
                <SiFluentd title="FluentD" />
                {/* SiServicenow removed */}
              </div>
            </div>
            {/* Cloud */}
            <div>
              <p className="font-semibold">Cloud / Deployment:</p>
              <div className="flex items-center gap-3 mt-1 text-2xl text-slate-300">
                <SiAndroid title="Google Play Console" />
                <span className="text-sm">Google Play Console</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-rose-400">Connect</h4>
          <div className="flex items-center gap-4 text-xl text-slate-300">
            <a href="mailto:you@example.com" className="hover:text-white transition"><FaEnvelope /></a>
            <a href="https://github.com/yourusername" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-white transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Your Name. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
}
