import React, { useState } from 'react';
import { Shield, ArrowRight, Check } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    } catch (err) {
      console.error('Subscription error:', err);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                <Shield className="w-5 h-5 fill-white/20" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                NX <span className="text-blue-500">Shield</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A Safer Internet For A Smarter Tomorrow. AI-powered real-time browser security.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">Subscribe to Cyber Threat Advisories</span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input 
                  type="email"
                  required
                  placeholder="Enter institutional email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 outline-none border border-slate-700 focus:border-blue-500 flex-1"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-white" /> : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-400 mt-1.5 font-medium">
                  ✓ Subscribed! You will receive our weekly security digest.
                </p>
              )}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Product</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#core-protection" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Download Extension</button></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Company</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#for-institutions" className="hover:text-white transition-colors">About Us</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><a href="#for-institutions" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Resources & Socials */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Resources</h5>
            <ul className="space-y-2 text-xs sm:text-sm mb-4">
              <li><a href="#resources" className="hover:text-white transition-colors">Blog & Advisories</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>

            <h5 className="text-white font-bold text-xs tracking-wider uppercase pt-2">Follow Us</h5>
            <div className="flex items-center gap-2 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-blue-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-blue-400 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-red-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-pink-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NX Shield. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
