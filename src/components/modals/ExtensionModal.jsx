import React, { useState } from 'react';
import { X, Shield, CheckCircle2, AlertTriangle, ShieldAlert, Download, ExternalLink, RefreshCw } from 'lucide-react';
import { SAMPLE_URLS } from '../../data/mockData';

export default function ExtensionModal({ isOpen, onClose }) {
  const [testUrl, setTestUrl] = useState('https://mit.edu/research');
  const [scanResult, setScanResult] = useState(SAMPLE_URLS[0]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleScan = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const lower = testUrl.toLowerCase();
      if (lower.includes('phish') || lower.includes('login') || lower.includes('bank') || lower.includes('scam')) {
        setScanResult(SAMPLE_URLS[1]);
      } else if (lower.includes('crack') || lower.includes('exe') || lower.includes('malware') || lower.includes('download')) {
        setScanResult(SAMPLE_URLS[2]);
      } else {
        setScanResult({
          id: 'custom-clean',
          url: testUrl,
          domain: testUrl.replace('https://', '').replace('http://', '').split('/')[0] || 'domain.com',
          status: 'safe',
          riskScore: 0,
          threatType: 'Clean',
          title: 'Verified Safe Web Service',
          checks: [
            { name: 'SSL Certificate Signature Valid', passed: true },
            { name: 'No malicious code injection', passed: true },
            { name: 'Zero dark patterns detected', passed: true }
          ],
          details: 'Verified safe by AI Real-time Neural Inspector.'
        });
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Shield className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">NX Shield Browser Extension Simulator</h3>
              <span className="text-xs text-slate-400">Chrome, Edge & Brave Extension v2.4</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          <p className="text-sm text-slate-600">
            Experience how NX Shield evaluates web traffic inside your browser with sub-10ms response time.
          </p>

          {/* Test Scanner Form */}
          <form onSubmit={handleScan} className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Test Any Website URL
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                placeholder="https://example.com/path"
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Scan URL
              </button>
            </div>
          </form>

          {/* Live Result Card */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Analysis Outcome</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                scanResult.status === 'safe'
                  ? 'bg-emerald-100 text-emerald-800'
                  : scanResult.status === 'warning'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {scanResult.status.toUpperCase()}
              </span>
            </div>

            <div className="text-base font-bold text-slate-900">
              {scanResult.title}
            </div>

            <div className="space-y-2 pt-1">
              {scanResult.checks.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className={`w-4 h-4 ${c.passed ? 'text-emerald-600' : 'text-red-500'}`} />
                  {c.name}
                </div>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-mono pt-2 border-t border-slate-200">
              Calculated Risk Score: {scanResult.riskScore}/100
            </div>
          </div>

          {/* Install Button CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Compatible with Chrome, Brave, Edge & Opera.
            </div>
            <button 
              onClick={() => {
                alert('Thank you for trying NX Shield! The extension installation file nx-shield.crx has been initiated.');
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Chrome Extension (.CRX)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
