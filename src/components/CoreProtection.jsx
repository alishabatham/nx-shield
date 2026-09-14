import React, { useState } from 'react';
import { Mail, Link2, GlobeCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function CoreProtection() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'email-scanner',
      icon: Mail,
      badge: 'AI Powered',
      title: 'AI Email Scanner',
      description: 'Detects phishing emails, suspicious attachments and malicious content using AI.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      demoVisual: {
        header: 'Phishing Email Detection Engine',
        item: 'Suspicious Email: "Urgent Invoice Update #9021"',
        sender: 'security-alert@micros0ft-support-portal.net',
        risk: '96% Risk (Spoofed Sender Domain)',
        action: 'Quarantined before opening'
      }
    },
    {
      id: 'url-scanner',
      icon: Link2,
      badge: 'Real-Time',
      title: 'URL / Link Scanner',
      description: 'Analyzes links in real-time to identify hidden threats and malicious redirects.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      demoVisual: {
        header: 'Real-Time Link Inspection',
        item: 'Link target: bit.ly/bank-security-reset',
        sender: 'Redirects to 3 suspicious proxy nodes',
        risk: '88% Risk (Hidden Redirect Chain)',
        action: 'Redirect blocked instantly'
      }
    },
    {
      id: 'website-check',
      icon: GlobeCheck,
      badge: 'Instant Warning',
      title: 'Website Security Check',
      description: 'Checks website reputation, detects unsafe content and warns you instantly.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      demoVisual: {
        header: 'Domain Reputation & SSL Check',
        item: 'Domain: free-downloads-hub-2026.xyz',
        sender: 'Certificate issued 12 minutes ago',
        risk: '92% Risk (Malicious Payload Host)',
        action: 'Warning banner displayed'
      }
    }
  ];

  return (
    <section id="core-protection" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider">
            CORE PROTECTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smarter Scanning. Safer Browsing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            NX Shield scans, analyzes and protects you from digital threats across every online interaction.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            const isSelected = activeFeature === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Learn More / Interactive Trigger */}
                <div>
                  <button
                    onClick={() => setActiveFeature(isSelected ? null : item.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    {isSelected ? 'Hide Visual Details' : 'Learn More'}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Interactive Details Accordion Box */}
                  {isSelected && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white text-xs space-y-2 animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-2 font-bold text-blue-400 border-b border-slate-700 pb-2">
                        <Zap className="w-4 h-4" />
                        {item.demoVisual.header}
                      </div>
                      <div className="text-slate-300 font-mono text-[11px]">
                        Target: {item.demoVisual.item}
                      </div>
                      <div className="text-slate-400">
                        Sender / Host: {item.demoVisual.sender}
                      </div>
                      <div className="text-red-400 font-bold">
                        Analysis: {item.demoVisual.risk}
                      </div>
                      <div className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Result: {item.demoVisual.action}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
