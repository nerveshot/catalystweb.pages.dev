import React from 'react';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2, Zap, Scale, MapPin } from 'lucide-react';
import { TERMS_AND_CONDITIONS } from '../data/termsData';

export default function TermsPage({ onBackToHome, onOpenProjectModal }) {
  return (
    <div style={{ paddingTop: '8.5rem', paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>
      <div className="container-sm">
        
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Studio Flagship</span>
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Scale size={14} />
            <span>Master Service Agreement</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            {TERMS_AND_CONDITIONS.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div>Last Updated: <strong style={{ color: '#ffffff' }}>{TERMS_AND_CONDITIONS.lastUpdated}</strong></div>
            <div>Governing Jurisdiction: <strong style={{ color: 'var(--aurora-cyan-light)' }}>{TERMS_AND_CONDITIONS.jurisdiction}</strong></div>
            <div>Service: <strong style={{ color: '#ffffff' }}>Bespoke Web Development & Cloudflare Edge Hosting</strong></div>
          </div>
        </div>

        {/* Legal Articles Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {TERMS_AND_CONDITIONS.articles.map((art) => (
            <div
              key={art.id}
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.2)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: 'var(--aurora-cyan-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  §{art.number}
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>
                  {art.title}
                </h2>
              </div>

              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {art.content}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
            Ready to Engineer Your High-Performance Web Flagship?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 1.75rem auto', fontSize: '0.95rem' }}>
            Book your 7-Day Sprint with full legal transparency, 100% IP ownership, and sub-0.4s Cloudflare performance.
          </p>

          <button
            onClick={() => onOpenProjectModal()}
            className="btn btn-primary btn-lg"
          >
            <Zap size={18} />
            <span>Launch Your 7-Day Project Sprint</span>
          </button>
        </div>

      </div>
    </div>
  );
}
