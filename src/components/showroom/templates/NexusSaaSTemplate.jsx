import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Shield, ArrowRight, CheckCircle2, Server, Globe, DollarSign } from 'lucide-react';

export default function NexusSaaSTemplate({ onAdoptTemplate }) {
  const [requests, setRequests] = useState(5000000); // 5M requests
  const [annualBilling, setAnnualBilling] = useState(true);
  const [activeRegion, setActiveRegion] = useState('us-east');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [pingLatencies, setPingLatencies] = useState({
    'us-east': 8,
    'eu-central': 12,
    'ap-northeast': 16,
    'sa-east': 22
  });

  // Dynamic compute savings calculation vs AWS Lambda / Traditional Server
  const standardCost = Math.round((requests / 1000000) * 45); // $45 per 1M reqs on legacy stack
  const nexusCost = Math.round((requests / 1000000) * 8.5); // $8.50 per 1M reqs on Cloudflare Edge
  const monthlySavings = standardCost - nexusCost;
  const annualSavings = monthlySavings * 12;

  const regions = [
    { id: 'us-east', name: 'US-East (Virginia)', flag: '🇺🇸' },
    { id: 'eu-central', name: 'EU-Central (Frankfurt)', flag: '🇩🇪' },
    { id: 'ap-northeast', name: 'AP-Tokyo (Japan)', flag: '🇯🇵' },
    { id: 'sa-east', name: 'SA-São Paulo (Brazil)', flag: '🇧🇷' }
  ];

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSubmitted(true);
    }
  };

  return (
    <div style={{ background: '#090a10', color: '#f8fafc', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Template Header / Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
            NEXUS <span style={{ color: '#06b6d4' }}>3.0</span>
          </span>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Nexus 3.0 (AI & SaaS)')}
          className="btn btn-primary btn-sm"
          style={{ fontSize: '0.8rem' }}
        >
          <span>Adopt Nexus 3.0</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '9999px', color: '#818cf8', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1rem' }}>
          <Zap size={14} />
          <span>ZERO-COLD-START EDGE COMPUTE ENGINE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1rem' }}>
          Deploy Distributed AI Workflows at <span style={{ color: '#06b6d4' }}>Sub-10ms Global Latency</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Execute stateful LLM pipelines, vector similarity queries, and real-time streaming directly on Cloudflare’s 300+ edge PoPs without provisioning a single server.
        </p>
      </div>

      {/* Interactive Feature 1: Real-Time Global Latency Monitor */}
      <div style={{ background: 'rgba(15, 17, 28, 0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '0.95rem' }}>
              <Activity size={18} color="#06b6d4" />
              <span>Real-Time Global PoP Edge Latency</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Simulated real-time Round Trip Time (RTT) across Tier-1 edge data centers.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id)}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  background: activeRegion === reg.id ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.04)',
                  border: activeRegion === reg.id ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.06)',
                  color: activeRegion === reg.id ? '#ffffff' : '#94a3b8'
                }}
              >
                <span>{reg.flag} {reg.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Latency Meter Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
          {regions.map((reg) => {
            const lat = pingLatencies[reg.id];
            const isSelected = activeRegion === reg.id;
            return (
              <div
                key={reg.id}
                style={{
                  padding: '0.85rem',
                  borderRadius: '0.75rem',
                  background: isSelected ? 'rgba(99,102,241,0.15)' : 'rgba(0,0,0,0.3)',
                  border: isSelected ? '1px solid rgba(99,102,241,0.4)' : '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 200ms ease'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{reg.name}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: lat < 15 ? '#10b981' : '#06b6d4', marginTop: '0.25rem' }}>
                  {lat} <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>ms</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.2rem' }}>
                  <CheckCircle2 size={10} /> 99.999% SLA
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Feature 2: Compute Cost Savings Slider */}
      <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1rem', color: '#34d399' }}>
              <DollarSign size={20} />
              <span>Interactive Cloud Infrastructure ROI Calculator</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Compare Nexus Edge vs Legacy AWS / Vercel compute bills.</p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Monthly API Invocations:</span>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
              {(requests / 1000000).toFixed(1)}M requests
            </div>
          </div>
        </div>

        <input
          type="range"
          min="1000000"
          max="50000000"
          step="1000000"
          value={requests}
          onChange={(e) => setRequests(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '1.5rem' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Legacy AWS Lambda Bill</div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#f87171', marginTop: '0.25rem' }}>
              ${standardCost.toLocaleString()} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>/mo</span>
            </div>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.2)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Nexus 3.0 Edge Bill</div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#06b6d4', marginTop: '0.25rem' }}>
              ${nexusCost.toLocaleString()} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>/mo</span>
            </div>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(16,185,129,0.15)', borderRadius: '0.75rem', border: '1px solid rgba(16,185,129,0.4)' }}>
            <div style={{ fontSize: '0.75rem', color: '#a7f3d0', fontWeight: '700' }}>Annual Cloud Savings</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#10b981', marginTop: '0.25rem' }}>
              +${annualSavings.toLocaleString()} <span style={{ fontSize: '0.75rem', color: '#a7f3d0' }}>/yr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Toggle & Waitlist Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* Tier Pricing */}
        <div style={{ background: 'rgba(15, 17, 28, 0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Enterprise Pro Tier</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.5rem', borderRadius: '9999px', fontSize: '0.72rem' }}>
              <span style={{ color: annualBilling ? '#94a3b8' : '#fff' }}>Monthly</span>
              <button
                onClick={() => setAnnualBilling(!annualBilling)}
                style={{
                  width: '32px',
                  height: '18px',
                  borderRadius: '9999px',
                  background: annualBilling ? '#6366f1' : '#475569',
                  position: 'relative',
                  padding: '2px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', transform: annualBilling ? 'translateX(14px)' : 'translateX(0)', transition: 'transform 150ms ease' }} />
              </button>
              <span style={{ color: annualBilling ? '#06b6d4' : '#94a3b8', fontWeight: '700' }}>Annual (-20%)</span>
            </div>
          </div>

          <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.5rem' }}>
            ${annualBilling ? '79' : '99'} <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '500' }}>/ month</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: '#cbd5e1', marginTop: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#10b981" /> 100M Global Edge Compute Invocations
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#10b981" /> Unlimited Vectorize Embedding Indexes
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#10b981" /> 99.999% SLA Uptime Guarantee
            </li>
          </ul>
        </div>

        {/* Live Waitlist Hook */}
        <div style={{ background: 'rgba(15, 17, 28, 0.7)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.35rem' }}>Get Instant Sandbox Access</div>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
            Join 4,200+ engineers building latency-critical autonomous apps.
          </p>

          {waitlistSubmitted ? (
            <div style={{ padding: '0.85rem', borderRadius: '0.5rem', background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#34d399', fontSize: '0.85rem', textAlign: 'center', fontWeight: '600' }}>
              ✓ API Sandbox Key dispatched to {waitlistEmail}!
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                required
                placeholder="developer@company.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                style={{ flex: 1, padding: '0.65rem 0.85rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem' }}
              />
              <button type="submit" className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap' }}>
                Join
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
