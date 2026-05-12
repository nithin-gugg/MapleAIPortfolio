import { motion } from "motion/react";
import { Star, ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Solutions", href: "#" },
  { name: "Agents", href: "#" },
  { name: "Network", href: "#" },
  { name: "Contact", href: "#" },
];

interface AgentLogo {
  id: number;
  name: string;
  type: string;
  status: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  features: string[];
  tech: string[];
  metrics: {
    latency: string;
    accuracy: string;
  };
}

const CLIENT_LOGOS: AgentLogo[] = [
  { 
    id: 1, 
    name: "ATS Resume Score Checker", 
    type: "ATS_MODULE", 
    status: "READY",
    description: "AI-powered resume analysis designed to evaluate candidates against job descriptions.",
    longDescription: "An AI-powered resume analysis tool designed to evaluate resumes against specific job descriptions. The system extracts resume content using NLP and machine learning models, compares it with the job requirements, and generates an ATS compatibility score for candidate shortlisting.\n\nUnlike most market tools with usage limitations, this solution supports bulk processing of up to 50 resumes simultaneously with unlimited usage capability. The platform helps recruiters speed up screening while improving candidate-job matching accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    features: [
      "AI-based resume parsing and keyword extraction",
      "Job description matching and ATS scoring",
      "Bulk resume processing (up to 50 resumes at once)",
      "Candidate shortlisting support",
      "Unlimited resume evaluations",
      "Streamlit-based rapid deployment interface"
    ],
    tech: ["Python", "Machine Learning Models", "NLP", "Streamlit", "Resume Parsing Libraries"],
    metrics: { latency: "15ms", accuracy: "99.2%" }
  },
  { 
    id: 2, 
    name: "Interview Scheduling Automation", 
    type: "WORKFLOW_X", 
    status: "READY",
    description: "Automated coordination workflow to streamline the hiring process.",
    longDescription: "An automated interview coordination workflow built to streamline the hiring process. The system manages interview scheduling using candidate details, interviewer information, interview status tracking, and calendar integrations.\n\nThe workflow automates interview invitations, reminder emails, status updates, rejection handling, and calendar meeting creation, reducing manual coordination efforts for HR teams.",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Automated interview scheduling",
      "Calendar meeting creation",
      "Candidate and interviewer coordination",
      "Status tracking and updates",
      "Automated email notifications",
      "Rejection and follow-up handling"
    ],
    tech: ["Make.com", "Email Automation", "Calendar Integrations", "Workflow Automation Tools"],
    metrics: { latency: "08ms", accuracy: "100%" }
  },
  { 
    id: 3, 
    name: "SEO Analyzer Workflow", 
    type: "SEO_SYNC", 
    status: "READY",
    description: "AI-assisted audit of webpage metadata and content recommendations.",
    longDescription: "An AI-assisted SEO analysis workflow designed to audit webpage metadata and generate optimized content recommendations. The workflow scrapes webpage HTML content, extracts metadata, analyzes keywords, and provides SEO improvement suggestions.\n\nUsing AI agents, the system rewrites meta descriptions, alt text, and content ideas based on market keyword analysis, helping improve search engine visibility and content structure.",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-3171624c995c?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Webpage metadata extraction",
      "HTML and doctype analysis",
      "SEO keyword analysis",
      "AI-generated meta descriptions",
      "Alt text optimization",
      "Content recommendation generation"
    ],
    tech: ["Make.com", "HTTP API Requests", "Web Scraping", "Anthropic Claude AI"],
    metrics: { latency: "22ms", accuracy: "99.5%" }
  },
  { 
    id: 4, 
    name: "AI Blog Generator Workflow", 
    type: "CONTENT_GEN", 
    status: "READY",
    description: "Automated content generation for creating SEO-optimized blogs at scale.",
    longDescription: "An automated content generation workflow designed for creating SEO-optimized blogs at scale. The workflow integrates with Google Sheets for content tracking and Google Drive for automated document storage and management.\n\nAI agents generate structured blog content, optimize it for SEO, create PDF versions, and automatically upload the generated files into Google Drive while maintaining tracking records.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
    features: [
      "AI-generated SEO blogs",
      "Automated blog tracking",
      "Google Sheets integration",
      "Google Drive document storage",
      "PDF generation",
      "Content workflow automation"
    ],
    tech: ["Make.com", "Anthropic Claude AI", "Google Sheets API", "Google Drive API"],
    metrics: { latency: "45ms", accuracy: "98.8%" }
  },
  { 
    id: 5, 
    name: "Lead Qualification & Reply Automation", 
    type: "LEAD_SYNC", 
    status: "READY",
    description: "Intelligent lead management designed to qualify and respond to leads.",
    longDescription: "An intelligent lead management workflow designed to analyze website form submissions and automate lead qualification. The system evaluates user inputs against company knowledge documents using a RAG-based approach to determine qualified and non-qualified leads.\n\nBased on the analysis, personalized responses are automatically generated and sent to users. The workflow also stores lead data in Google Sheets for CRM tracking and notifies internal teams about new submissions.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Automated lead qualification",
      "AI-based response generation",
      "RAG-powered document understanding",
      "CRM data storage",
      "Team notification automation",
      "Personalized customer replies"
    ],
    tech: ["Make.com", "RAG", "Anthropic Claude AI", "Google Sheets", "Email Automation"],
    metrics: { latency: "12ms", accuracy: "99.7%" }
  },
  { 
    id: 6, 
    name: "Maple HRMS Framework", 
    type: "HRMS_CORE", 
    status: "READY",
    description: "AI-enabled framework to simplify recruitment and interview management.",
    longDescription: "An AI-enabled HRMS framework designed to simplify recruitment and interview management workflows for non-technical users. The platform combines ATS resume analysis, interview scheduling automation, and HR workflow management into a single structured system.\n\nThe framework focuses on usability with custom-coded modules and simplified interfaces, making AI-powered hiring tools more accessible for HR teams.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1306d64eb0d4?auto=format&fit=crop&q=80&w=1200",
    features: [
      "AI-powered resume scoring",
      "Interview scheduling management",
      "HR workflow automation",
      "User-friendly interface for non-technical teams",
      "Integrated hiring pipeline",
      "Centralized recruitment management"
    ],
    tech: ["Custom Code Framework", "AI Resume Analysis", "HRMS Architecture", "Frontend & Backend Integrations"],
    metrics: { latency: "10ms", accuracy: "99.9%" }
  },
];

function Navbar({ onNavigate, currentPage }: { onNavigate: (page: "home" | "agents") => void, currentPage: "home" | "agents" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-6 px-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">Maple.AI</span>
        </button>

        <nav className="hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-[0.2em]">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => link.name === "Agents" ? onNavigate("agents") : null}
              className={`transition-colors cursor-pointer ${
                (link.name === "Agents" && currentPage === "agents") || (link.name === "Solutions" && currentPage === "home")
                  ? "text-brand-accent" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <button className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Launch Console
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-xl p-8 flex flex-col gap-6 border-b border-white/5 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-4 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Launch Console
          </button>
        </motion.div>
      )}
    </header>
  );
}

function TestimonialCard() {
  return (
    <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-tr-[40px] h-full flex flex-col justify-between group transition-all hover:bg-white/10">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="text-[10px] font-mono text-brand-accent px-2 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded uppercase tracking-widest">
            #AGENT_METRICS
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
        </div>
        
        <div className="flex gap-1 mb-6 text-brand-accent">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" stroke="none" className="group-hover:opacity-100 transition-colors" />
          ))}
        </div>

        <h3 className="text-xl font-bold uppercase italic tracking-wider mb-4">Client feedback</h3>
        <p className="text-white/80 leading-relaxed text-xs mb-8">
          Deploying custom-trained entities into our operational environments has resulted in 99.8% precision. Voltra's design makes a clear difference in high-stakes scenarios.
        </p>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden grayscale border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" 
            alt="Ellie Kent" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-tight">Ellie Kent</h4>
          <p className="text-[10px] font-mono text-brand-accent uppercase">CEO, Hectic Systems</p>
        </div>
      </div>
    </div>
  );
}

function LogoCard({ logo, onClick }: { logo: AgentLogo; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-tr-[40px] h-full flex flex-col justify-between group hover:translate-x-[-5px] hover:bg-white/10 transition-all cursor-pointer min-h-[240px]"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="text-[9px] font-mono text-brand-accent px-2 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
          #{logo.type}
        </div>
        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${logo.status === 'READY' ? 'bg-green-500' : 'bg-indigo-500'}`}></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center py-6">
        <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white opacity-40 group-hover:opacity-100 transition-all uppercase mb-1 line-clamp-2">
          {logo.name}
        </span>
        <p className="text-[8px] text-brand-accent uppercase tracking-[0.3em] font-mono opacity-0 group-hover:opacity-100 transition-all duration-500">System Information Available</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <div className="text-[8px] font-mono text-brand-accent uppercase tracking-widest">Efficiency</div>
          <div className="text-[10px] font-mono text-white">{logo.metrics.latency} / {logo.metrics.accuracy}</div>
        </div>
        <ArrowUpRight size={14} className="text-brand-accent group-hover:text-white transition-colors" />
      </div>
    </div>
  );
}

function AgentDetail({ agent, onBack }: { agent: AgentLogo; onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-12 py-12 relative"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[10px] uppercase font-mono tracking-widest mb-12"
      >
        <span className="text-brand-accent">[</span> Back to Registry <span className="text-brand-accent">]</span>
      </button>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="relative aspect-video rounded-tr-[80px] overflow-hidden border border-white/10 mb-12">
            <img 
              src={agent.imageUrl} 
              alt={agent.name} 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-bg to-transparent"></div>
            <div className="absolute top-8 left-8">
              <div className="text-[10px] font-mono text-brand-accent px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-md rounded uppercase tracking-widest">
                #{agent.type}
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-8">
            {agent.name}<br/>
            <span className="text-stroke opacity-30 text-transparent">System</span>
          </h2>

          <div className="max-w-2xl">
            <p className="text-white/90 leading-relaxed text-lg mb-12 font-light">
              {agent.longDescription}
            </p>
            
            <div className="mb-12">
              <h4 className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.4em] mb-6">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.4em] mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {agent.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/80 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 py-12 border-y border-white/5">
              <div>
                <h4 className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-4">Functional Domain</h4>
                <p className="text-white">{agent.description}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-4">Security Protocol</h4>
                <p className="text-white">AES-256 Quantum Resistant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 h-full">
          <div className="sticky top-32 p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-tr-[40px]">
            <div className="flex items-center gap-2 mb-8">
              <Terminal size={16} className="text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">Technical Specs</span>
            </div>

            <div className="space-y-8 mb-12">
              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">Processing Latency</div>
                <div className="text-3xl font-mono font-bold text-white">{agent.metrics.latency}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">Inference Accuracy</div>
                <div className="text-3xl font-mono font-bold text-white">{agent.metrics.accuracy}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">Status</div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${agent.status === 'READY' ? 'bg-green-500' : 'bg-brand-accent'}`}></div>
                  <span className="text-xs uppercase font-bold tracking-widest text-white">{agent.status}</span>
                </div>
              </div>
            </div>

            <div className="group relative w-full">
              <div className="absolute inset-0 bg-brand-accent blur-xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
              <button className="relative w-full py-5 bg-brand-accent text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Execute Live Demo
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-4 text-[10px] font-mono text-brand-accent uppercase">
              <span>Token Cost: 0.002</span>
              <span>•</span>
              <span>v4.2.1-stable</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const TOOLS = [
  { 
    name: "Framer", 
    role: "Website Builder", 
    logoUrl: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" 
  },
  { 
    name: "Figma", 
    role: "Design Tool", 
    logoUrl: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" 
  },
  { 
    name: "Lemon Squeezy", 
    role: "Payments Provider", 
    logoUrl: "https://www.vectorlogo.zone/logos/lemonsqueezy/lemonsqueezy-icon.svg" 
  },
  { 
    name: "ChatGPT", 
    role: "AI Assistant", 
    logoUrl: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" 
  },
  { 
    name: "Notion", 
    role: "Productivity Tool", 
    logoUrl: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" 
  },
  { 
    name: "Nextjs", 
    role: "React framework", 
    logoUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" 
  },
];

function ToolItem({ tool }: { tool: typeof TOOLS[0] }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg p-3">
        <img 
          src={tool.logoUrl} 
          alt={tool.name} 
          className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">{tool.name}</h4>
        <p className="text-white/40 text-sm font-mono uppercase tracking-widest">{tool.role}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "agents">("home");
  const [selectedAgent, setSelectedAgent] = useState<AgentLogo | null>(null);

  const handleNavigate = (page: "home" | "agents") => {
    setCurrentPage(page);
    setSelectedAgent(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAgentClick = (agent: AgentLogo) => {
    setSelectedAgent(agent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white font-sans pt-32">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="max-w-[1440px] mx-auto px-10 grid grid-cols-12 gap-8 relative min-h-[70vh]">
        <div className="col-span-1 hidden lg:flex flex-col justify-end pb-24">
          <div className="rotate-[-90deg] origin-bottom-left text-[10px] uppercase font-mono tracking-[0.6em] whitespace-nowrap opacity-20 transform -translate-y-12 translate-x-4">
            {selectedAgent ? "System_v4 // Operations" : currentPage === "home" ? "Autonomous Processing Systems // 2025" : "Agent Registry // System_v4.2"}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-11">
          {selectedAgent ? (
            <AgentDetail agent={selectedAgent} onBack={() => setSelectedAgent(null)} />
          ) : currentPage === "home" ? (
            <div className="grid grid-cols-12 gap-8">
              <section className="col-span-12 lg:col-span-7 flex flex-col justify-center py-12">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-brand-accent font-mono text-[10px] mb-6 tracking-[0.3em] uppercase block"
                >
                  [ Deployment Status: All Systems Operational ]
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="text-7xl md:text-8xl lg:text-[110px] leading-[0.85] font-black tracking-tighter mb-10 uppercase italic"
                >
                  Neural<br/>
                  <span className="text-transparent text-stroke opacity-30">Sovereign</span><br/>
                  Agents
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-md text-sm text-white/80 leading-relaxed mb-12"
                >
                  Partnering with forward-thinking companies across tech, retail, and SaaS to deploy LLM entities designed for high-stakes operational environments.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="group relative">
                    <div className="absolute inset-0 bg-brand-accent blur-xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
                    <button 
                      onClick={() => handleNavigate("agents")}
                      className="relative px-10 py-5 bg-brand-accent text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                      View Roster
                    </button>
                  </div>
                  <button className="px-10 py-5 bg-transparent border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
                    Architecture
                  </button>
                </motion.div>
              </section>

              <div className="col-span-12 lg:col-span-5 py-12">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="col-span-2">
                   
                  </div>
                  {CLIENT_LOGOS.slice(0, 4).map((logo) => (
                    <div key={logo.id} className="hidden sm:block" onClick={() => handleAgentClick(logo)}>
                      <LogoCard logo={logo} onClick={() => handleAgentClick(logo)} />
                    </div>
                  ))}
                </motion.div>
              </div>

              

              <section className="col-span-12 pt-24 pb-24 border-t border-white/5">
                <div className="flex items-center gap-4 mb-12 overflow-hidden">
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest whitespace-nowrap lg:pl-16">Integrated Network</span>
                  <div className="h-px w-full bg-white/5"></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-16"
                >
                  {CLIENT_LOGOS.map((logo) => (
                    <div key={logo.id}>
                      <LogoCard logo={logo} onClick={() => handleAgentClick(logo)} />
                    </div>
                  ))}
                </motion.div>
              </section>

              <section className="col-span-12 py-32 border-t border-white/5">
                <div className="flex items-center gap-4 mb-16 overflow-hidden">
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.4em] whitespace-nowrap lg:pl-16">Tools Used</span>
                  <div className="h-px w-full bg-white/5"></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:pl-16"
                >
                  {TOOLS.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ToolItem tool={tool} />
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </div>
          ) : (
            <div className="py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-brand-accent font-mono text-[10px] tracking-widest uppercase">[ Network Nodes ]</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-12">
                  Integrated<br/><span className="text-stroke opacity-20 text-transparent">Network</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CLIENT_LOGOS.map((logo) => (
                    <div key={logo.id}>
                      <LogoCard logo={logo} onClick={() => handleAgentClick(logo)} />
                    </div>
                  ))}
                  {/* Decorative filler nodes */}
                  {[9, 10, 11].map(i => (
                    <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-tr-[40px] flex items-center justify-center opacity-30 min-h-[240px]">
                      <div className="text-[10px] font-mono uppercase tracking-[0.4em] rotate-45 text-white/20 italic">Node_{i}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>


      <footer className="bg-brand-bg border-t border-white/10 px-10 pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-accent mb-2 font-mono">Active Nodes</div>
              <div className="text-3xl font-mono font-bold tracking-tighter">1,204</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-accent mb-2 font-mono">TPS</div>
              <div className="text-3xl font-mono font-bold tracking-tighter">482.5K</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-accent mb-2 font-mono">Uptime</div>
              <div className="text-3xl font-mono font-bold tracking-tighter">99.99%</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent hover:text-white transition-colors cursor-pointer">Documentation</span>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-brand-accent transition-all cursor-pointer">
              <ArrowUpRight size={24} className="text-white group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-[8px] font-mono uppercase tracking-[0.4em] text-white/40">
          <p>© 2025 Maple AI SYSTEMS // ALL RIGHTS RESERVED</p>
          <div className="flex gap-8 mt-4 sm:mt-0">
            <span className="text-brand-accent">SECURE_SHELL: ENABLED</span>
            <span className="text-brand-accent">ENCRYPTION: AES-256</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
