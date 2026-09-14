export const SAMPLE_URLS = [
  {
    id: 'safe-edu',
    url: 'https://mit.edu/research/ai-ethics',
    domain: 'mit.edu',
    status: 'safe',
    riskScore: 2,
    threatType: 'None',
    title: 'MIT Computer Science & Artificial Intelligence Lab',
    checks: [
      { name: 'No malicious content', passed: true },
      { name: 'Trusted domain (SSL/TLS Verified)', passed: true },
      { name: 'Safe to browse', passed: true }
    ],
    details: 'Verified educational institution. Zero suspicious scripts detected.'
  },
  {
    id: 'phishing-bank',
    url: 'https://login-verify-account-security-alert.net/auth',
    domain: 'login-verify-account-security-alert.net',
    status: 'blocked',
    riskScore: 98,
    threatType: 'Phishing Scam',
    title: 'SUSPICIOUS LOGIN PAGE BLOCKED',
    checks: [
      { name: 'Phishing domain pattern detected', passed: false },
      { name: 'Fake SSL Certificate signature', passed: false },
      { name: 'Credential harvester alert', passed: false }
    ],
    details: 'NX Shield prevented credentials theft attempt targeting financial logins.'
  },
  {
    id: 'malware-dl',
    url: 'https://free-software-crack-installer.xyz/download.exe',
    domain: 'free-software-crack-installer.xyz',
    status: 'warning',
    riskScore: 74,
    threatType: 'Unsafe Download',
    title: 'Potential Ransomware / Trojan Executable',
    checks: [
      { name: 'Untrusted executable download', passed: false },
      { name: 'Suspicious payload obfuscation', passed: false },
      { name: 'Domain registered < 48 hours ago', passed: false }
    ],
    details: 'Executable payload flagged by AI heuristic engines.'
  }
];

export const DASHBOARD_STATS = {
  totalUsers: 245,
  threatsDetected: 12,
  blockedToday: 8,
  safeBrowsingPercent: 98
};

export const RECENT_THREATS = [
  { id: 1, type: 'Phishing Email', target: 'admin@college.edu', status: 'Blocked', time: '2 mins ago', severity: 'high', ip: '185.220.101.4' },
  { id: 2, type: 'Malicious Website', target: 'student-portal.xyz', status: 'Blocked', time: '14 mins ago', severity: 'high', ip: '91.240.118.62' },
  { id: 3, type: 'Suspicious Link', target: 'bit.ly/claim-prize-88', status: 'Warned', time: '35 mins ago', severity: 'medium', ip: '103.251.170.9' },
  { id: 4, type: 'Malware Download', target: 'update_flash.exe', status: 'Blocked', time: '1 hour ago', severity: 'critical', ip: '45.154.255.11' },
  { id: 5, type: 'Data Exfiltration', target: 'api.unknown-temp.io', status: 'Blocked', time: '2 hours ago', severity: 'high', ip: '194.26.29.112' }
];

export const CHART_DATA = [
  { day: 'Mon', blocked: 12, warned: 5, allowed: 180 },
  { day: 'Tue', blocked: 19, warned: 8, allowed: 210 },
  { day: 'Wed', blocked: 14, warned: 4, allowed: 245 },
  { day: 'Thu', blocked: 22, warned: 9, allowed: 230 },
  { day: 'Fri', blocked: 18, warned: 6, allowed: 260 },
  { day: 'Sat', blocked: 8,  warned: 2, allowed: 140 },
  { day: 'Sun', blocked: 6,  warned: 1, allowed: 120 }
];

export const INTEGRATIONS = [
  { name: 'Google Cloud Threat Intelligence', type: 'Threat Database', logo: '☁️', color: 'from-blue-500 to-indigo-600' },
  { name: 'Microsoft Security APIs', type: 'Identity & API', logo: '🪟', color: 'from-cyan-500 to-blue-600' },
  { name: 'VirusTotal Database', type: 'Malware Hash Check', logo: '∑', color: 'from-blue-600 to-violet-600' },
  { name: 'SIEM / IT Systems', type: 'Institutional IT', logo: '💾', color: 'from-slate-700 to-slate-900' },
  { name: 'CrowdStrike Intelligence', type: 'Endpoint Security', logo: '🦅', color: 'from-red-500 to-amber-600' },
  { name: 'Cloudflare Zero Trust', type: 'DNS & Edge API', logo: '🟧', color: 'from-orange-500 to-amber-500' }
];
