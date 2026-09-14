import React from 'react';
import { Cpu, Globe, Lock, ShieldCheck, Database, Layers, Plus } from 'lucide-react';
import { INTEGRATIONS } from '../data/mockData';

export default function Integrations() {
  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider">
            SEAMLESS INTEGRATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Works With Your Existing Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            NX Shield integrates with global threat databases, security APIs and IT infrastructure.
          </p>
        </div>

        {/* Integration Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {INTEGRATIONS.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-xl font-bold shadow-md shadow-blue-500/10 mb-3 group-hover:scale-110 transition-transform`}>
                {item.logo}
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h4>
              <span className="text-[11px] font-semibold text-slate-500">
                {item.type}
              </span>
            </div>
          ))}

          {/* And More Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-800 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center text-lg font-bold mb-3 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white text-sm">
              And More
            </h4>
            <span className="text-[11px] text-slate-400">
              Custom REST & Webhooks
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
