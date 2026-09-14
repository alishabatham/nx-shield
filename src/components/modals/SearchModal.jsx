import React, { useState } from 'react';
import { X, Search, Shield, ArrowRight, Globe, Lock, Mail } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'AI Email Phishing Scanner', href: '#core-protection', category: 'Feature' },
    { title: 'Real-Time URL Link Inspection', href: '#core-protection', category: 'Feature' },
    { title: 'Cloud Admin Security Dashboard', href: '#pricing', category: 'Dashboard' },
    { title: 'College & Institutional Security', href: '#for-institutions', category: 'Solution' },
    { title: 'Chrome Extension Installation Guide', href: '#hero', category: 'Download' }
  ];

  const filtered = quickLinks.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative">

        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, tools, or security documentation..."
            className="w-full text-sm font-medium text-slate-800 outline-none bg-transparent"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-3 max-h-80 overflow-y-auto divide-y divide-slate-100">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    {item.category[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">{item.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching security topics found.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
          <span>Press ESC or click outside to close</span>
          <span className="font-mono font-semibold">NX Shield Search v1.0</span>
        </div>

      </div>
    </div>
  );
}
