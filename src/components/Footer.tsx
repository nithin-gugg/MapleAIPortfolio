import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
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
  );
}
