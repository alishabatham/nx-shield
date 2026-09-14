import React from 'react';
import { GraduationCap, Building2, Users2, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export default function BuiltForImpact() {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Protect Your Community',
      description: 'Keep students, researchers and staff safe from ransomware, malware and online phishing threats.',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: Building2,
      title: 'Centralized Management',
      description: 'Monitor and manage browser security compliance across your entire campus or organizational network.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      icon: Users2,
      title: 'Promote Safe Digital Habits',
      description: 'Foster a culture of active cybersecurity awareness with automated guidance and zero friction.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section id="for-institutions" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider">
            BUILT FOR REAL IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            For Your Security
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Create a safer digital environment for your students, staff and organization.
          </p>
        </div>

        {/* 3 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${card.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs`}>
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Enterprise grade compliance ready
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
