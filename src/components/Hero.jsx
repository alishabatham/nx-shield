import React, { useState } from 'react';
import { Shield, Check, ArrowRight, Lock, AlertTriangle, ShieldAlert, CheckCircle2, RefreshCw } from 'lucide-react';
import { SAMPLE_URLS } from '../data/mockData';

export default function Hero({ onOpenExtensionModal }) {
  const [selectedUrlIndex, setSelectedUrlIndex] = useState(0);
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [activeUrlState, setActiveUrlState] = useState(SAMPLE_URLS[0]);

  const handleSelectSample = (idx) => {
    setIsScanning(true);
    setSelectedUrlIndex(idx);
    setTimeout(() => {
      setActiveUrlState(SAMPLE_URLS[idx]);
      setCustomInputUrl(SAMPLE_URLS[idx].url);
      setIsScanning(false);
    }, 400);
  };

  const handleCustomScan = (e) => {
    e.preventDefault();
    if (!customInputUrl) return;
    setIsScanning(true);
    setTimeout(() => {
      const lower = customInputUrl.toLowerCase();
      if (lower.includes('phish') || lower.includes('login') || lower.includes('alert') || lower.includes('scam')) {
        setActiveUrlState(SAMPLE_URLS[1]);
      } else if (lower.includes('crack') || lower.includes('exe') || lower.includes('virus')) {
        setActiveUrlState(SAMPLE_URLS[2]);
      } else {
        setActiveUrlState({
          id: 'custom-safe',
          url: customInputUrl,
          domain: customInputUrl.replace('https://', '').replace('http://', '').split('/')[0] || 'custom-domain.com',
          status: 'safe',
          riskScore: 4,
          threatType: 'None',
          title: 'Custom Domain Security Scan',
          checks: [
            { name: 'No malicious content', passed: true },
            { name: 'Trusted SSL domain', passed: true },
            { name: 'Safe to browse', passed: true }
          ],
          details: 'Verified safe by AI Real-time Heuristic Engine.'
        });
      }
      setIsScanning(false);
    }, 500);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border-b border-slate-200/60">
      
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-400/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              BROWSE • DETECT • STAY SECURE
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              A Safer Internet <br className="hidden sm:inline" />
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">NX Shield</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              AI-powered browser security that detects and blocks phishing emails, malicious links and unsafe websites in real-time — before they become a threat.
            </p>

            {/* Action Buttons */}
            <div className="pt-1">
              <button 
                onClick={onOpenExtensionModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Badges Bar */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600 stroke-[3] shrink-0" />
                Free to use
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600 stroke-[3] shrink-0" />
                AI-Powered
              </span>
              
            </div>

          </div>

          {/* Right Hero Visual Column (Browser Mockup + Overlay Popup) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">

            {/* Handwritten Top Right Callout */}
            <div className="hidden sm:flex absolute -top-10 -right-4 z-20 items-center gap-2 text-blue-600 font-handwriting text-xl sm:text-2xl font-bold select-none rotate-2">
              <span>Real-Time Protection As You Browse</span>
              <svg className="w-10 h-10 stroke-current fill-none" viewBox="0 0 50 50">
                <path d="M5,25 Q25,5 40,20 T45,35" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M35,35 L45,35 L42,25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Main Interactive Browser Frame */}
            <div className="relative rounded-2xl bg-white shadow-xl sm:shadow-2xl border border-slate-200/90 overflow-hidden group">
              
              {/* Browser Window Bar */}
              <div className="bg-slate-100/90 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Interactive URL Input Bar */}
                <form onSubmit={handleCustomScan} className="flex-1 bg-white rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 border border-slate-300/80 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-700 shadow-2xs">
                  <Lock className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${activeUrlState.status === 'safe' ? 'text-emerald-600' : 'text-red-500'}`} />
                  <input 
                    type="text" 
                    value={customInputUrl || activeUrlState.url}
                    onChange={(e) => setCustomInputUrl(e.target.value)}
                    className="w-full bg-transparent outline-none font-mono text-slate-700 truncate"
                    placeholder="Enter URL to scan..."
                  />
                  <button type="submit" aria-label="Scan" className="p-0.5 hover:bg-slate-100 rounded shrink-0">
                    <RefreshCw className={`w-3 h-3 text-slate-400 ${isScanning ? 'animate-spin text-blue-600' : ''}`} />
                  </button>
                </form>

                {/* Preset URL Selector Pills */}
                <div className="hidden sm:flex items-center gap-1 shrink-0">
                  {SAMPLE_URLS.map((sample, idx) => (
                    <button
                      key={sample.id}
                      onClick={() => handleSelectSample(idx)}
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-all ${
                        selectedUrlIndex === idx 
                          ? 'bg-blue-600 text-white shadow-2xs' 
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {sample.status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Web Page Canvas Mock */}
              <div className="relative min-h-[380px] sm:min-h-[400px] bg-slate-50 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
                
                {/* Background Web Page Content Simulation */}
                <div className="space-y-3 opacity-25 pointer-events-none">
                  <div className="h-6 sm:h-8 bg-slate-300 rounded-lg w-3/4"></div>
                  <div className="h-3 sm:h-4 bg-slate-300 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-16 bg-slate-200 rounded-xl"></div>
                    <div className="h-16 bg-slate-200 rounded-xl"></div>
                    <div className="h-16 bg-slate-200 rounded-xl"></div>
                  </div>
                </div>

                {/* Overlaid NX Shield Extension Card Popup */}
                <div className="absolute inset-x-3 top-3 sm:inset-x-6 sm:top-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl sm:shadow-2xl border border-slate-200 p-4 sm:p-6 transition-all duration-300 z-10">
                  
                  {/* Extension Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">NX Shield</h4>
                        <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Real-Time Threat Inspector</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto ${
                      activeUrlState.status === 'safe'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : activeUrlState.status === 'warning'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {activeUrlState.status === 'safe' ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          This website is Safe
                        </>
                      ) : activeUrlState.status === 'warning' ? (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          Suspicious Download
                        </>
                      ) : (
                        <>
                          <ShieldAlert className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          Blocked Malicious Site
                        </>
                      )}
                    </div>
                  </div>

                  {/* Extension Details List */}
                  <div className="py-3 sm:py-4 space-y-2">
                    {activeUrlState.checks.map((chk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                        {chk.passed ? (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-[10px] sm:text-xs">
                            ✕
                          </div>
                        )}
                        <span className={chk.passed ? 'text-slate-700 truncate' : 'text-red-700 font-semibold truncate'}>{chk.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Threat Summary Box */}
                  <div className={`p-2.5 sm:p-3 rounded-xl text-xs font-medium ${
                    activeUrlState.status === 'safe'
                      ? 'bg-blue-50/70 text-blue-900 border border-blue-100'
                      : activeUrlState.status === 'warning'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'bg-red-50 text-red-900 border border-red-200'
                  }`}>
                    <div className="font-bold mb-0.5 flex flex-wrap justify-between gap-1 text-[11px] sm:text-xs">
                      <span className="truncate">{activeUrlState.title}</span>
                      <span className="font-mono text-[10px] sm:text-xs shrink-0">Risk: {activeUrlState.riskScore}/100</span>
                    </div>
                    <div className="text-[11px] leading-tight text-slate-700">{activeUrlState.details}</div>
                  </div>

                  {/* Preset quick test selector inside modal for easy visual demonstration */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-600 text-[11px] sm:text-xs">Test Live Scenarios:</span>
                    <div className="flex gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
                      <button 
                        onClick={() => handleSelectSample(0)}
                        className={`px-2 py-1 rounded text-[11px] transition-colors shrink-0 ${selectedUrlIndex === 0 ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        Safe Site
                      </button>
                      <button 
                        onClick={() => handleSelectSample(1)}
                        className={`px-2 py-1 rounded text-[11px] transition-colors shrink-0 ${selectedUrlIndex === 1 ? 'bg-red-600 text-white font-bold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        Phishing Scam
                      </button>
                      <button 
                        onClick={() => handleSelectSample(2)}
                        className={`px-2 py-1 rounded text-[11px] transition-colors shrink-0 ${selectedUrlIndex === 2 ? 'bg-amber-600 text-white font-bold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        Unsafe Link
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Handwritten Bottom Callout */}
            <div className="hidden sm:flex absolute -bottom-8 -left-4 z-20 items-center gap-2 text-blue-600 font-handwriting text-2xl font-bold select-none -rotate-2">
              <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 50 50">
                <path d="M40,10 Q20,40 10,25" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10,25 L15,15 M10,25 L20,30" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span>Same Browser. A Safer You.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
