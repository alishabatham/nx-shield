import React from 'react';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction({ onOpenExtensionModal, onOpenContactModal }) {
  return (
    <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-8 space-y-4 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                SECURE EVERY DIGITAL INTERACTION
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Safer Tomorrow Starts With <span className="text-blue-600">NX Shield</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 max-w-lg">
                Join organizations that trust NX Shield for real-time browser threat protection.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button 
                  onClick={onOpenExtensionModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={onOpenContactModal}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 py-3 rounded-xl border border-slate-300 shadow-2xs hover:border-slate-400 active:scale-[0.98] transition-all"
                >
                  Contact Us
                </button>
              </div>

            </div>

            {/* Right Graphic Artwork Column */}
            <div className="md:col-span-4 flex items-center justify-center pt-2 md:pt-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-slate-900/10 rounded-[14px] flex items-center justify-center text-white">
                  <Shield className="w-12 h-12 sm:w-16 sm:h-16 fill-white/20 stroke-[2]" />
                </div>
              </div>
            </div>

          </div>

          {/* Clean Bottom Text */}
          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-slate-500 text-xs sm:text-sm font-semibold">
            Safer Browsing • Institutional Protection • Real-Time AI Security
          </div>

        </div>
      </div>
    </section>
  );
}
