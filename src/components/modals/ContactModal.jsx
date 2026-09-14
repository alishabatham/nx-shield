import React, { useState } from 'react';
import { X, Building2, Send, Check } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [instName, setInstName] = useState('');
  const [userCount, setUserCount] = useState('100-500');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          institution: instName,
          userCount,
          phone,
          requirements
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setInstName('');
        setPhone('');
        setRequirements('');
        onClose();
      }, 2500);
    } catch (err) {
      console.error('Failed to submit onboarding request:', err);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-lg">Institutional Onboarding</h3>
            <p className="text-xs text-blue-100 mt-0.5">Deploy NX Shield across your entire campus or workforce</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Request Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Our cyber security team will contact your IT administration within 2 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Institution / Organization Name</label>
                <input 
                  type="text" 
                  required
                  value={instName}
                  onChange={(e) => setInstName(e.target.value)}
                  placeholder="e.g. National Institute of Technology"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Estimated Endpoints / Users</label>
                  <select 
                    value={userCount}
                    onChange={(e) => setUserCount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600"
                  >
                    <option value="50-100">50 - 100 users</option>
                    <option value="100-500">100 - 500 users</option>
                    <option value="500-2000">500 - 2,000 users</option>
                    <option value="2000+">2,000+ users (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Contact Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Additional Security Requirements</label>
                <textarea 
                  rows="3"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Describe your current IT setup or specific compliance needs..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-600 focus:bg-white"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Saving to Database...' : 'Submit Onboarding Request'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
