import React from 'react';
import { Star, ShieldCheck, Sparkles, Quote, Zap } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="section-title">
            Engineered for High-Stakes Conversions
          </h2>
          <p className="section-desc">
            See how founders, creators, Michelin chefs, and academy deans unlocked exponential growth after migrating to LaunchPages edge architecture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Row: Metric & Rating */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: '800',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: 'var(--aurora-emerald)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {t.metric}
                  </div>

                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Row: Author Bio & TTFB Metric */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img
                    src={t.avatar}
                    alt={t.client}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(99, 102, 241, 0.4)' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>{t.client}</span>
                      {t.verified && <ShieldCheck size={14} color="#06b6d4" />}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {t.role} • {t.company}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PageSpeed</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#10b981' }}>{t.speedScore} ({t.ttfb})</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
