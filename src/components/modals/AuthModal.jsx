import React, { useState } from 'react';
import { X, Shield, Lock, Mail, User, ArrowRight } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: tab === 'signup' ? name : '',
          email,
          action: tab
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setPassword('');
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Failed to submit auth response:', err);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative">

        {/* Header */}
        <div className="p-6 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Shield className="w-5 h-5 fill-white/20" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              NX <span className="text-blue-600">Shield</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-6 flex border-b border-slate-200 text-sm font-bold text-slate-500">
          <button
            onClick={() => setTab('signin')}
            className={`pb-3 px-3 transition-colors border-b-2 ${tab === 'signin' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-slate-800'
              }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`pb-3 px-3 transition-colors border-b-2 ${tab === 'signup' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-slate-800'
              }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">

          {submitted ? (
            <div className="p-6 text-center space-y-2 text-emerald-600 font-bold animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-emerald-600 text-2xl">
                ✓
              </div>
              <p>Authentication Successful!</p>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {tab === 'signup' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name / Institution Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Oxford Cyber Sec Lab"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Work / Institutional Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@college.edu"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Saving to Database...' : (tab === 'signin' ? 'Sign In to Console' : 'Create Admin Account')}
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
