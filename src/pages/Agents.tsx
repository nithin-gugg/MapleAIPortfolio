import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CLIENT_LOGOS } from "../constants/agents";
import { LogoCard } from "../components/LogoCard";

export default function Agents() {
  const navigate = useNavigate();

  return (
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
              <LogoCard logo={logo} onClick={() => navigate(`/agents/${logo.id}`)} />
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
  );
}
