import React, { useState } from 'react';
import { Building2, Compass, Layers, Eye, Calendar, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ApexLivingRealEstateTemplate({ onAdoptTemplate }) {
  const [selectedPlan, setSelectedPlan] = useState('penthouse');
  const [activeRoom, setActiveRoom] = useState('salon');
  const [brokerViewingBooked, setBrokerViewingBooked] = useState(false);

  const floorplans = {
    penthouse: {
      title: 'The Sky Penthouse Collection',
      size: '4,850 SQ FT (450 M²)',
      beds: '4 Bed • 5.5 Bath • Private Pool',
      price: '$14,800,000',
      specs: ['Direct Private Keyed Elevator Access', '360° Panoramic Skyline & Harbor Views', '1,200 SQ FT Wraparound Cantilevered Terrace', 'Custom Italian Boffi Kitchen with Sub-Zero'],
      rooms: [
        { id: 'salon', label: 'Grand Living Salon (32ft Ceilings)' },
        { id: 'suite', label: 'Primary Master Wing & Spa Bath' },
        { id: 'terrace', label: 'Rooftop Infinity Edge Pool' }
      ]
    },
    horizon: {
      title: 'The Horizon Terrace Suite',
      size: '3,200 SQ FT (297 M²)',
      beds: '3 Bed • 3.5 Bath • Wine Cellar',
      price: '$9,200,000',
      specs: ['Floor-to-Ceiling Schuco Triple Glazed Glass', 'Custom Poliform Wardrobes', 'Temperature-Controlled 400-Bottle Sommelier Cellar', '2 Dedicated Underground EV Parking Bays'],
      rooms: [
        { id: 'salon', label: 'Panoramic Living & Dining' },
        { id: 'suite', label: 'En-Suite Master Retreat' },
        { id: 'terrace', label: 'Sunset Alfresco Lounge' }
      ]
    },
    duplex: {
      title: 'The Garden Duplex Residence',
      size: '2,450 SQ FT (228 M²)',
      beds: '2 Bed • 2.5 Bath • Private Zen Garden',
      price: '$6,450,000',
      specs: ['Double-Height Architectural Atrium', 'Private Landscaped Japanese Zen Courtyard', 'Smart Home Lutron & Bang & Olufsen Acoustic Array', '24/7 White-Glove Concierge & Valet'],
      rooms: [
        { id: 'salon', label: 'Double-Height Atrium Lounge' },
        { id: 'suite', label: 'Mezzanine Master Bedroom' },
        { id: 'terrace', label: 'Private Zen Botanical Garden' }
      ]
    }
  };

  const current = floorplans[selectedPlan];

  return (
    <div style={{ background: '#060b08', color: '#ecfdf5', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(16,185,129,0.2)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={18} color="#fff" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.05em', color: '#ffffff' }}>
              APEX <span style={{ color: '#10b981' }}>LIVING</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#34d399', letterSpacing: '0.1em' }}>GENEVA • NEW YORK • MONACO</div>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Apex Living (Luxury Real Estate)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #10b981, #047857)', border: 'none', color: '#fff', fontSize: '0.8rem' }}
        >
          <span>Adopt Apex Living</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '9999px', color: '#34d399', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1rem' }}>
          <Compass size={14} />
          <span>SWISS ARCHITECTURAL MONOLITH • RESIDENCES AVAILABLE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#ffffff' }}>
          Unrivaled Architectural Penthouses
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Crafted with pure Swiss minimalism, floor-to-ceiling panoramic harbor vistas, cantilevered private infinity pools, and discrete white-glove security.
        </p>
      </div>

      {/* Interactive Feature 1: Architectural Floorplan & Blueprint Switcher */}
      <div style={{ background: 'rgba(9, 24, 16, 0.8)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#34d399' }}>
              <Layers size={20} />
              <span>Interactive Residence & Floorplan Inspector</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Switch architectural configurations to inspect blueprints and unit specifications.</p>
          </div>

          {/* Unit Toggle Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {Object.keys(floorplans).map((planKey) => (
              <button
                key={planKey}
                onClick={() => { setSelectedPlan(planKey); setActiveRoom('salon'); }}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: selectedPlan === planKey ? '#10b981' : 'rgba(255,255,255,0.06)',
                  color: selectedPlan === planKey ? '#000' : '#d1fae5',
                  border: 'none',
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
          <div style={{ background: '#030805', borderRadius: '1rem', border: '1px solid rgba(16,185,129,0.3)', padding: '1.5rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#34d399', letterSpacing: '0.05em' }}>ARCHITECTURAL BLUEPRINT 1:100</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>CAD-REV-2026</span>
            </div>

            {/* Virtual Blueprint Grid Graphic */}
            <div style={{ height: '170px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0.8) 80%)', border: '1px dashed rgba(16,185,129,0.3)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#ffffff' }}>{current.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.2rem' }}>{current.size}</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>{current.beds}</div>
              <div style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '0.65rem', color: '#64748b' }}>
                CLICK TO ROTATE 3D CAD
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Asking Price:</span>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#34d399' }}>{current.price}</span>
            </div>
          </div>

          {/* Specs List */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
              Bespoke Residence Features:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
              {current.specs.map((spec, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            {brokerViewingBooked ? (
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(16,185,129,0.2)', border: '1px solid #10b981', color: '#34d399', fontSize: '0.8rem', textAlign: 'center', fontWeight: '700' }}>
                ✓ Private Broker Consultation Confirmed for {current.title}!
              </div>
            ) : (
              <button
                onClick={() => setBrokerViewingBooked(true)}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', background: '#10b981', color: '#000', fontWeight: '800' }}
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
