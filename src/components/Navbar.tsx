import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants/agents";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-6 px-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="/favicon.ico" alt="Maple AI" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tighter uppercase italic">Maple.AI</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-[0.2em]">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`transition-colors cursor-pointer ${
                location.pathname === link.href || (link.href === "/" && location.pathname === "/")
                  ? "text-brand-accent" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <button className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Contact Us
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
            <Link
              key={link.name}
              to={link.href}
              className="text-white/80 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-4 px-6 py-4 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Launch Console
          </button>
        </motion.div>
      )}
    </header>
  );
}
