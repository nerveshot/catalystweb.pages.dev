import React, { useState } from 'react';
import { HeartPulse, Sparkles, ShieldCheck, ArrowRight, Stethoscope, SlidersHorizontal } from 'lucide-react';

export default function PulseSmilesMedicalTemplate({ onAdoptTemplate }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedInsurance, setSelectedInsurance] = useState('delta');
  const [selectedProcedure, setSelectedProcedure] = useState('veneers');
  const [consultBooked, setConsultBooked] = useState(false);

  const procedures = {
    veneers: {
      title: 'Handcrafted Porcelain Veneers',
      time: '2 Visits (7 Days)',
      desc: 'Ultra-thin, minimally invasive Swiss ceramic veneers matched to your facial symmetry.',
      coverage: 'Up to ₹25,000 Covered by Tier-1 Plans',
      rating: '4.98/5 (820+ Smiles)'
    },
    invisalign: {
      title: 'Invisalign® Diamond Plus Clear Aligners',
      time: '4–9 Months Average',
      desc: '3D AI-guided progressive aligners for invisible orthodontic harmony and bite correction.',
      coverage: 'Orthodontic Benefit Applied (₹18,000)',
      rating: '4.95/5 (1,400+ Smiles)'
    },
    implants: {
      title: 'Same-Day Full Arch Titanium Implants',
      time: 'Immediate Loading',
      desc: 'Permanent biological zirconia restorations placed with computer-guided surgical precision.',
      coverage: 'Major Restorative Benefit Eligible',
      rating: '5.0/5 (650+ Implants)'
    }
  };

  const insurancePlans = [
    { id: 'delta', name: 'Delta Dental Premier' },
    { id: 'cigna', name: 'Cigna Dental PPO' },
    { id: 'metlife', name: 'MetLife PDP Plus' },
    { id: 'aetna', name: 'Aetna Dental Direct' },
  ];

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0284c7, #0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeartPulse size={18} color="#fff" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.02em', color: '#0f172a' }}>
              PULSE <span style={{ color: '#0284c7' }}>SMILES</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#0d9488', letterSpacing: '0.1em', fontWeight: '800' }}>HARLEY STREET & BEVERLY HILLS</div>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Pulse Smiles (Medical & Dental Clinic)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #0284c7, #0d9488)', border: 'none', color: '#fff', fontWeight: '800', fontSize: '0.8rem' }}
        >
          <span>Adopt Pulse Smiles</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.3)', borderRadius: '9999px', color: '#0284c7', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
          <Sparkles size={14} />
          <span>COSMETIC DENTISTRY & FACIAL AESTHETICS</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#0f172a' }}>
          Architecting Natural, Radiant Smiles
        </h2>
        <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Combining digital 3D facial mapping, biological dentistry, and handcrafted Swiss porcelain to design smiles that inspire absolute confidence.
        </p>
      </div>

      {/* Interactive Feature 1: Before/After Interactive Smile Reveal Slider */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#0284c7' }}>
              <SlidersHorizontal size={20} />
              <span>Interactive Before & After Smile Transformation Slider</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Drag the interactive divider to reveal the porcelain veneer transformation.</p>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: '800', background: 'rgba(2,132,199,0.08)', padding: '0.35rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(2,132,199,0.2)' }}>
            Case #892: Full Upper Arch Transformation
          </div>
        </div>

        {/* Visual Split-Screen Slider */}
        <div
          style={{
            position: 'relative',
            height: '240px',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            userSelect: 'none',
            marginBottom: '1rem'
          }}
        >
          {/* After View (Right Layer) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #0d9488 0%, #042f2e 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              padding: '2rem'
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.95)', padding: '0.6rem 1.25rem', borderRadius: '0.75rem', border: '1px solid #2dd4bf', textAlign: 'right', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: '800' }}>AFTER TRANSFORMATION</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#0f172a' }}>Handcrafted Porcelain Veneers</div>
              <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '600' }}>Natural Shade BL2 • Perfect Gum Symmetry</div>
            </div>
          </div>

          {/* Before View (Left Layer Clipped) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: `${sliderPos}%`,
              background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
              borderRight: '3px solid #0284c7'
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.95)', padding: '0.6rem 1.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', width: 'fit-content', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: '800' }}>INITIAL STATE</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#0f172a' }}>Enamel Wear & Crowding</div>
              <div style={{ fontSize: '0.75rem', color: '#475569' }}>Discoloration & Micro-Fractures</div>
            </div>
          </div>

          {/* Slider Handle Indicator */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${sliderPos}%`,
              transform: 'translate(-50%, -50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#0284c7',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(2,132,199,0.4)',
              pointerEvents: 'none',
              fontWeight: '900',
              fontSize: '0.85rem'
            }}
          >
            ↔
          </div>
        </div>

        {/* Range Controller */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      {/* Interactive Feature 2: Procedure Selector & Insurance Eligibility */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* Procedures */}
        <div style={{ background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
            <Stethoscope size={18} color="#0284c7" />
            <span>Select Aesthetic Procedure</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {Object.keys(procedures).map((key) => {
              const proc = procedures[key];
              const isSelected = selectedProcedure === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedProcedure(key)}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '0.6rem',
                    background: isSelected ? 'rgba(2,132,199,0.08)' : '#f8fafc',
                    border: isSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>{proc.title}</span>
                    <span style={{ fontSize: '0.7rem', color: '#0284c7', fontWeight: '700' }}>{proc.time}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.25rem' }}>{proc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insurance Coverage Checker */}
        <div style={{ background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
            <ShieldCheck size={18} color="#059669" />
            <span>Instant Insurance Pre-Check</span>
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
            Select your provider to verify out-of-network benefits.
          </p>

          <select
            value={selectedInsurance}
            onChange={(e) => setSelectedInsurance(e.target.value)}
            className="form-select"
            style={{ marginBottom: '1rem', fontSize: '0.85rem' }}
          >
            {insurancePlans.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>

          <div style={{ background: 'rgba(5,150,105,0.08)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(5,150,105,0.25)', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#065f46', fontWeight: '600' }}>Estimated Plan Pre-Approval:</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#059669' }}>
              ✓ {procedures[selectedProcedure].coverage}
            </div>
          </div>

          {consultBooked ? (
            <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(5,150,105,0.1)', border: '1px solid #059669', color: '#065f46', fontSize: '0.8rem', textAlign: 'center', fontWeight: '800' }}>
              ✓ Consultation Requested with Dr. Kazemi, DDS!
            </div>
          ) : (
            <button
              onClick={() => setConsultBooked(true)}
              className="btn btn-primary btn-sm"
              style={{ background: 'linear-gradient(135deg, #0284c7, #0d9488)', color: '#fff', fontWeight: '800' }}
            >
              Book Clinical Smile Assessment
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
