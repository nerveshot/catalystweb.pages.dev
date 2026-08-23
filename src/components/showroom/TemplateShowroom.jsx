import React, { useState } from 'react';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '../../data/templatesData';
import { Sparkles, Monitor, ArrowRight, CheckCircle2, Flame, Cpu, Utensils, GraduationCap, Building2, HeartPulse, Palette, SlidersHorizontal, Activity, Award, Check, Layers, Bell } from 'lucide-react';

function TemplateDirectPreview({ template, onSelectTemplate }) {
  // Mini interactive state for each template type directly visible on the card
  const [activeTab, setActiveTab] = useState(0);
  const [sliderVal, setSliderVal] = useState(50);
  const [guestCount, setGuestCount] = useState(2);

  switch (template.id) {
    case 'nexus':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#0284c7' }}>
              <Activity size={14} />
              <span>Live Edge PoP Latency Test</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '700', color: '#059669', background: 'rgba(5,150,105,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              Sub-10ms Global
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>🇺🇸 US-East</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#059669' }}>8ms</div>
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>🇩🇪 Frankfurt</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#0284c7' }}>12ms</div>
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>🇯🇵 Tokyo</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#0284c7' }}>16ms</div>
            </div>
          </div>

          <div style={{ marginTop: '0.6rem', padding: '0.45rem 0.6rem', background: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem' }}>
            <span style={{ color: '#64748b', fontWeight: '600' }}>Cloudflare Edge ROI:</span>
            <span style={{ fontWeight: '800', color: '#059669' }}>Save ₹37,000+/mo vs AWS</span>
          </div>
        </div>
      );

    case 'aura':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#db2777' }}>
              <Flame size={14} />
              <span>Creator Media Kit & Rate Card</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '700', color: '#db2777', background: 'rgba(219,39,119,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              5.1M Total Reach
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid rgba(236,72,153,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>TikTok</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#db2777' }}>2.4M</div>
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>YouTube</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#9333ea' }}>1.8M</div>
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid rgba(244,63,94,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Instagram</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#e11d48' }}>940K</div>
            </div>
          </div>

          <div style={{ marginTop: '0.6rem', padding: '0.45rem 0.6rem', background: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem' }}>
            <span style={{ color: '#64748b', fontWeight: '600' }}>Reel + Story Package:</span>
            <span style={{ fontWeight: '800', color: '#0f172a' }}>₹40,000 est.</span>
          </div>
        </div>
      );

    case 'maison':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#d97706' }}>
              <Utensils size={14} />
              <span>Michelin Table Booking Flow</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '800', color: '#b45309', background: 'rgba(217,119,6,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              2 Michelin Stars
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.6rem' }}>
            {[1, 2, 4, 6].map((num) => (
              <button
                key={num}
                onClick={() => setGuestCount(num)}
                style={{
                  flex: 1,
                  padding: '0.35rem 0',
                  borderRadius: '0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  background: guestCount === num ? '#d97706' : '#ffffff',
                  color: guestCount === num ? '#ffffff' : '#475569',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
              >
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </button>
            ))}
          </div>

          <div style={{ padding: '0.45rem 0.6rem', background: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem' }}>
            <span style={{ color: '#64748b', fontWeight: '600' }}>Atmosphere: Chef’s Counter</span>
            <span style={{ fontWeight: '800', color: '#059669' }}>Available 20:00</span>
          </div>
        </div>
      );

    case 'vanguard':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#0284c7' }}>
              <GraduationCap size={14} />
              <span>St. Xavier's Collegiate Portal</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '800', color: '#b45309', background: 'rgba(217,119,6,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              NAAC 'A' Accredited
            </span>
          </div>

          <div style={{ padding: '0.45rem 0.6rem', background: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', color: '#dc2626', fontWeight: '700' }}>
            <Bell size={12} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Admissions 2026 Live: BBA, BCA & Senior Wings
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem', textAlign: 'center' }}>
            <div style={{ background: '#ffffff', padding: '0.35rem', borderRadius: '0.35rem', border: '1px solid #e2e8f0', fontSize: '0.68rem', fontWeight: '700', color: '#0f172a' }}>
              BBA 4-Yr NEP
            </div>
            <div style={{ background: '#ffffff', padding: '0.35rem', borderRadius: '0.35rem', border: '1px solid #e2e8f0', fontSize: '0.68rem', fontWeight: '700', color: '#0f172a' }}>
              BCA Cloud/AI
            </div>
            <div style={{ background: '#ffffff', padding: '0.35rem', borderRadius: '0.35rem', border: '1px solid #e2e8f0', fontSize: '0.68rem', fontWeight: '700', color: '#0f172a' }}>
              B.Com Hons
            </div>
          </div>
        </div>
      );

    case 'apex':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#059669' }}>
              <Layers size={14} />
              <span>Architectural Blueprint CAD</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '800', color: '#059669', background: 'rgba(5,150,105,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              Geneva • Mumbai
            </span>
          </div>

          <div style={{ height: '60px', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, #ffffff 100%)', border: '1px dashed #059669', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0f172a' }}>Sky Penthouse (4,850 SQ FT)</div>
            <div style={{ fontSize: '0.65rem', color: '#059669', fontWeight: '700' }}>360° Harbor View • Private Pool</div>
          </div>

          <div style={{ marginTop: '0.6rem', padding: '0.45rem 0.6rem', background: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem' }}>
            <span style={{ color: '#64748b', fontWeight: '600' }}>Asking Price:</span>
            <span style={{ fontWeight: '900', color: '#059669' }}>₹12 Cr</span>
          </div>
        </div>
      );

    case 'pulse':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#0284c7' }}>
              <SlidersHorizontal size={14} />
              <span>Before & After Smile Reveal</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '800', color: '#0284c7', background: 'rgba(2,132,199,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              820+ Smiles
            </span>
          </div>

          <div style={{ position: 'relative', height: '60px', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: '0.5rem' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0d9488 0%, #042f2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '0.75rem', color: '#fff', fontSize: '0.68rem', fontWeight: '800' }}>
              AFTER: Porcelain BL2
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: `${sliderVal}%`, background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)', display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', color: '#fff', fontSize: '0.68rem', fontWeight: '800', borderRight: '2px solid #0284c7' }}>
              BEFORE
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      );

    case 'zenith':
      return (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: '#7c3aed' }}>
              <Palette size={14} />
              <span>Brutalist Awards Portfolio</span>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: '800', color: '#7c3aed', background: 'rgba(124,58,237,0.1)', padding: '0.15rem 0.45rem', borderRadius: '9999px' }}>
              14x Awwwards SOTD
            </span>
          </div>

          <div style={{ background: '#ffffff', padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', marginBottom: '0.5rem' }}>
            <div style={{ fontSize: '0.65rem', color: '#7c3aed', fontWeight: '800', textTransform: 'uppercase' }}>Kronos Quantitative</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#0f172a' }}>AI Hedge Fund Platform</div>
            <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '800', marginTop: '0.15rem' }}>+580% Investor Inquiries</div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

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
            Every template is a living, functional digital flagship with direct interactive component blueprints visible right on the page. Test them live or open the full sandbox emulator.
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
                  fontWeight: '700',
                  background: isActive ? 'var(--gradient-aurora)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid transparent' : '1px solid var(--bg-card-border)',
                  boxShadow: isActive ? '0 4px 15px rgba(79, 70, 229, 0.3)' : 'var(--shadow-sm)',
                  transition: 'all 200ms ease',
                  cursor: 'pointer'
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
                border: '1px solid var(--bg-card-border)',
                background: '#ffffff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              
              {/* Card Preview Header Banner */}
              <div
                style={{
                  padding: '1.75rem 1.75rem 1.25rem 1.75rem',
                  background: tpl.previewBg,
                  borderBottom: '1px solid var(--bg-card-border)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      letterSpacing: '0.08em',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: tpl.accentColor,
                      border: `1px solid ${tpl.accentColor}40`,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {tpl.badge}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      border: '1px solid var(--bg-card-border)',
                      fontWeight: '700',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tpl.categoryLabel}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: 'var(--text-primary)',
                    lineHeight: '1.2',
                    marginBottom: '0.35rem'
                  }}
                >
                  {tpl.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: tpl.accentColor, fontWeight: '700' }}>
                  {tpl.tagline}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {tpl.description}
                </p>

                {/* Direct Visual Component Blueprint */}
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                    Direct Live UI Component Blueprint:
                  </div>
                  <TemplateDirectPreview template={tpl} onSelectTemplate={onSelectTemplate} />
                </div>

                {/* Scorecard Strip */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.65rem',
                    background: '#f8fafc',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--bg-card-border)',
                    marginBottom: '1.25rem',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>PAGE SPEED</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#059669' }}>{tpl.metrics.score}</div>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--bg-card-border)', borderRight: '1px solid var(--bg-card-border)' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>LCP LOAD</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#0284c7' }}>{tpl.metrics.speed}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>IMPACT</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#d97706' }}>{tpl.metrics.conversion}</div>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                    Included Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {tpl.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={14} color={tpl.accentColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-card-border)' }}>
                  <button
                    onClick={() => onSelectTemplate(tpl)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.75rem 0.75rem', fontSize: '0.825rem' }}
                  >
                    <Monitor size={15} />
                    <span>Test Full Sandbox</span>
                  </button>

                  <button
                    onClick={() => onAdoptTemplate(tpl.name)}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.75rem 0.75rem', fontSize: '0.825rem' }}
                  >
                    <span>Adopt For Brand</span>
                    <ArrowRight size={15} />
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
