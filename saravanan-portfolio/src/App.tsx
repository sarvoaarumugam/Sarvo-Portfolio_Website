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
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
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
              className="hidden md:block px-5 py-2.5 rounded-lg bg-emerald-600/10 border border-emerald-500/30 text-sm hover:border-emerald-400 hover:bg-emerald-600/20 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              Resume
            </a>
            <button
              className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-emerald-900/30 px-6 py-4 animate-slide-down">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-slate-400 hover:text-emerald-400 hover:translate-x-2 border-b border-slate-800 last:border-0 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced with Photo */}
      <section
        id="hero"
        className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-black to-teal-500/5 animate-gradient"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-shimmer">
                    {personalInfo.name}
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-2xl md:text-3xl text-slate-400 animate-slide-right delay-200">
                  <span className="text-emerald-500">{"<"}</span>
                  <span className="text-white font-mono">{typedText}</span>
                  <span className="w-0.5 h-8 bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-500">{"/>"}</span>
                </div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg animate-fade-in delay-300">
                I build{" "}
                <span className="text-emerald-400 font-semibold">
                  AI systems that actually work
                </span>{" "}
                — {personalInfo.description}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95"
                >
                  Let's get started{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-700 hover:border-emerald-500 hover:bg-slate-900/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
              <div className="relative group">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-60 blur-3xl group-hover:opacity-100 transition-all duration-700 animate-pulse-glow"></div>

                {/* Photo Container - FIXED */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-500/50 shadow-2xl shadow-emerald-500/30 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:border-emerald-400">
                  {/* Try to load image */}
                  <img
                    src="/photo.png"
                    alt="Saravanan - AI Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image if it fails, show fallback
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback)
                        (fallback as HTMLElement).style.display = "flex";
                    }}
                  />

                  {/* Fallback Placeholder (hidden by default) */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center animate-pulse">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center animate-scale-pulse">
                        <Code2
                          size={64}
                          className="text-emerald-400 animate-glow"
                        />
                      </div>
                      <p className="text-emerald-400 text-sm font-semibold">
                        Your Photo Here
                      </p>
                      <p className="text-slate-500 text-xs mt-2">
                        Add photo.png to /public/ folder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements with Animation */}
                <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
                <div
                  className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-500 animate-bounce">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ChevronDown size={20} className="animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section - Black & Green Theme */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-black to-emerald-950/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12 animate-fade-in">
            <span className="text-emerald-400 font-mono text-sm font-bold">
              01.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-800/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-slate-300 leading-relaxed animate-slide-left">
              <p className="text-lg hover:text-slate-200 transition-colors duration-300">
                {aboutMe.paragraph1}
              </p>
              <p className="hover:text-slate-200 transition-colors duration-300">
                My journey started in{" "}
                <span className="text-emerald-400 font-semibold">
                  Unity development
                </span>
                , building AR/VR simulations with AI integration. That
                foundation taught me how technology can create immersive,
                intelligent experiences. Today, I focus entirely on{" "}
                <span className="text-emerald-400 font-semibold">
                  AI agents and automation
                </span>{" "}
                — building chatbots that understand context, agents that make
                decisions, and systems that work autonomously.
              </p>
              <p className="hover:text-slate-200 transition-colors duration-300">
                {aboutMe.paragraph3}
              </p>
            </div>
            <div className="md:col-span-2 animate-slide-right">
              <div className="bg-gradient-to-br from-emerald-950/50 to-black rounded-xl p-6 border border-emerald-800/30 hover:border-emerald-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-105">
                <h3 className="text-emerald-400 font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(aboutMe.quickInfo).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className="flex justify-between items-center group animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-slate-500 capitalize group-hover:text-emerald-400 transition-colors">
                          {key}
                        </span>
                        <span className="font-medium text-slate-300 group-hover:text-emerald-300 transition-colors">
                          {value}
                        </span>
                      </div>
                    )
                  )}
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
