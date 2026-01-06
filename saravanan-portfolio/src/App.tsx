// src/App.tsx
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Bot,
  Zap,
  Database,
  Mic,
  FileText,
  ArrowRight,
  Code2,
  Layers,
  Menu,
  X,
  LucideIcon,
} from "lucide-react";

import {
  personalInfo,
  roles,
  aboutMe,
  skills,
  technologies,
  projects,
  experience,
  navLinks,
  Skill,
  Project,
  Experience,
} from "./data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Layers,
  Zap,
  Database,
  FileText,
  Mic,
};

function App() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const text = roles[roleIndex];
    let i = 0;
    setTypedText("");
    const typing = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(
          () => setRoleIndex((prev) => (prev + 1) % roles.length),
          2000
        );
      }
    }, 100);
    return () => clearInterval(typing);
  }, [roleIndex]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm hover:bg-slate-800 transition-colors"
            >
              Resume
            </a>
            <button
              className="md:hidden text-slate-400"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-slate-400 hover:text-cyan-400 border-b border-slate-800 last:border-0"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-2xl md:text-3xl text-slate-400">
                  <span className="text-cyan-500">{"<"}</span>
                  <span className="text-white font-mono">{typedText}</span>
                  <span className="w-0.5 h-8 bg-cyan-400 animate-pulse"></span>
                  <span className="text-cyan-500">{"/>"}</span>
                </div>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                I build{" "}
                <span className="text-cyan-400">
                  AI systems that actually work
                </span>{" "}
                — {personalInfo.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
                >
                  View Projects{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-medium border border-slate-700 hover:bg-slate-800/50 transition-colors flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">{aboutMe.paragraph1}</p>
              <p>
                My journey started in{" "}
                <span className="text-cyan-400">Unity development</span>,
                building AR/VR simulations with AI integration. That foundation
                taught me how technology can create immersive, intelligent
                experiences. Today, I focus entirely on{" "}
                <span className="text-cyan-400">AI agents and automation</span>{" "}
                — building chatbots that understand context, agents that make
                decisions, and systems that work autonomously.
              </p>
              <p>{aboutMe.paragraph3}</p>
            </div>
            <div className="md:col-span-2">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-cyan-400 font-medium mb-4 text-sm uppercase tracking-wider">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(aboutMe.quickInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-500 capitalize">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-cyan-400 font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">What I Build</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <p className="text-slate-500 mb-12">
            Solutions anyone can understand
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {skills.map((skill: Skill, i: number) => {
              const Icon = iconMap[skill.icon] || Bot;
              return (
                <div
                  key={i}
                  className="group bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all"
                >
                  <Icon
                    className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-slate-500 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-center text-slate-500 text-xs uppercase tracking-wider mb-5">
              Technologies I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-cyan-400 font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <p className="text-slate-500 mb-12">Real solutions I've built</p>
          <div className="space-y-8">
            {projects.map((project: Project) => {
              const Icon = iconMap[project.iconName] || Bot;
              return (
                <div key={project.id} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                  ></div>
                  <div className="relative bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <Icon size={28} />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <p className="text-cyan-400 text-sm mb-1">
                              {project.subtitle}
                            </p>
                            <h3 className="text-2xl font-bold">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-slate-400 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {project.features.map(
                              (feature: string, i: number) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-slate-500"
                                >
                                  <span className="text-cyan-400 mt-1">→</span>
                                  <span>{feature}</span>
                                </div>
                              )
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t: string) => (
                                <span
                                  key={t}
                                  className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400 border border-slate-700"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Github size={16} /> View Code{" "}
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800"></div>
            <div className="space-y-12">
              {experience.map((exp: Experience) => (
                <div key={exp.id} className="relative pl-10 md:pl-20">
                  <div
                    className={`absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-slate-950 ${
                      exp.current
                        ? "bg-cyan-500 shadow-lg shadow-cyan-500/50"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <span
                    className={`text-sm font-medium ${
                      exp.current ? "text-cyan-400" : "text-blue-400"
                    }`}
                  >
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-slate-500 mb-4">{exp.company}</p>
                  <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-cyan-400 font-mono text-sm">
            05. What's Next?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-500 mb-12 max-w-lg mx-auto">
            Looking for an AI Engineer who builds systems that work? Let's
            discuss how I can help with your next project.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <Mail
                className="text-cyan-400 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-sm text-slate-400">Email</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <Linkedin
                className="text-cyan-400 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-sm text-slate-400">LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <Github
                className="text-cyan-400 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-sm text-slate-400">GitHub</span>
            </a>
          </div>
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 outline-none transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 outline-none transition-colors resize-none"
              />
              <button
                type="button"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                Send Message <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Building the
            future with AI.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Code2 size={14} />
            <span>Built with React + Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
