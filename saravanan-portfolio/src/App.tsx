// src/App.tsx
import { useState, useEffect, useRef } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

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
          2000,
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
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/30 text-sm font-semibold hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Resume
              </span>
            </a>
            <button
              className="md:hidden text-slate-400 hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-900/30 px-6 py-4 animate-slide-down">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group block w-full text-left py-3 text-slate-300 hover:translate-x-2 border-b border-slate-800 last:border-0 transition-all duration-300"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                  {item}
                </span>
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
        {/* Animated Background with Particles Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-gradient"></div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                  Hi, I'm{" "}
                  <span className="group relative inline-block cursor-pointer">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer transition-all duration-500 group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400">
                      {personalInfo.name}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                    <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-2xl md:text-3xl text-slate-400 animate-slide-right delay-200">
                  <span className="text-cyan-400 hover:scale-125 transition-transform duration-300">
                    {"_ _"}
                  </span>
                  <span className="text-white font-mono tracking-wide">
                    {typedText}
                  </span>
                  <span className="w-0.5 h-8 bg-cyan-400 animate-pulse"></span>
                  <span className="text-cyan-400 hover:scale-125 transition-transform duration-300">
                    {"_ _"}
                  </span>
                </div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg animate-fade-in delay-300">
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                  AI systems that actually work
                </span>{" "}
                — {personalInfo.description}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-purple-600/50 hover:shadow-purple-500/70 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Let's get started</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-2 transition-transform"
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-xl font-semibold border-2 border-slate-700 hover:border-purple-500 hover:bg-slate-900/50 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                >
                  <Linkedin
                    size={18}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
              <div className="relative group">
                {/* Animated Border Glow */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-60 blur-3xl group-hover:opacity-100 transition-all duration-700 animate-pulse-glow"></div> */}

                {/* Photo Container - FIXED */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4  transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 :border-cyan-400">
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
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-900 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center animate-pulse">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center animate-scale-pulse">
                        <Code2
                          size={64}
                          className="text-cyan-400 animate-glow"
                        />
                      </div>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm font-semibold">
                        Your Photo Here
                      </p>
                      <p className="text-slate-500 text-xs mt-2">
                        Add photo.png to /public/ folder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements with Animation */}
                <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div
                  className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400 animate-bounce">
            <span className="text-xs font-medium tracking-wider">
              Scroll to explore
            </span>
            <ChevronDown size={20} className="animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-black to-purple-950/10 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12 animate-fade-in group">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono text-lg font-bold">
              01.
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-600/50 via-cyan-600/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-slate-300 leading-relaxed animate-slide-left">
              <p className="text-lg hover:text-slate-200 transition-colors duration-300">
                {aboutMe.paragraph1}
              </p>
              <p className="hover:text-slate-200 transition-colors duration-300">
                My journey started in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  Unity development
                </span>
                , building AR/VR simulations with AI integration. That
                foundation taught me how technology can create immersive,
                intelligent experiences. Today, I focus entirely on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
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
              <div className="relative group bg-gradient-to-br from-purple-950/30 via-slate-900/50 to-cyan-950/30 rounded-2xl p-6 border border-purple-800/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Quick Info
                  </span>
                </h3>
                <div className="relative space-y-3 text-sm">
                  {Object.entries(aboutMe.quickInfo).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className="relative flex justify-between items-center group animate-fade-in hover:translate-x-2 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-slate-500 capitalize group-hover:text-purple-400 transition-colors">
                          {key}
                        </span>
                        <span className="font-medium text-slate-300 group-hover:text-cyan-300 transition-colors">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-6 bg-slate-900/30 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-4 group">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono text-lg font-bold">
              02.
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              What I Build
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-600/50 via-cyan-600/50 to-transparent"></div>
          </div>
          <p className="text-slate-400 mb-12 text-lg">
            Solutions anyone can understand
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {skills.map((skill: Skill, i: number) => {
              const Icon = iconMap[skill.icon] || Bot;
              return (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 backdrop-blur-sm overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon
                        className="text-purple-400 group-hover:text-cyan-400"
                        size={28}
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="font-bold mb-2 text-lg text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5"></div>

            <h3 className="relative text-center text-xs uppercase tracking-wider mb-6 font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies I Use
              </span>
            </h3>
            <div className="relative flex flex-wrap justify-center gap-3">
              {technologies.map((tech: string, index: number) => (
                <span
                  key={tech}
                  className="group px-5 py-2.5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:text-white cursor-default backdrop-blur-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-4 group">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono text-lg font-bold">
              03.
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-600/50 via-cyan-600/50 to-transparent"></div>
          </div>
          <p className="text-slate-400 mb-12 text-lg">
            Real solutions I've built
          </p>
          <div className="space-y-8">
            {projects.map((project: Project) => {
              const Icon = iconMap[project.iconName] || Bot;
              return (
                <div key={project.id} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] backdrop-blur-sm">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <Icon size={32} className="drop-shadow-lg" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <p className="text-sm mb-1 font-semibold">
                              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {project.subtitle}
                              </span>
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                            {project.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {project.features.map(
                              (feature: string, i: number) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors"
                                >
                                  <span className="text-purple-400 flex-shrink-0">
                                    →
                                  </span>
                                  <span className="leading-relaxed">
                                    {feature}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t: string) => (
                                <span
                                  key={t}
                                  className="px-3 py-1.5 bg-slate-800/70 rounded-full text-xs text-slate-400 border border-slate-700 hover:border-purple-500/50 hover:text-slate-300 transition-all duration-300 hover:scale-110"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center gap-2 text-sm font-semibold"
                            >
                              <Github
                                size={16}
                                className="text-purple-400 group-hover/link:rotate-12 group-hover/link:text-cyan-400 transition-all"
                              />
                              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover/link:from-cyan-400 group-hover/link:to-purple-400">
                                View Code
                              </span>
                              <ExternalLink
                                size={14}
                                className="text-cyan-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-purple-400 transition-all"
                              />
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
      <section
        id="experience"
        className="py-24 px-6 bg-slate-900/30 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12 group">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono text-lg font-bold">
              04.
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-600/50 via-cyan-600/50 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-slate-800"></div>
            <div className="space-y-12">
              {experience.map((exp: Experience) => (
                <div
                  key={exp.id}
                  className="group relative pl-10 md:pl-20 hover:translate-x-2 transition-transform duration-300"
                >
                  <div
                    className={`absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-slate-950 transition-all duration-300 ${
                      exp.current
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 animate-pulse"
                        : "bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:scale-125"
                    }`}
                  ></div>
                  <span
                    className={`text-sm font-semibold ${
                      exp.current
                        ? "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                        : "text-purple-400 group-hover:text-cyan-400 transition-colors"
                    }`}
                  >
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-1 text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-slate-400 mb-4 font-medium">
                    {exp.company}
                  </p>
                  <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl p-6 border border-slate-700 group-hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="relative text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
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
      <section id="connect" className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-mono text-sm font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              05. What's Next?
            </span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
            {/*Looking for an AI Engineer who builds systems that work? Let's
            discuss how I can help with your next project.*/}
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail
                className="relative text-purple-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all"
                size={28}
                strokeWidth={2}
              />
              <span className="relative text-sm text-slate-400 group-hover:text-slate-300 font-medium">
                Email
              </span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Linkedin
                className="relative text-purple-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all"
                size={28}
                strokeWidth={2}
              />
              <span className="relative text-sm text-slate-400 group-hover:text-slate-300 font-medium">
                LinkedIn
              </span>
            </a>
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitStatus("idle");

              const formData = new FormData(formRef.current!);
              const name = formData.get("from_name") as string;
              const email = formData.get("from_email") as string;
              const message = formData.get("message") as string;

              fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
              })
                .then((res) => {
                  setIsSubmitting(false);
                  if (res.ok) {
                    setSubmitStatus("success");
                    formRef.current?.reset();
                    setTimeout(() => setSubmitStatus("idle"), 5000);
                  } else {
                    setSubmitStatus("error");
                    setTimeout(() => setSubmitStatus("idle"), 5000);
                  }
                })
                .catch(() => {
                  setIsSubmitting(false);
                  setSubmitStatus("error");
                  setTimeout(() => setSubmitStatus("idle"), 5000);
                });
            }}
            className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5"></div>
            <div className="relative space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-3.5 bg-slate-800/80 border border-slate-700 rounded-xl focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 outline-none transition-all duration-300 text-white placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-3.5 bg-slate-800/80 border border-slate-700 rounded-xl focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 outline-none transition-all duration-300 text-white placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-3.5 bg-slate-800/80 border border-slate-700 rounded-xl focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 outline-none transition-all duration-300 resize-none text-white placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl text-green-400 text-center font-semibold animate-fade-in">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-xl text-red-400 text-center font-semibold animate-fade-in">
                  ✗ Failed to send message. Please try again or email me
                  directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && (
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {personalInfo.name}
            </span>
            . Building the future with AI.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            {/* <Code2 size={14} className="text-purple-400" /> */}
            {/* <span>
              Built with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                React + Tailwind
              </span>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
