import React, { useState } from 'react';
import { Palette, Sparkles, Award, ArrowRight, Zap } from 'lucide-react';

export default function ZenithStudioAgencyTemplate({ onAdoptTemplate }) {
  const [caseFilter, setCaseFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'fintech',
      title: 'KRONOS QUANTITATIVE',
      client: 'AI Hedge Fund Platform',
      metric: '₹45 Cr Series B & +580% Inquiries',
      awards: 'Awwwards Site of the Day • FWA of the Day'
    },
    {
      id: 2,
      category: 'crypto',
      title: 'HYPERION PROTOCOL',
      client: 'Zero-Knowledge Layer-2 Chain',
      metric: '₹1,200 Cr TVL at Genesis Mainnet',
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

  return (
    <div
      style={{
        background: '#f8fafc',
        color: '#0f172a',
        padding: '2rem 1.5rem',
        fontFamily: 'var(--font-sans)',
        minHeight: '100%'
      }}
    >
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'linear-gradient(135deg, #7c3aed, #db2777)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Palette size={18} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-hero)', fontWeight: '900', fontSize: '1.25rem', letterSpacing: '0.08em', color: '#0f172a' }}>
              ZENITH <span style={{ color: '#7c3aed' }}>STUDIO</span>
            </span>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Zenith Studio (Brutalist-Luxe Design Agency)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)', color: '#fff', border: 'none', fontWeight: '800', fontSize: '0.8rem' }}
        >
          <span>Adopt Zenith</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: '4px', color: '#7c3aed', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          <Sparkles size={14} />
          <span>BRUTALIST DIGITAL CRAFT & KINETIC CODE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: '900', lineHeight: '1.05', marginBottom: '1rem', letterSpacing: '-0.03em', color: '#0f172a' }}>
          WE CRAFT UNIGNORABLE DIGITAL EMPIRES.
        </h2>
        <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6', maxWidth: '640px' }}>
          Merging high-fashion art direction, custom WebGL shaders, and sub-0.4s Cloudflare performance for venture-backed founders and culture-defining brands.
        </p>
      </div>

      {/* Awards Showcase Bar */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem', color: '#0f172a' }}>
          <Award size={18} color="#7c3aed" />
          <span>14x Awwwards SOTD</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem', color: '#0f172a' }}>
          <Zap size={18} color="#db2777" />
          <span>8x FWA of the Day</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.85rem', color: '#0f172a' }}>
          <Sparkles size={18} color="#0284c7" />
          <span>3x D&AD Yellow Pencils</span>
        </div>
      </div>

      {/* Interactive Feature 1: Filterable Case Studies with Impact Metrics */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
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
                  background: caseFilter === btn.id ? '#7c3aed' : '#f1f5f9',
                  color: caseFilter === btn.id ? '#ffffff' : '#475569',
                  border: '1px solid #e2e8f0',
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
                background: '#ffffff',
                borderRadius: '0.75rem',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '800' }}>
                {item.client}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.02em', margin: '0.35rem 0', color: '#0f172a' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#059669', marginBottom: '0.75rem' }}>
                {item.metric}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '0.6rem' }}>
                🏆 {item.awards}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
