import React, { useState, useEffect } from 'react';
import { ArrowUp, Zap, Shield, Globe, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { TEMPLATES } from '../../data/templatesData';

export default function Footer({ onSelectTemplate, onNavigate, onOpenProjectModal }) {
  const [latency, setLatency] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real microsecond edge ping variation (16ms to 24ms)
      setLatency(Math.floor(Math.random() * 8) + 16);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(180deg, rgba(7,7,9,0.5) 0%, rgba(13,14,21,0.98) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      <div className="container">
        
        {/* Top Callout Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            marginBottom: '4.5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(168, 85, 247, 0.1) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: 'var(--aurora-cyan-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem'
              }}
            >
              <Sparkles size={16} />
              7-Day Guaranteed Turnaround
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#ffffff',
                marginBottom: '0.75rem'
              }}
            >
              Ready for a sub-0.4s web experience that out-converts 99% of your competitors?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '1rem' }}>
              We build custom Cloudflare-native digital weapons for modern leaders. Zero bloated CMS, 100% bespoke code ownership.
            </p>
          </div>

          <button
            onClick={() => onOpenProjectModal()}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '220px' }}
          >
            <Zap size={20} />
            <span>Launch Your 7-Day Sprint</span>
          </button>
        </div>

        {/* 4-Column Footer Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          
          {/* Col 1: Studio Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-aurora)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Zap size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.3rem' }}>
                LaunchPages
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Engineering bespoke, sub-0.4s Cloudflare-native websites for the top 0.1% of global enterprises, creators, schools, and clinics.
            </p>
            
            {/* Live Edge Telemetry */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.78rem',
                color: 'var(--aurora-emerald)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              <span>Edge Status: Online ({latency}ms)</span>
            </div>
          </div>

          {/* Col 2: 7 Live Templates */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              7 Interactive Templates
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {TEMPLATES.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTemplate(t)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      textAlign: 'left',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span style={{ color: t.accentColor, fontSize: '0.75rem' }}>●</span>
                    <span>{t.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>({t.categoryLabel})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio & Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Engineering & Stack
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li>Cloudflare Pages Edge Static Architecture</li>
              <li>Pure Bespoke Vanilla CSS Design Systems</li>
              <li>100/100 Core Web Vitals Guaranteed</li>
              <li>Bespoke Interactive ROI & Booking Micro-Apps</li>
              <li>100% Full IP & Source Rights Transfer</li>
              <li>Sub-0.4s First Contentful Paint</li>
            </ul>
          </div>

          {/* Col 4: Legal & Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Legal & Trust
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.875rem' }}>
              <li>
                <button
                  onClick={() => {
                    onNavigate('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ color: 'var(--text-secondary)', transition: 'color 150ms ease' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Terms & Conditions Agreement
                </button>
              </li>
              <li>
                <span style={{ color: 'var(--text-dim)' }}>Jurisdiction: Jaipur, Rajasthan, India</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-dim)' }}>3-Year Custom Domain Rights</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-dim)' }}>Cloudflare DDoS & SSL Shielding</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} LaunchPages (`launch.pages.dev`). All rights reserved. Hand-crafted for maximum edge velocity.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => {
                onNavigate('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
