import React, { useState } from 'react';
import { Building2, Compass, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ApexLivingRealEstateTemplate({ onAdoptTemplate }) {
  const [selectedPlan, setSelectedPlan] = useState('penthouse');
  const [brokerViewingBooked, setBrokerViewingBooked] = useState(false);

  const floorplans = {
    penthouse: {
      title: 'The Sky Penthouse Collection',
      size: '4,850 SQ FT (450 M²)',
      beds: '4 Bed • 5.5 Bath • Private Pool',
      price: '₹12,00,00,000 (₹12 Cr)',
      specs: ['Direct Private Keyed Elevator Access', '360° Panoramic Skyline & Harbor Views', '1,200 SQ FT Wraparound Cantilevered Terrace', 'Custom Italian Boffi Kitchen with Sub-Zero'],
    },
    horizon: {
      title: 'The Horizon Terrace Suite',
      size: '3,200 SQ FT (297 M²)',
      beds: '3 Bed • 3.5 Bath • Wine Cellar',
      price: '₹7,50,00,000 (₹7.5 Cr)',
      specs: ['Floor-to-Ceiling Schuco Triple Glazed Glass', 'Custom Poliform Wardrobes', 'Temperature-Controlled 400-Bottle Sommelier Cellar', '2 Dedicated Underground EV Parking Bays'],
    },
    duplex: {
      title: 'The Garden Duplex Residence',
      size: '2,450 SQ FT (228 M²)',
      beds: '2 Bed • 2.5 Bath • Private Zen Garden',
      price: '₹4,80,00,000 (₹4.8 Cr)',
      specs: ['Double-Height Architectural Atrium', 'Private Landscaped Japanese Zen Courtyard', 'Smart Home Lutron & Bang & Olufsen Acoustic Array', '24/7 White-Glove Concierge & Valet'],
    }
  };

  const current = floorplans[selectedPlan];

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #059669, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={18} color="#fff" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.05em', color: '#0f172a' }}>
              APEX <span style={{ color: '#059669' }}>LIVING</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#059669', letterSpacing: '0.1em', fontWeight: '800' }}>GENEVA • MUMBAI • MONACO</div>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Apex Living (Luxury Real Estate)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #059669, #10b981)', border: 'none', color: '#fff', fontSize: '0.8rem' }}
        >
          <span>Adopt Apex Living</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.3)', borderRadius: '9999px', color: '#059669', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
          <Compass size={14} />
          <span>SWISS ARCHITECTURAL MONOLITH • RESIDENCES AVAILABLE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#0f172a' }}>
          Unrivaled Architectural Penthouses
        </h2>
        <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Crafted with pure Swiss minimalism, floor-to-ceiling panoramic harbor vistas, cantilevered private infinity pools, and discrete white-glove security.
        </p>
      </div>

      {/* Interactive Feature 1: Architectural Floorplan & Blueprint Switcher */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#059669' }}>
              <Layers size={20} />
              <span>Interactive Residence & Floorplan Inspector</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Switch architectural configurations to inspect blueprints and unit specifications.</p>
          </div>

          {/* Unit Toggle Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {Object.keys(floorplans).map((planKey) => (
              <button
                key={planKey}
                onClick={() => setSelectedPlan(planKey)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: selectedPlan === planKey ? '#059669' : '#f1f5f9',
                  color: selectedPlan === planKey ? '#ffffff' : '#475569',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
              >
                {planKey.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Layout & Spec Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          
          {/* Blueprint Simulator Card */}
          <div style={{ background: '#f8fafc', borderRadius: '1rem', border: '1px solid #cbd5e1', padding: '1.5rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#059669', letterSpacing: '0.05em' }}>ARCHITECTURAL BLUEPRINT 1:100</span>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>CAD-REV-2026</span>
            </div>

            {/* Virtual Blueprint Grid Graphic */}
            <div style={{ height: '170px', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, #ffffff 80%)', border: '1px dashed #059669', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>{current.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#059669', marginTop: '0.2rem', fontWeight: '700' }}>{current.size}</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>{current.beds}</div>
              <div style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '0.65rem', color: '#94a3b8' }}>
                3D CAD PREVIEW
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>Asking Price:</span>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#059669' }}>{current.price}</span>
            </div>
          </div>

          {/* Specs List */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem' }}>
              Bespoke Residence Features:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#475569', marginBottom: '1.25rem' }}>
              {current.specs.map((spec, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            {brokerViewingBooked ? (
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(5,150,105,0.1)', border: '1px solid #059669', color: '#065f46', fontSize: '0.8rem', textAlign: 'center', fontWeight: '800' }}>
                ✓ Private Broker Consultation Confirmed for {current.title}!
              </div>
            ) : (
              <button
                onClick={() => setBrokerViewingBooked(true)}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', background: '#059669', color: '#fff', fontWeight: '800' }}
              >
                Schedule VIP Private Viewing
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
