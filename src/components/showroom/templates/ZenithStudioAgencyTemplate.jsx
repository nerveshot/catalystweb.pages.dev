import React, { useState } from 'react';
import { Palette, Sparkles, Award, ArrowRight, CheckCircle2, Zap, Layers, Globe, Terminal } from 'lucide-react';

export default function ZenithStudioAgencyTemplate({ onAdoptTemplate }) {
  const [themeMode, setThemeMode] = useState('neon'); // 'neon' or 'dark'
  const [caseFilter, setCaseFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'fintech',
      title: 'KRONOS QUANTITATIVE',
      client: 'AI Hedge Fund Platform',
      metric: '$42M Series B & +580% Inquiries',
      awards: 'Awwwards Site of the Day • FWA of the Day'
    },
    {
      id: 2,
      category: 'crypto',
      title: 'HYPERION PROTOCOL',
      client: 'Zero-Knowledge Layer-2 Chain',
      metric: '$1.8B TVL at Genesis Mainnet',
      awards: 'Awwwards Developer Award • CSSDA Best UI'
    },
    {
      id: 3,
      category: 'luxury',
      title: 'VERVE AUTOMOTIVE',
      client: 'Bespoke Electric Hypercars',
      metric: '100% Limited Edition Sold Out',
      awards: 'D&AD Yellow Pencil 2026'
    }
  ];

  const filtered = caseFilter === 'all' ? caseStudies : caseStudies.filter(c => c.category === caseFilter);

  const isNeon = themeMode === 'neon';

  return (
    <div
      style={{
        background: isNeon ? '#07030e' : '#121212',
        color: '#ffffff',
        padding: '2rem 1.5rem',
        fontFamily: 'var(--font-sans)',
        minHeight: '100%',
        transition: 'background 300ms ease'
      }}
    >
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: isNeon ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: isNeon ? 'linear-gradient(135deg, #a855f7, #ec4899)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
            <Palette size={18} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-hero)', fontWeight: '900', fontSize: '1.25rem', letterSpacing: '0.08em', color: '#ffffff' }}>
              ZENITH <span style={{ color: isNeon ? '#a855f7' : '#94a3b8' }}>STUDIO</span>
            </span>
          </div>
        </div>

        {/* Theme Mode Switcher & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', padding: '0.2rem', borderRadius: '6px', fontSize: '0.72rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setThemeMode('neon')}
              style={{
                padding: '0.3rem 0.6rem',
                borderRadius: '4px',
                background: isNeon ? '#a855f7' : 'transparent',
                color: '#fff',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Neon
            </button>
            <button
              onClick={() => setThemeMode('dark')}
              style={{
                padding: '0.3rem 0.6rem',
                borderRadius: '4px',
                background: !isNeon ? '#334155' : 'transparent',
                color: '#fff',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Minimal
            </button>
          </div>

          <button
            onClick={() => onAdoptTemplate && onAdoptTemplate('Zenith Studio (Brutalist-Luxe Design Agency)')}
            className="btn btn-primary btn-sm"
            style={{ background: isNeon ? 'linear-gradient(135deg, #a855f7, #ec4899)' : '#ffffff', color: isNeon ? '#fff' : '#000', border: 'none', fontWeight: '800', fontSize: '0.8rem' }}
          >
            <span>Adopt Zenith</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: isNeon ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.08)', border: isNeon ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', color: isNeon ? '#c084fc' : '#cbd5e1', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          <Sparkles size={14} />
          <span>BRUTALIST DIGITAL CRAFT & KINETIC CODE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: '900', lineHeight: '1.05', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          WE CRAFT UNIGNORABLE DIGITAL EMPIRES.
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', maxWidth: '640px' }}>
          Merging high-fashion art direction, custom WebGL shaders, and sub-0.4s Cloudflare performance for venture-backed founders and culture-defining brands.
        </p>
      </div>

      {/* Awards Showcase Bar */}
      <div style={{ background: isNeon ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.04)', border: isNeon ? '1px solid rgba(168,85,247,0.2)' : '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem' }}>
          <Award size={18} color={isNeon ? '#a855f7' : '#fff'} />
          <span>14x Awwwards SOTD</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem' }}>
          <Zap size={18} color={isNeon ? '#ec4899' : '#fff'} />
          <span>8x FWA of the Day</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem' }}>
          <Sparkles size={18} color={isNeon ? '#38bdf8' : '#fff'} />
          <span>3x D&AD Yellow Pencils</span>
        </div>
      </div>

      {/* Interactive Feature 1: Filterable Case Studies with Impact Metrics */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800' }}>
            Selected Works & Valuation Multipliers
          </h3>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'fintech', label: 'AI & Fintech' },
              { id: 'crypto', label: 'Web3 & L2' },
              { id: 'luxury', label: 'Luxury Automotives' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setCaseFilter(btn.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: caseFilter === btn.id ? (isNeon ? '#a855f7' : '#ffffff') : 'rgba(255,255,255,0.06)',
                  color: caseFilter === btn.id ? (isNeon ? '#ffffff' : '#000000') : '#94a3b8',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              style={{
                padding: '1.5rem',
                background: isNeon ? 'rgba(20, 10, 30, 0.8)' : 'rgba(255,255,255,0.03)',
                borderRadius: '0.75rem',
                border: isNeon ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: isNeon ? '#c084fc' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.client}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.02em', margin: '0.35rem 0' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: isNeon ? '#34d399' : '#10b981', marginBottom: '0.75rem' }}>
                {item.metric}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem' }}>
                🏆 {item.awards}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
