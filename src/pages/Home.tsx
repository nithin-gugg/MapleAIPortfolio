import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CLIENT_LOGOS, TOOLS } from "../constants/agents";
import { LogoCard } from "../components/LogoCard";
import { ToolItem } from "../components/ToolItem";
import LLMNexus from "../components/forgeui/llm-nexus";

export function LLMNexusExample() {
  return (
    <LLMNexus
      cardTitle="LLM Nexus"
      cardDescription="A central brain that routes signals across models and distills their thinking into fluent responses."
    />
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = "[ Deployment Status: All Systems Operational ]";
    let index = 0;
    let isMounted = true;
    let timer: NodeJS.Timeout;

    const type = () => {
      if (!isMounted) return;
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        timer = setTimeout(type, 60); // 60ms between letters
      } else {
        timer = setTimeout(() => {
          index = 0;
          type();
        }, 10000); // 10 seconds gap
      }
    };

    type();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-8">
      <section className="col-span-12 lg:col-span-7 flex flex-col justify-center py-12">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-accent font-mono text-[10px] mb-6 tracking-[0.3em] uppercase block"
        >
          {displayedText}
          <span className="animate-pulse text-brand-accent ml-0.5">|</span>
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-7xl md:text-8xl lg:text-[110px] leading-[0.85] font-black tracking-tighter mb-10 uppercase italic"
        >
          Enterprise<br/>
          <span
            className="text-transparent opacity-70"
            style={{ WebkitTextStroke: "1px #00DC82" }}
          >
            Automation
          </span>
          <br />
          Layer
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
              onClick={() => navigate("/agents")}
              className="relative px-10 py-5 bg-brand-accent text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              View Workflows
            </button>
          </div>
          {/* <button className="px-10 py-5 bg-transparent border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
            Architecture
          </button> */}
        </motion.div>
      </section>

      <div className="col-span-12 lg:col-span-5 py-12">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4"
        >
          {CLIENT_LOGOS.slice(0, 4).map((logo) => (
            <div key={logo.id} className="hidden sm:block">
              <LogoCard logo={logo} onClick={() => navigate(`/agents/${logo.id}`)} />
            </div>
          ))}
        </motion.div>
      </div>

      <section className="col-span-12 pt-24 pb-4 border-t border-white/5" id="network">
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
              <LogoCard logo={logo} onClick={() => navigate(`/agents/${logo.id}`)} />
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:pl-16 mb-20"
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
  );
}
