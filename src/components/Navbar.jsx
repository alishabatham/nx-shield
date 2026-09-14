import React, { useState } from 'react';
import { Shield, ChevronDown, Search, Menu, X, ArrowRight, BookOpen, Layers, HelpCircle, FileText } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenSearch, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900/10 rounded-[10px] flex items-center justify-center text-white">
                <Shield className="w-6 h-6 fill-white/20 stroke-[2.2]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                NX <span className="text-blue-600">Shield</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 -mt-1 tracking-wider uppercase">
                AI Browser Security
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
            <a href="#hero" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors">
              Home
            </a>
            <a href="#core-protection" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors">
              Product
            </a>
            <a href="#how-it-works" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors">
              Features
            </a>
            <a href="#for-institutions" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors">
              For Institutions
            </a>
            <a href="#pricing" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors">
              Pricing
            </a>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button 
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-100/70 transition-colors flex items-center gap-1"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a href="#resources" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Documentation</div>
                      <div className="text-xs text-slate-500">API docs and deployment guides</div>
                    </div>
                  </a>
                  <a href="#how-it-works" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                    <Layers className="w-5 h-5 text-indigo-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Threat Database</div>
                      <div className="text-xs text-slate-500">Real-time threat hash directory</div>
                    </div>
                  </a>
                  <a href="#for-institutions" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                    <FileText className="w-5 h-5 text-emerald-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Case Studies</div>
                      <div className="text-xs text-slate-500">How 200+ colleges stay secure</div>
                    </div>
                  </a>
                  <a href="#faq" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                    <HelpCircle className="w-5 h-5 text-purple-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Help Center & FAQ</div>
                      <div className="text-xs text-slate-500">Get answers to common queries</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Search Button */}
            <button 
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Sign In */}
            <button 
              onClick={onOpenAuth}
              className="hidden sm:inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-xl transition-colors"
            >
              Sign In
            </button>

            {/* Get Started Button */}
            <button 
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Home
          </a>
          <a 
            href="#core-protection" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Product
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Features
          </a>
          <a 
            href="#for-institutions" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            For Institutions
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Pricing
          </a>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-xl"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
