import { ArrowUpRight } from "lucide-react";
import { AgentLogo } from "../constants/agents";

export function LogoCard({ logo, onClick }: { logo: AgentLogo; onClick: () => void }) {
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
