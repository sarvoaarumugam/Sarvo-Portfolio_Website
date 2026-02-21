// src/data/portfolioData.ts

export interface PersonalInfo {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  resumeLink: string;
  description: string;
}

export interface AboutMe {
  paragraph1: string;
  paragraph3: string;
  quickInfo: {
    experience: string;
    location: string;
    focus: string;
    background: string;
  };
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  gradient: string;
  iconName: string;
  github: string;
}

export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  color: string;
  current: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Saravanan",
  email: "sarvoaarumugam@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/saravanan-aarumugam-ai/",
  resumeLink: "#",
  description:
    "intelligent chatbots, autonomous agents, and automation tools that solve real business problems.",
};

export const roles: string[] = [
  "AI Engineer",
  "Agent Builder",
  "Automation Expert",
];

export const aboutMe: AboutMe = {
  paragraph1:
    "I'm an AI Engineer with 2 years of experience building production-ready AI systems.",
  paragraph3:
    "I believe the best AI isn't about complexity — it's about solving real problems elegantly.",
  quickInfo: {
    experience: "2 Years",
    location: "Bangalore, India",
    focus: "AI Agents & Automation",
    background: "Unity / AR-VR",
  },
};

export const skills: Skill[] = [
  {
    title: "AI Chatbots",
    description: "Conversational AI that understands context",
    icon: "Bot",
  },
  {
    title: "Multi-Agent Systems",
    description: "Orchestrated agents working together",
    icon: "Layers",
  },
  {
    title: "Automation Tools",
    description: "Systems that work without supervision",
    icon: "Zap",
  },
  {
    title: "RAG Systems",
    description: "AI that learns from your documents",
    icon: "Database",
  },
];

export const technologies: string[] = [
  "Python",
  "FastAPI",
  "LangChain",
  "Strands Agent",
  "OpenAI GPT",
  "Docker",
  "MongoDB",
  "AWS",
  "ChromaDB",
  "WebSocket",
  "React",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sarvo AI Agent",
    subtitle: "Multi-Agent Chatbot System",
    description:
      "An intelligent chatbot powered by a Master Agent that orchestrates multiple specialized sub-agents. Ask anything - it automatically routes your query to the right agent.",
    features: [
      "Master Agent routes queries intelligently",
      "Image Generation Agent (create images from text)",
      "Image Editor Agent (modify existing images)",
      "Web Search Agent (find real-time information)",
      "Text Agent (handle conversations & coding help)",
    ],
    tech: ["Python", "FastAPI", "Strands", "LangChain", "OpenAI GPT", "DALL-E"],
    gradient: "from-cyan-500 to-blue-600",
    iconName: "Bot",
    github: "https://github.com/sarvoaarumugam/Sarvo-AI_Agent_Chatbot",
  },
  {
    id: 2,
    title: "RAG Document Bot",
    subtitle: "Company Knowledge Assistant",
    description:
      "Upload your company documents and ask questions in natural language. The bot searches through your files and gives accurate, sourced answers.",
    features: [
      "Upload PDFs to knowledge base",
      "Vector database for smart search",
      "Retrieval Augmented Generation (RAG)",
      "Cites sources in responses",
      "Persistent storage with ChromaDB",
    ],
    tech: ["Python", "FastAPI", "ChromaDB", "LangChain", "OpenAI", "PyPDF2"],
    gradient: "from-teal-500 to-emerald-600",
    iconName: "FileText",
    github: "https://github.com/sarvoaarumugam/Sarvo-Rag_Chatbot",
  },
  {
    id: 3,
    title: "Voice AI Assistant",
    subtitle: "Real-time Voice Conversation",
    description:
      "Talk to AI naturally with your voice. Hold the mic, speak, and get instant voice responses. Real-time streaming for natural conversation flow.",
    features: [
      "Real-time voice streaming via WebSocket",
      "Press & hold to talk interface",
      "Instant AI voice responses",
      "Natural conversation flow",
      "Low latency audio processing",
    ],
    tech: ["Python", "FastAPI", "WebSocket", "OpenAI Realtime API", "Strands"],
    gradient: "from-orange-500 to-amber-600",
    iconName: "Mic",
    github: "https://github.com/sarvoaarumugam/Sarvo-Real_Time_Voice_Chat",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    period: "2023 - Present",
    role: "AI Engineer",
    company: "Falcon Reality, Bangalore",
    description:
      "Building production AI agent systems and automation tools. Developing multi-agent architectures with LangChain and Strands. Creating RAG systems, chatbots, and real-time voice AI applications.",
    color: "cyan",
    current: true,
  },
  {
    id: 2,
    period: "2022 - 2023",
    role: "Unity Developer + AI Integration",
    company: "Falcon Reality, Bangalore",
    description:
      "Developed AR/VR simulations integrated with AI capabilities. Built immersive training applications using Unity and C#. Transitioned focus from game development to AI engineering.",
    color: "blue",
    current: false,
  },
];

export const navLinks: string[] = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Connect",
];
