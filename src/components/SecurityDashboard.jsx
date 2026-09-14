import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, Users, Bell, FileText, ShieldAlert, 
  Search, ShieldCheck, CheckCircle2, Globe, Lock, Activity, Shield
} from 'lucide-react';
import { DASHBOARD_STATS, RECENT_THREATS, CHART_DATA } from '../data/mockData';

export default function SecurityDashboard() {
  const [activeTab, setActiveTab] = useState('monitoring');
  const [threatFilter, setThreatFilter] = useState('All');
  const [policies, setPolicies] = useState([
    { id: 1, rule: 'Auto-Block Executable (.exe, .bat) Downloads', category: 'Download Security', enabled: true, desc: 'Prevents untrusted binary payloads from executing on campus devices' },
    { id: 2, rule: 'Quarantine Spoofed Institutional Email Domains', category: 'Phishing Protection', enabled: true, desc: 'Intercepts incoming emails matching domain spoofing signatures' },
    { id: 3, rule: 'Strict SSL / TLS Certificate Validation', category: 'Web Inspection', enabled: true, desc: 'Blocks web traffic with untrusted or expired security certificates' },
    { id: 4, rule: 'Restrict Access to Known Proxy & Tor Nodes', category: 'Network Firewall', enabled: true, desc: 'Neutralizes anonymizer proxy tools used to bypass campus firewalls' },
    { id: 5, rule: 'Block Unencrypted Credential Forms (HTTP)', category: 'Identity Guard', enabled: false, desc: 'Warns users before submitting passwords on non-HTTPS sites' }
  ]);

  const tabs = [
    { id: 'monitoring', label: 'Live Monitoring', icon: TrendingUp, count: '12' },
    { id: 'analytics', label: 'Attack Analytics', icon: BarChart3, count: '7D' },
    { id: 'users', label: 'User Risk Scores', icon: Users, count: '245' },
    { id: 'alerts', label: 'Security Alerts', icon: Bell, count: '3' },
    { id: 'policies', label: 'Policy Rules', icon: FileText, count: '5' },
    { id: 'incidents', label: 'Audit Logs', icon: ShieldAlert, count: 'Log' }
  ];

  const userRiskData = [
    { id: 1, name: 'Rahul Sharma', dept: 'Student • CSE', score: 88, status: 'Critical', flags: 4, lastThreat: 'Phishing Link Clicked' },
    { id: 2, name: 'Amit Patel', dept: 'Admin Staff • Registrar', score: 65, status: 'Medium Risk', flags: 2, lastThreat: 'Suspicious Email Attachment' },
    { id: 3, name: 'Priya Verma', dept: 'Student • ECE', score: 92, status: 'Critical', flags: 6, lastThreat: 'Unsafe Executable Download' },
    { id: 4, name: 'Prof. Ananya Roy', dept: 'Faculty • Mechanical', score: 14, status: 'Low Risk', flags: 0, lastThreat: 'None (Clean)' },
    { id: 5, name: 'Vikram Singh', dept: 'Student • IT', score: 8, status: 'Safe', flags: 0, lastThreat: 'None (Clean)' }
  ];

  const alertList = [
    { id: 'ALT-9041', title: 'Mass Phishing Campaign Target Identified', dept: 'Engineering Faculty (42 targets)', time: '3 mins ago', priority: 'Critical', desc: 'Credential harvester matching Microsoft 365 login layout.' },
    { id: 'ALT-9038', title: 'Unusual Outbound Data Exfiltration Request', dept: 'Lab Host 04 (194.26.29.112)', time: '28 mins ago', priority: 'High', desc: 'Attempted connection to unverified offshore analytics endpoint.' },
    { id: 'ALT-9029', title: 'Expired SSL Certificate Intercepted', dept: 'Library Research Gateway', time: '1 hour ago', priority: 'Medium', desc: 'User attempted connection to expired cert domain.' }
  ];

  const auditLogs = [
    { logId: 'LOG-8821', action: 'Domain Blacklist Enforcement', target: 'malicious-portal.xyz', userIp: '192.168.1.104', timestamp: '18:42:01', result: 'Traffic Blocked' },
    { logId: 'LOG-8820', action: 'Phishing Email Quarantined', target: 'update-support-portal.net', userIp: '192.168.1.115', timestamp: '18:35:12', result: 'Quarantined' },
    { logId: 'LOG-8819', action: 'Unsafe Payload Intercepted', target: 'crack-soft_installer.exe', userIp: '192.168.1.088', timestamp: '18:10:45', result: 'Neutralized' },
    { logId: 'LOG-8818', action: 'SSL Handshake Terminated', target: 'untrusted-proxy-node.org', userIp: '192.168.1.042', timestamp: '17:55:09', result: 'Connection Reset' }
  ];

  const togglePolicy = (id) => {
    setPolicies(policies.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p));
  };

  const filteredThreats = RECENT_THREATS.filter(t => {
    if (threatFilter === 'Blocked') return t.status === 'Blocked';
    if (threatFilter === 'Warned') return t.status === 'Warned';
    return true;
  });

  return (
    <section id="pricing" className="py-8 sm:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            SECURITY CONSOLE
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Institutional Cloud Security Console
          </h2>
          <p className="text-xs sm:text-base text-slate-600 px-2">
            Real-time threat monitoring and administrator controls for campus endpoints.
          </p>
        </div>

        {/* Console Container Window */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg sm:shadow-xl overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="bg-slate-900 text-white p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 border-b border-slate-800">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 p-0.5 shadow-md shadow-blue-500/20 shrink-0">
                  <div className="w-full h-full bg-slate-900/40 rounded-[9px] flex items-center justify-center text-white">
                    <Shield className="w-4 h-4 fill-white/20 stroke-[2.2]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-white tracking-tight flex items-center gap-1">
                    NX <span className="text-blue-400">Shield</span>
                    <span className="text-slate-400 font-normal text-xs ml-1 hidden sm:inline">• Institutional Console</span>
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium -mt-0.5">College of Engineering Hub</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-800">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search threat or user..."
                  className="w-full sm:w-48 bg-slate-800 text-xs text-white placeholder-slate-400 rounded-lg pl-8 pr-3 py-1.5 outline-none border border-slate-700 focus:border-blue-500"
                />
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-[11px] font-mono shrink-0 flex items-center gap-1">
                <Activity className="w-3 h-3 text-blue-400" />
                4.2ms
              </div>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-2 pt-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-t-xl text-[11px] sm:text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'bg-white text-blue-600 shadow-2xs border-t-2 border-blue-600 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Console Content */}
          <div className="p-3 sm:p-5 space-y-4">
            
            {/* Top Metric Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate">Protected Users</div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">{DASHBOARD_STATS.totalUsers}</div>
                <div className="text-[9px] sm:text-[10px] text-emerald-600 font-bold mt-0.5 truncate">Active Monitored</div>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate">Threats Flagged</div>
                <div className="text-lg sm:text-xl font-extrabold text-amber-600 mt-0.5">{DASHBOARD_STATS.threatsDetected}</div>
                <div className="text-[9px] sm:text-[10px] text-amber-700 font-bold mt-0.5 truncate">Requires Review</div>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate">Blocked Today</div>
                <div className="text-lg sm:text-xl font-extrabold text-red-600 mt-0.5">{DASHBOARD_STATS.blockedToday}</div>
                <div className="text-[9px] sm:text-[10px] text-red-600 font-bold mt-0.5 truncate">100% Neutralized</div>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate">Safe Browsing</div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-0.5">{DASHBOARD_STATS.safeBrowsingPercent}%</div>
                <div className="text-[9px] sm:text-[10px] text-emerald-600 font-bold mt-0.5 truncate">Uptime SLA</div>
              </div>
            </div>

            {/* TAB CONTENT VIEWS */}

            {/* TAB 1: LIVE MONITORING */}
            {activeTab === 'monitoring' && (
              <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150">
                
                {/* 7-Day Chart */}
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2.5">
                    <h5 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      Weekly Threat Activity
                    </h5>
                    <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px]">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Blocked</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Warned</span>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200 flex items-end justify-between gap-1 sm:gap-2 h-32 sm:h-36">
                    {CHART_DATA.map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end min-w-0">
                        <div className="w-full flex items-end justify-center gap-0.5 sm:gap-1 h-20 sm:h-24">
                          <div 
                            className="w-2 sm:w-3 bg-red-500 rounded-t hover:bg-red-600 transition-all"
                            style={{ height: `${(d.blocked / 25) * 100}%` }}
                            title={`Blocked: ${d.blocked}`}
                          />
                          <div 
                            className="w-2 sm:w-3 bg-amber-400 rounded-t hover:bg-amber-500 transition-all"
                            style={{ height: `${(d.warned / 25) * 100}%` }}
                            title={`Warned: ${d.warned}`}
                          />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 font-mono truncate">{d.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Threat Stream Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="p-2.5 sm:p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
                    <h5 className="font-bold text-xs text-slate-800">Recent Threats Log</h5>
                    <div className="flex gap-1 bg-slate-200/70 p-0.5 rounded-lg text-[10px]">
                      {['All', 'Blocked', 'Warned'].map((f) => (
                        <button
                          key={f}
                          onClick={() => setThreatFilter(f)}
                          className={`px-2 py-0.5 rounded font-bold transition-all ${
                            threatFilter === f ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left text-xs min-w-[500px] sm:min-w-0">
                      <thead>
                        <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200 text-[11px]">
                          <th className="py-2 px-3">Threat Type</th>
                          <th className="py-2 px-3">Target Vector</th>
                          <th className="py-2 px-3">Time</th>
                          <th className="py-2 px-3">IP Address</th>
                          <th className="py-2 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                        {filteredThreats.map((t) => (
                          <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2 px-3 font-bold text-slate-900 font-sans whitespace-nowrap">{t.type}</td>
                            <td className="py-2 px-3 text-blue-600 whitespace-nowrap">{t.target}</td>
                            <td className="py-2 px-3 text-slate-500 whitespace-nowrap">{t.time}</td>
                            <td className="py-2 px-3 text-slate-600 whitespace-nowrap">{t.ip}</td>
                            <td className="py-2 px-3 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                t.status === 'Blocked' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-amber-100 text-amber-700 border border-amber-200'
                              }`}>
                                {t.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: ATTACK ANALYTICS */}
            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-in fade-in duration-150">
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200 space-y-3">
                  <h5 className="font-bold text-xs text-slate-800">Attack Vectors</h5>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Phishing Email Links</span>
                        <span className="text-blue-600 font-mono">45%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Unsafe Downloads (.exe)</span>
                        <span className="text-amber-600 font-mono">28%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '28%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Credential Harvesters</span>
                        <span className="text-purple-600 font-mono">18%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 rounded-full" style={{ width: '18%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200 space-y-3">
                  <h5 className="font-bold text-xs text-slate-800">Autonomous Mitigation</h5>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">99.94%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Automatic Neutralization Rate</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 bg-white rounded-lg border border-slate-200">
                      <div className="text-[10px] text-slate-500">Latency</div>
                      <div className="font-bold text-slate-800 font-mono text-xs">3.8 ms</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">
                      <div className="text-[10px] text-slate-500">Zero-Day</div>
                      <div className="font-bold text-blue-600 text-xs">Protected</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: USER RISK SCORES */}
            {activeTab === 'users' && (
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-in fade-in duration-150">
                <div className="p-2.5 sm:p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h5 className="font-bold text-xs text-slate-800">User Risk Score Directory</h5>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">5 High-Risk Flagged</span>
                </div>
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left text-xs min-w-[450px] sm:min-w-0">
                    <thead>
                      <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <th className="py-2 px-3">User</th>
                        <th className="py-2 px-3">Department</th>
                        <th className="py-2 px-3">Risk Score</th>
                        <th className="py-2 px-3">Flags</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {userRiskData.map((u) => (
                        <tr key={u.id} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-bold text-slate-900 whitespace-nowrap">{u.name}</td>
                          <td className="py-2 px-3 text-slate-500 whitespace-nowrap">{u.dept}</td>
                          <td className="py-2 px-3 font-mono font-bold whitespace-nowrap">
                            <span className={u.score > 75 ? 'text-red-600' : u.score > 40 ? 'text-amber-600' : 'text-emerald-600'}>
                              {u.score}/100
                            </span>
                          </td>
                          <td className="py-2 px-3 font-mono text-slate-600 whitespace-nowrap">{u.flags} Flags</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: SECURITY ALERTS */}
            {activeTab === 'alerts' && (
              <div className="space-y-2 sm:space-y-3 animate-in fade-in duration-150">
                {alertList.map((alt) => (
                  <div key={alt.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-400">{alt.id}</span>
                        <h6 className="font-bold text-slate-900">{alt.title}</h6>
                        <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                          alt.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {alt.priority}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{alt.desc}</p>
                    </div>
                    <button 
                      onClick={() => alert('Alert acknowledged.')}
                      className="px-3 py-1 bg-white hover:bg-slate-100 border border-slate-300 font-bold text-[11px] rounded-lg shrink-0 self-end sm:self-auto"
                    >
                      Dismiss
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 5: POLICY RULES */}
            {activeTab === 'policies' && (
              <div className="space-y-2 sm:space-y-2.5 animate-in fade-in duration-150">
                {policies.map((p) => (
                  <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 shrink-0">
                          {p.category}
                        </span>
                        <h6 className="font-bold text-slate-900 truncate">{p.rule}</h6>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate sm:whitespace-normal">{p.desc}</p>
                    </div>
                    <button 
                      onClick={() => togglePolicy(p.id)}
                      className={`w-9 sm:w-10 h-5 rounded-full transition-colors relative shrink-0 p-0.5 ${p.enabled ? 'bg-blue-600' : 'bg-slate-300'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${p.enabled ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 6: INCIDENT TRACKING */}
            {activeTab === 'incidents' && (
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-in fade-in duration-150">
                <div className="p-2.5 sm:p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h5 className="font-bold text-xs text-slate-800">Forensic Audit Trail Logs</h5>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">Immutable Log</span>
                </div>
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left text-xs font-mono min-w-[480px] sm:min-w-0">
                    <thead>
                      <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <th className="py-2 px-3">Log ID</th>
                        <th className="py-2 px-3">Action</th>
                        <th className="py-2 px-3">Target</th>
                        <th className="py-2 px-3">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11px]">
                      {auditLogs.map((log) => (
                        <tr key={log.logId} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-bold text-blue-600 whitespace-nowrap">{log.logId}</td>
                          <td className="py-2 px-3 font-sans font-semibold text-slate-800 whitespace-nowrap">{log.action}</td>
                          <td className="py-2 px-3 text-slate-500 whitespace-nowrap">{log.target}</td>
                          <td className="py-2 px-3 whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                              {log.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
