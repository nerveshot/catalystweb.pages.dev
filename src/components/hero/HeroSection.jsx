import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Gauge, Clock, Code2, TrendingUp, Play } from 'lucide-react';

export default function HeroSection({ onOpenEstimator, onScrollToTemplates, onOpenProjectModal }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '9.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Top Floating Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <div
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              boxShadow: '0 0 25px rgba(99, 102, 241, 0.2)'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#06b6d4',
                boxShadow: '0 0 10px #06b6d4'
              }}
            />
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--aurora-cyan-light)', letterSpacing: '0.02em' }}>
              Sub-0.4s Cloudflare-Native Web Architecture
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>|</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
              7-Day Sprint Guarantee
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ textAlign: 'center', maxWidth: '1020px', margin: '0 auto 1.75rem auto' }}>
          <h1
            style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(2.5rem, 5.8vw, 4.75rem)',
              fontWeight: '900',
              lineHeight: '1.08',
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
              textTransform: 'normal'
            }}
          >
            We Engineer Websites for the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a5b4fc 0%, #38bdf8 45%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Top 0.1%
            </span>{' '}
            of Businesses, Creators & Schools.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
              maxWidth: '820px',
              margin: '0 auto',
              fontWeight: '400'
            }}
          >
            Replace sluggish WordPress monoliths and rigid builders with bespoke hand-crafted code compiled directly to 300+ global Cloudflare Edge data centers. Blistering sub-0.4s speed, 100/100 Google PageSpeed, and unmatched conversion rates.
          </p>
        </div>

        {/* Dual Primary CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4.5rem'
          }}
        >
          <button
            onClick={onScrollToTemplates}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '240px' }}
          >
            <Sparkles size={18} />
            <span>Explore 7 Live Interactive Templates</span>
          </button>

          <button
            onClick={onOpenEstimator}
            className="btn btn-secondary btn-lg"
            style={{ minWidth: '220px' }}
          >
            <Zap size={18} style={{ color: 'var(--aurora-cyan)' }} />
            <span>Instant Project Cost Estimator</span>
          </button>
        </div>

        {/* Live Performance Scorecard Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          
          {/* Card 1 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.9) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--aurora-emerald)'
                }}
              >
                <Gauge size={22} />
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--aurora-emerald)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px'
                }}
              >
                MOBILE & DESKTOP
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.1' }}>
              99-100<span style={{ fontSize: '1.2rem', color: 'var(--aurora-emerald)' }}>/100</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
              Google PageSpeed Score
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Sub-0.4s FCP with 0 layout shift (CLS).
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.9) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--aurora-violet-light)'
                }}
              >
                <Clock size={22} />
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--aurora-violet-light)',
                  background: 'rgba(99, 102, 241, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px'
                }}
              >
                ON-TIME GUARANTEED
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.1' }}>
              7-Day<span style={{ fontSize: '1.2rem', color: 'var(--aurora-violet-light)' }}> Sprint</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
              Concept to Global Launch
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              High-velocity execution without agency drag.
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.9) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--aurora-cyan-light)'
                }}
              >
                <Code2 size={22} />
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--aurora-cyan-light)',
                  background: 'rgba(6, 182, 212, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px'
                }}
              >
                ZERO VENDOR LOCK-IN
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.1' }}>
              100%<span style={{ fontSize: '1.2rem', color: 'var(--aurora-cyan-light)' }}> Rights</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
              Bespoke Code & IP Ownership
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Full Git repo, clean Vanilla CSS & React.
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.8) 0%, rgba(13, 14, 21, 0.9) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--aurora-gold)'
                }}
              >
                <TrendingUp size={22} />
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--aurora-gold)',
                  background: 'rgba(245, 158, 11, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px'
                }}
              >
                PROVEN ROI
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.1' }}>
              +3.4x<span style={{ fontSize: '1.2rem', color: 'var(--aurora-gold)' }}> Avg Lift</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
              Conversion & Lead Increase
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Calculated across 40+ client deployments.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
