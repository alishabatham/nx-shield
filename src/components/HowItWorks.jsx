import React, { useState } from 'react';
import { UserCheck, Search, Cpu, ShieldCheck, AlertOctagon, ShieldX, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      icon: UserCheck,
      title: 'You Browse',
      description: 'Open emails, click links or visit websites in your daily workflow.',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      num: '02',
      icon: Search,
      title: 'Scan & Analyze',
      description: 'NX Shield scans content using AI models and global threat databases.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      num: '03',
      icon: Cpu,
      title: 'Detect Threats',
      description: 'Analyzes heuristics, calculates risk score and identifies potential threats.',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Take Action',
      description: 'Warns, blocks or allows browsing based on the precise threat level.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  const outcomes = [
    {
      type: 'warn',
      icon: AlertOctagon,
      title: 'Warn User',
      desc: 'Block real-time warning about potential threats before interaction.',
      cardBg: 'bg-red-50/80 hover:bg-red-50 border-red-200 text-red-900',
      iconColor: 'bg-red-100 text-red-600'
    },
    {
      type: 'block',
      icon: ShieldX,
      title: 'Block Threat',
      desc: 'Block access to malicious or unsafe content immediately.',
      cardBg: 'bg-amber-50/80 hover:bg-amber-50 border-amber-200 text-amber-900',
      iconColor: 'bg-amber-100 text-amber-600'
    },
    {
      type: 'allow',
      icon: CheckCircle,
      title: 'Allow Safe Browsing',
      desc: 'Permit legitimate and trusted access with zero browsing lag.',
      cardBg: 'bg-emerald-50/80 hover:bg-emerald-50 border-emerald-200 text-emerald-900',
      iconColor: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider">
            HOW NX SHIELD WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Detection to Protection — In Seconds.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            NX Shield analyzes your browsing activity in real-time and takes the right action to keep you safe.
          </p>
        </div>

        {/* 4 Steps Horizontal Workflow Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-6 border transition-all cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-blue-50/50 border-blue-400 shadow-md ring-2 ring-blue-400/30' 
                    : 'bg-slate-50/60 border-slate-200/80 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} border flex items-center justify-center font-bold shadow-xs`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Arrow (Visible on desktop between items) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Outcome Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`rounded-2xl p-5 sm:p-6 border transition-all flex items-start gap-4 ${item.cardBg}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
