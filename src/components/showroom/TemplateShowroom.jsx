import React, { useState } from 'react';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '../../data/templatesData';
import { Sparkles, Monitor, ArrowRight, CheckCircle2, Zap, Gauge, Flame, Cpu, Utensils, GraduationCap, Building2, HeartPulse, Palette } from 'lucide-react';

export default function TemplateShowroom({ onSelectTemplate, onAdoptTemplate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'all'
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={16} />;
      case 'Flame': return <Flame size={16} />;
      case 'Utensils': return <Utensils size={16} />;
      case 'GraduationCap': return <GraduationCap size={16} />;
      case 'Building2': return <Building2 size={16} />;
      case 'HeartPulse': return <HeartPulse size={16} />;
      case 'Palette': return <Palette size={16} />;
      case 'Sparkles':
      default:
        return <Sparkles size={16} />;
    }
  };

  return (
    <section id="templates" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Template Showroom</span>
          </div>
          <h2 className="section-title">
            Explore 7 Live Interactive Industry Architectures
          </h2>
          <p className="section-desc">
            Unlike static design mockups, every LaunchPages template is a living, functional web application. Test them in real-time across Desktop, Tablet, and Mobile device viewports.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3.5rem'
          }}
        >
          {TEMPLATE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  background: isActive ? 'var(--gradient-aurora)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 0 20px rgba(99, 102, 241, 0.35)' : 'none',
                  transition: 'all 200ms ease'
                }}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Templates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.75) 0%, rgba(13, 14, 21, 0.95) 100%)',
                borderRadius: '1.25rem',
                overflow: 'hidden'
              }}
            >
              
              {/* Card Preview Header Banner */}
              <div
                style={{
                  padding: '2rem 1.75rem 1.5rem 1.75rem',
                  background: tpl.previewBg,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      letterSpacing: '0.08em',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(0, 0, 0, 0.5)',
                      color: tpl.accentColor,
                      border: `1px solid ${tpl.accentColor}40`,
                      textTransform: 'uppercase'
                    }}
                  >
                    {tpl.badge}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tpl.categoryLabel}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.65rem',
                    fontWeight: '900',
                    color: '#ffffff',
                    lineHeight: '1.2',
                    marginBottom: '0.35rem'
                  }}
                >
                  {tpl.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--aurora-cyan-light)', fontWeight: '600' }}>
                  {tpl.tagline}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {tpl.description}
                </p>

                {/* Scorecard Strip */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'rgba(0, 0, 0, 0.35)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>PAGE SPEED</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#10b981' }}>{tpl.metrics.score}</div>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>LCP LOAD</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--aurora-cyan-light)' }}>{tpl.metrics.speed}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>IMPACT</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--aurora-gold)' }}>{tpl.metrics.conversion}</div>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '1.75rem', flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Interactive Micro-App Capabilities:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    {tpl.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={15} color={tpl.accentColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <button
                    onClick={() => onSelectTemplate(tpl)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.875rem' }}
                  >
                    <Monitor size={16} />
                    <span>Test Sandbox</span>
                  </button>

                  <button
                    onClick={() => onAdoptTemplate(tpl.name)}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.875rem' }}
                  >
                    <span>Adopt For Brand</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
