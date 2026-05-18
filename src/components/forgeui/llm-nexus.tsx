import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Shuffle, Sparkles, Terminal, Activity, ArrowRight, Zap } from "lucide-react";

interface LLMNexusProps {
  cardTitle?: string;
  cardDescription?: string;
}

interface LogMessage {
  id: number;
  text: string;
  type: "info" | "success" | "warning";
}

export default function LLMNexus({
  cardTitle = "LLM Nexus",
  cardDescription = "A central brain that routes signals across models and distills their thinking into fluent responses."
}: LLMNexusProps) {
  const [isRouting, setIsRouting] = useState(false);
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [stage, setStage] = useState<"idle" | "routing" | "synthesizing" | "completed">("idle");
  const [stats, setStats] = useState({
    latency: 120,
    cost: 0.045,
    accuracy: 94.2
  });

  const models = [
    { id: "gemini", name: "Gemini 3 Pro", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5", glow: "shadow-emerald-500/20" },
    { id: "claude", name: "Claude 3.5 Sonnet", color: "text-orange-400 border-orange-500/30 bg-orange-500/5", glow: "shadow-orange-500/20" },
    { id: "deepseek", name: "DeepSeek V3", color: "text-sky-400 border-sky-500/30 bg-sky-500/5", glow: "shadow-sky-500/20" }
  ];

  const handleRoute = () => {
    if (isRouting) return;
    setIsRouting(true);
    setLogs([]);
    setStage("routing");
    
    // Step 1: Initialize
    addLog("Initializing neural interface...", "info");
    
    // Step 2: Route Gemini
    setTimeout(() => {
      setActiveModel("gemini");
      addLog("Routing Query to Gemini 3 Pro (Vision Analysis)...", "info");
      setStats(prev => ({ ...prev, latency: 154, accuracy: 98.1 }));
    }, 1200);

    // Step 3: Route Claude
    setTimeout(() => {
      setActiveModel("claude");
      addLog("Gemini weight verified. Routing to Claude 3.5 (Reasoning and Layout)...", "info");
      setStats(prev => ({ ...prev, latency: 98, cost: 0.024 }));
    }, 2800);

    // Step 4: Route DeepSeek
    setTimeout(() => {
      setActiveModel("deepseek");
      addLog("Claude logic distilled. Routing to DeepSeek V3 (Coding Syntax refinement)...", "info");
      setStats(prev => ({ ...prev, latency: 42, cost: 0.008, accuracy: 99.8 }));
    }, 4400);

    // Step 5: Synthesize
    setTimeout(() => {
      setActiveModel(null);
      setStage("synthesizing");
      addLog("Merging model streams at Nexus Core...", "warning");
    }, 6000);

    // Step 6: Complete
    setTimeout(() => {
      setStage("completed");
      addLog("SUCCESS: Fluent synthetic response generated, verified, and output dispatched.", "success");
      setIsRouting(false);
    }, 7800);
  };

  const addLog = (text: string, type: "info" | "success" | "warning") => {
    setLogs(prev => [...prev, { id: Date.now() + Math.random(), text, type }]);
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-tr-[40px] rounded-bl-[10px] p-8 backdrop-blur-md relative overflow-hidden h-full flex flex-col justify-between group">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-accent/20 transition-all duration-500"></div>

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <Cpu className="text-brand-accent w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">{cardTitle}</h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono tracking-widest text-brand-accent">
            <Activity className="w-3 h-3 animate-pulse text-brand-accent" />
            ONLINE_SYSTEM
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10">
          {cardDescription}
        </p>

        {/* Neural Network Simulator Visual Panel */}
        <div className="bg-black/30 border border-white/5 rounded-2xl p-6 mb-8 relative">
          <div className="grid grid-cols-12 gap-4 items-center">
            
            {/* Input Nodes */}
            <div className="col-span-4 flex flex-col gap-3">
              {models.map((model) => (
                <div
                  key={model.id}
                  className={`p-3 rounded-lg border text-center transition-all duration-300 relative ${model.color} ${
                    activeModel === model.id ? "scale-105 border-brand-accent " + model.glow : "opacity-40"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider block uppercase">{model.name}</span>
                  {activeModel === model.id && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Neural pathways connecting lines */}
            <div className="col-span-4 h-32 relative flex items-center justify-center">
              <svg className="w-full h-full absolute inset-0 overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Gemini to Core */}
                <path d="M 0,20 L 50,50" stroke={activeModel === "gemini" ? "#00DC82" : "rgba(255,255,255,0.05)"} strokeWidth={activeModel === "gemini" ? "2" : "1"} fill="none" className="transition-all duration-300" />
                {activeModel === "gemini" && (
                  <circle r="3" fill="#00DC82">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M 0,20 L 50,50" />
                  </circle>
                )}

                {/* Claude to Core */}
                <path d="M 0,50 L 50,50" stroke={activeModel === "claude" ? "#00DC82" : "rgba(255,255,255,0.05)"} strokeWidth={activeModel === "claude" ? "2" : "1"} fill="none" className="transition-all duration-300" />
                {activeModel === "claude" && (
                  <circle r="3" fill="#00DC82">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M 0,50 L 50,50" />
                  </circle>
                )}

                {/* DeepSeek to Core */}
                <path d="M 0,80 L 50,50" stroke={activeModel === "deepseek" ? "#00DC82" : "rgba(255,255,255,0.05)"} strokeWidth={activeModel === "deepseek" ? "2" : "1"} fill="none" className="transition-all duration-300" />
                {activeModel === "deepseek" && (
                  <circle r="3" fill="#00DC82">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M 0,80 L 50,50" />
                  </circle>
                )}

                {/* Core to Output */}
                <path d="M 50,50 L 100,50" stroke={stage === "completed" ? "#00DC82" : stage === "synthesizing" ? "#eab308" : "rgba(255,255,255,0.05)"} strokeWidth={stage === "completed" || stage === "synthesizing" ? "2" : "1"} fill="none" className="transition-all duration-300" />
                {(stage === "synthesizing" || stage === "completed") && (
                  <circle r="3" fill={stage === "completed" ? "#00DC82" : "#eab308"}>
                    <animateMotion dur="0.8s" repeatCount="indefinite" path="M 50,50 L 100,50" />
                  </circle>
                )}
              </svg>

              {/* Central Core Brain */}
              <div className={`w-12 h-12 rounded-full border flex items-center justify-center relative z-10 transition-all duration-500 ${
                stage === "synthesizing"
                  ? "bg-yellow-500/20 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)] rotate-180 scale-110"
                  : stage === "completed"
                  ? "bg-brand-accent/20 border-brand-accent shadow-[0_0_25px_rgba(0,220,130,0.5)] scale-105"
                  : "bg-white/5 border-white/10"
              }`}>
                {stage === "synthesizing" ? (
                  <Shuffle className="w-5 h-5 text-yellow-500 animate-spin" />
                ) : (
                  <Sparkles className={`w-5 h-5 ${stage === "completed" ? "text-brand-accent" : "text-white/40"}`} />
                )}
              </div>
            </div>

            {/* Distilled Output Terminal Node */}
            <div className="col-span-4 text-center">
              <div className={`p-4 rounded-xl border transition-all duration-500 ${
                stage === "completed" 
                  ? "border-brand-accent bg-brand-accent/5 text-brand-accent shadow-[0_0_15px_rgba(0,220,130,0.1)]" 
                  : "border-white/5 bg-white/[0.01] text-white/20"
              }`}>
                <Zap className="w-5 h-5 mx-auto mb-2" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] block">Response Node</span>
              </div>
            </div>

          </div>
        </div>

        {/* Real-time Distillation Logs Console */}
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] h-32 overflow-y-auto mb-6 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-white/10">
          <div className="text-white/40 border-b border-white/5 pb-2 mb-1 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-accent" />
            <span>NEXUS_NEURAL_LOGS // ROUTER_V1</span>
          </div>
          {logs.length === 0 ? (
            <div className="text-white/30 italic my-auto text-center">
              Awaiting routing initialization... Click [Route Signal Pipeline] below.
            </div>
          ) : (
            logs.map(log => (
              <div
                key={log.id}
                className={`leading-relaxed border-l-2 pl-2 ${
                  log.type === "success"
                    ? "text-brand-accent border-brand-accent"
                    : log.type === "warning"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white/70 border-white/20"
                }`}
              >
                {log.text}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Controller & Stats HUD Footer */}
      <div>
        {/* Real-time stats display panel */}
        <div className="grid grid-cols-3 gap-2 py-3 bg-white/[0.01] border-y border-white/5 font-mono text-[10px] text-white/50 mb-6">
          <div className="text-center">
            <span className="block text-[8px] text-white/30 uppercase">Latency</span>
            <span className="font-bold text-white tracking-wide">{stats.latency}ms</span>
          </div>
          <div className="text-center border-x border-white/5">
            <span className="block text-[8px] text-white/30 uppercase">Token Cost</span>
            <span className="font-bold text-white tracking-wide">${stats.cost.toFixed(3)}</span>
          </div>
          <div className="text-center">
            <span className="block text-[8px] text-white/30 uppercase">Accuracy</span>
            <span className="font-bold text-brand-accent tracking-wide">{stats.accuracy.toFixed(1)}%</span>
          </div>
        </div>

        {/* Route CTA Button */}
        <div className="group relative w-full">
          <div className={`absolute inset-0 bg-brand-accent blur-xl transition-opacity duration-300 ${isRouting ? "opacity-40" : "opacity-10 group-hover:opacity-40"}`}></div>
          <button
            onClick={handleRoute}
            disabled={isRouting}
            className={`relative w-full py-4 text-black text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all ${
              isRouting ? "bg-brand-accent/50 cursor-not-allowed" : "bg-brand-accent cursor-pointer"
            }`}
          >
            {isRouting ? (
              <>
                <Shuffle className="w-3.5 h-3.5 animate-spin" />
                Routing Pipeline...
              </>
            ) : (
              <>
                Route Signal Pipeline
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
