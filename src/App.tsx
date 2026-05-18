import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import AgentDetail from "./pages/AgentDetail";

export default function App() {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white font-sans pt-32">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-10 grid grid-cols-12 gap-8 relative min-h-[70vh]">
        <div className="col-span-1 hidden lg:flex flex-col justify-end pb-24 sticky top-32 self-start h-[calc(100vh-12rem)]">
          <div className="rotate-[-90deg] origin-bottom-left text-[10px] uppercase font-mono tracking-[0.6em] whitespace-nowrap opacity-20 transform -translate-y-12 translate-x-4">
            {location.pathname.includes("/agents/") 
              ? "System_v4 // Operations" 
              : location.pathname === "/" 
                ? "Autonomous Processing Systems // 2025" 
                : "Agent Registry // System_v4.2"}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-11">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetail />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
