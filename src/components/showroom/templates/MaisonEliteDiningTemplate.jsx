import React, { useState } from 'react';
import { Utensils, Calendar, Sparkles, ArrowRight, Award } from 'lucide-react';

export default function MaisonEliteDiningTemplate({ onAdoptTemplate }) {
  const [guestCount, setGuestCount] = useState(2);
  const [atmosphere, setAtmosphere] = useState('chef');
  const [mealTime, setMealTime] = useState('20:00');
  const [menuFilter, setMenuFilter] = useState('all');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const atmospheres = [
    { id: 'chef', name: 'Chef’s Counter (Front-Row)', surcharge: 'Included in 9-Course' },
    { id: 'salon', name: 'The Grand Candlelit Salon', surcharge: 'Romantic Intimate' },
    { id: 'terrace', name: 'Private Botanical Terrace', surcharge: 'Heated Veranda' },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'degustation',
      title: 'Hokkaido Scallop Crudo',
      desc: 'Oscietra caviar, compressed yuzu pearls, finger lime emulsion & sea fennel.',
      wine: '2020 Dom Pérignon Vintage Brut Champagne'
    },
    {
      id: 2,
      category: 'degustation',
      title: 'A5 Miyazaki Wagyu Tenderloin',
      desc: 'Perigord black truffle reduction, smoked marrow pomme purée, charred shallots.',
      wine: '2016 Château Margaux Premier Grand Cru Classé'
    },
    {
      id: 3,
      category: 'caviar',
      title: 'Imperial Beluga Reserve (30g)',
      desc: 'Warm buckwheat blinis, cultured Normandy crème fraîche, golden chives.',
      wine: 'Krug Grande Cuvée 170th Edition'
    },
    {
      id: 4,
      category: 'wine',
      title: 'Grand Cru Sommelier Flight',
      desc: '6 bespoke pours curated by Master Sommelier Lucian Saint-Germain.',
      wine: 'Burgundy, Bordeaux, Rheingau & Barolo reserves'
    }
  ];

  const filteredMenu = menuFilter === 'all' ? menuItems : menuItems.filter(m => m.category === menuFilter);

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #d97706, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Utensils size={18} color="#fff" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.05em', color: '#0f172a' }}>
              MAISON <span style={{ color: '#d97706' }}>ÉLITE</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#d97706', letterSpacing: '0.15em', fontWeight: '800' }}>TWO MICHELIN STARS 2026</div>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Maison Élite (Fine Dining & Hospitality)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)', border: 'none', color: '#fff', fontWeight: '800', fontSize: '0.8rem' }}
        >
          <span>Adopt Maison Élite</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(217, 119, 6, 0.1)', border: '1px solid rgba(217, 119, 6, 0.3)', borderRadius: '9999px', color: '#d97706', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
          <Award size={14} />
          <span>THREE ROSETTES & RELAIS & CHÂTEAUX MEMBER</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#0f172a' }}>
          A Symphony of French Haute Gastronomy
        </h2>
        <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Crafted by Chef Patron Jean-Luc Mercier. An intimate 24-seat culinary destination celebrating rare botanical harvests, aged grand cru reserves, and bespoke hospitality.
        </p>
      </div>

      {/* Interactive Feature 1: Michelin Table Reservation Widget */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#d97706' }}>
              <Calendar size={20} />
              <span>Interactive Table Reservation Experience</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Select guest count, atmosphere, and service time slot.</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(217, 119, 6, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', color: '#b45309', fontWeight: '800' }}>
            <Sparkles size={14} /> Only 4 Tables Left Tonight
          </div>
        </div>

        {/* Step Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          
          {/* Guest Count */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
              Number of Guests
            </label>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {[1, 2, 4, 6, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuestCount(num)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0',
                    borderRadius: '0.5rem',
                    background: guestCount === num ? '#d97706' : '#f1f5f9',
                    color: guestCount === num ? '#fff' : '#475569',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
              Evening Seating Time
            </label>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {['18:30', '19:45', '20:00', '21:15'].map((time) => (
                <button
                  key={time}
                  onClick={() => setMealTime(time)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0',
                    borderRadius: '0.5rem',
                    background: mealTime === time ? '#d97706' : '#f1f5f9',
                    color: mealTime === time ? '#fff' : '#475569',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Atmosphere Selector */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
            Dining Atmosphere & Room Atmosphere
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {atmospheres.map((atm) => (
              <div
                key={atm.id}
                onClick={() => setAtmosphere(atm.id)}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: atmosphere === atm.id ? 'rgba(217, 119, 6, 0.08)' : '#f8fafc',
                  border: atmosphere === atm.id ? '1px solid #d97706' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  boxShadow: atmosphere === atm.id ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>{atm.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#b45309', marginTop: '0.2rem', fontWeight: '600' }}>{atm.surcharge}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary Box */}
        {bookingConfirmed ? (
          <div style={{ padding: '1.25rem', borderRadius: '0.75rem', background: 'rgba(5, 150, 105, 0.1)', border: '1px solid #059669', color: '#065f46', textAlign: 'center', fontWeight: '800' }}>
            ✓ Table Reserved: {guestCount} Guests at {mealTime} in {atmospheres.find(a => a.id === atmosphere)?.name}! VIP Concierge confirmation dispatched.
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Current Booking Preference:</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a' }}>
                {guestCount} Guests • {mealTime} • {atmospheres.find(a => a.id === atmosphere)?.name}
              </div>
            </div>
            <button
              onClick={() => setBookingConfirmed(true)}
              className="btn btn-primary"
              style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)', border: 'none', color: '#fff', fontWeight: '800' }}
            >
              Confirm VIP Table RSVP
            </button>
          </div>
        )}
      </div>

      {/* Interactive Feature 2: Filterable Degustation Menu */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
            Autumn Degustation & Sommelier Pairings
          </h3>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'degustation', label: 'Haute Plats' },
              { id: 'caviar', label: 'Caviar Service' },
              { id: 'wine', label: 'Grand Cru Pairings' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setMenuFilter(btn.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: menuFilter === btn.id ? '#d97706' : '#f1f5f9',
                  color: menuFilter === btn.id ? '#ffffff' : '#475569',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              style={{
                padding: '1.25rem',
                borderRadius: '0.85rem',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.35rem' }}>
                {item.title}
              </div>
              <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                {item.desc}
              </p>
              <div style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: '700', borderTop: '1px solid #f1f5f9', paddingTop: '0.5rem' }}>
                🍷 Pairing: {item.wine}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
