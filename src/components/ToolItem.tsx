import { TOOLS } from "../constants/agents";

export function ToolItem({ tool }: { tool: typeof TOOLS[0] }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg p-3">
        <img 
          src={tool.logoUrl} 
          alt={tool.name} 
          className="w-full h-full object-contain transition-all duration-300"
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
