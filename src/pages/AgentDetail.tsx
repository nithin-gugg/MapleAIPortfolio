import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Terminal, ArrowUpRight } from "lucide-react";
import { CLIENT_LOGOS } from "../constants/agents";

export default function AgentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const agent = CLIENT_LOGOS.find(a => a.id === Number(id));

  if (!agent) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold uppercase italic tracking-wider mb-4">Agent Not Found</h2>
        <button 
          onClick={() => navigate("/agents")}
          className="text-brand-accent font-mono text-[10px] uppercase tracking-widest"
        >
          Return to Registry
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-12 py-12 relative"
    >
      <button 
        onClick={() => navigate("/agents")}
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
