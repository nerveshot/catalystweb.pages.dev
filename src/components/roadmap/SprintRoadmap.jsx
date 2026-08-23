import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Zap, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function SprintRoadmap({ onOpenProjectModal }) {
  const sprintDays = [
    {
      day: 'Day 1',
      title: 'Strategy, Wireframing & Scope Lock',
      desc: 'Deep-dive discovery session, sitemap finalization, conversion path mapping, and core architectural setup.',
      badge: 'Kickoff',
      badgeColor: 'cyan'
    },
    {
      day: 'Days 2–3',
      title: 'High-Fidelity UI & Interactive Prototype',
      desc: 'Full visual design, typography pairing, glassmorphism systems, and two (2) rounds of rapid feedback refinement.',
      badge: '2 Revisions',
      badgeColor: 'violet'
    },
    {
      day: 'Days 4–5',
      title: 'Bespoke React & Vanilla CSS Engineering',
      desc: 'Hand-crafted frontend code, interactive ROI/booking tools, form validation, and responsive device testing.',
      badge: 'Pure Code',
      badgeColor: 'emerald'
    },
    {
      day: 'Day 6',
      title: '100/100 Lighthouse Tuning & SEO Schema',
      desc: 'Brotli compression, AVIF image optimization, sub-0.4s asset bundling, OpenGraph tags, and semantic structured data.',
      badge: 'Speed Audit',
      badgeColor: 'gold'
    },
    {
      day: 'Day 7',
      title: 'Global Edge Launch & 100% IP Transfer',
      desc: 'DNS routing to 300+ Cloudflare data centers, automated SSL issuance, Git repository handover, and celebration!',
      badge: 'Launch',
      badgeColor: 'rose'
    }
  ];

  return (
    <section id="sprint" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Clock size={14} />
            <span>High-Velocity Execution</span>
          </div>
          <h2 className="section-title">
            The 7-Day Precision Delivery Sprint
          </h2>
          <p className="section-desc">
            No bureaucratic runarounds. No endless retainer fees. A disciplined, 7-day engineering sprint that moves from blank canvas to global edge deployment.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          {sprintDays.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-card-border)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: '900',
                    color: 'var(--aurora-cyan)'
                  }}
                >
                  {item.day}
                </span>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    background: 'rgba(79, 70, 229, 0.1)',
                    color: 'var(--aurora-violet)',
                    border: '1px solid rgba(79, 70, 229, 0.25)'
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '0.6rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 100% On-Time Guarantee Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(2, 132, 199, 0.06) 100%)',
            border: '1px solid rgba(5, 150, 105, 0.3)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(5, 150, 105, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--aurora-emerald)',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={26} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                100% On-Time Delivery Guarantee
              </div>
              <div style={{ fontSize: '0.875rem', color: '#065f46', fontWeight: '600' }}>
                If we don’t deliver your completed production build within 7 business days, we refund ₹2,500 per day of delay.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenProjectModal()}
            className="btn btn-glow-emerald"
          >
            <span>Book Next Available Sprint</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
