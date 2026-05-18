// AgentDetails.tsx

import { useParams, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";
import { CLIENT_LOGOS } from "../constants/agents";

export default function AgentDetails() {
  const { id } = useParams<{ id: string }>();
  const agent = CLIENT_LOGOS.find((a) => a.id === Number(id));

  if (!agent) {
    return (
      <section className="py-24 text-center max-w-xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-tr-[40px] p-12 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-accent/5 blur-xl pointer-events-none"></div>
          <span className="text-brand-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">
            [ 404 System Error ]
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Agent Not Found</h2>
          <p className="text-white/60 mb-8 leading-relaxed text-sm">
            The requested autonomous processing node could not be retrieved from the active database registry. It may have been decommissioned or the ID is invalid.
          </p>
          <Link
            to="/agents"
            className="inline-block px-8 py-4 bg-brand-accent text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Return to Registry
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-4 pb-20">
      {/* BACK BUTTON */}
      <div className="mb-8">
        <Link
          to="/agents"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-brand-accent font-mono text-[10px] uppercase tracking-widest transition-colors duration-200"
        >
          <ArrowLeft size={12} className="transition-transform duration-200 group-hover:-translate-x-1" />
          <span>[ Return to Registry ]</span>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-12">

        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-8">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[10px] border border-white/10 bg-white/5 mb-12">
            <img
              src={agent.imageUrl}
              alt={agent.name}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-8 left-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4">
                {agent.category}
              </div>

              <h1 className="text-5xl font-bold text-white max-w-2xl leading-tight">
                {agent.name}
              </h1>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-16">
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-6">
              Overview
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              {agent.longDescription
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-16">
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-8">
              Key Features
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agent.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="text-white/80 leading-relaxed">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-8">
              Technology Stack
            </div>

            <div className="flex flex-wrap gap-4">
              {agent.tech.map((item) => (
                <div
                  key={item}
                  className="px-5 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 lg:col-span-4 h-full max-w-[340px]">
          <div className="sticky top-32 p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-tr-[40px]">

            {/* CONTENT */}
            <div className="space-y-8 mb-12">

              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">
                  Primary Objective
                </div>

                <div className="text-xl font-semibold text-white leading-relaxed">
                  {agent.overview.objective}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">
                  Automation Impact
                </div>

                <div className="text-3xl font-mono font-bold text-white">
                  {agent.overview.impact}
                </div>
              </div>

              <div>
                {/* <div className="text-[10px] font-mono text-brand-accent uppercase mb-3">
                  AI Capabilities
                </div>

                <div className="flex flex-wrap gap-2">
                  {agent.overview.capabilities.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-white rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div> */}
              </div>

              <div>
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">
                  Business Outcome
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {agent.overview.outcome}
                </p>
              </div>

              <div>
                {/* <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">
                  Deployment
                </div> */}

                {/* <div className="text-white font-medium">
                  {agent.deployment}
                </div> */}
              </div>

              <div>
                {/* <div className="text-[10px] font-mono text-brand-accent uppercase mb-2">
                  System Status
                </div> */}

                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>

                  <span className="text-xs uppercase font-bold tracking-widest text-white">
                    {agent.status}
                  </span>
                </div> */}
              </div>

            </div>

            {/* CTA */}
            <div className="group relative w-full">
              <div className="absolute inset-0 bg-brand-accent blur-xl opacity-20 group-hover:opacity-60 transition-opacity"></div>

              <button className="relative w-full py-5 bg-brand-accent text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Explore Workflow
              </button>
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex justify-center gap-4 text-[10px] font-mono text-brand-accent uppercase">
              <span>Enterprise Ready</span>
              <span>•</span>
              <span>AI Powered</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}