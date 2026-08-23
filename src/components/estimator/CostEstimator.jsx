import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, Zap, ArrowRight, Clock, ShieldCheck, DollarSign } from 'lucide-react';

export default function CostEstimator({ onBridgeToModal }) {
  const [industry, setIndustry] = useState('saas');
  const [tier, setTier] = useState('standard'); // 'landing', 'standard', 'rich', 'enterprise'
  const [addons, setAddons] = useState({
    cms: true,
    roiTool: true,
    stripe: false,
    booking: false,
    canvas3d: false,
    i18n: false
  });
  const [sprintSpeed, setSprintSpeed] = useState('express'); // 'standard', 'express', 'hypersprint'

  const industries = [
    { id: 'saas', name: 'AI & SaaS Tech', baseMult: 1.0 },
    { id: 'creator', name: 'Creator & Media Kit', baseMult: 0.95 },
    { id: 'hospitality', name: 'Fine Dining & Hospitality', baseMult: 1.05 },
    { id: 'education', name: 'Schools & Higher Ed', baseMult: 1.1 },
    { id: 'realestate', name: 'Luxury Real Estate', baseMult: 1.15 },
    { id: 'medical', name: 'Medical & Dental Clinic', baseMult: 1.05 },
    { id: 'agency', name: 'Creative Studio & Lab', baseMult: 1.0 },
    { id: 'ecommerce', name: 'E-Commerce & Brands', baseMult: 1.1 },
  ];

  const pageTiers = {
    landing: { name: '1-Page High-Converting Landing', price: 19999, baseDays: 5 },
    standard: { name: '3–5 Bespoke Pages', price: 34999, baseDays: 7 },
    rich: { name: '6–10 Rich Multi-Section Pages', price: 59999, baseDays: 10 },
    enterprise: { name: '12+ Enterprise Architectural Web App', price: 99999, baseDays: 14 }
  };

  const addonList = [
    { id: 'cms', name: 'Headless CMS (Sanity / Decap)', price: 7999, desc: 'Client-friendly content editing' },
    { id: 'roiTool', name: 'Interactive Custom ROI / Calculator Widget', price: 6999, desc: 'Engaging real-time micro-tool' },
    { id: 'stripe', name: 'Stripe Checkout & Billing Engine', price: 8999, desc: 'Instant edge payments' },
    { id: 'booking', name: 'Custom Booking & Reservation Flow', price: 7499, desc: 'Real-time slot scheduling' },
    { id: 'canvas3d', name: 'HTML5 Particle / Canvas 3D Effects', price: 5999, desc: 'Ultra-luxurious visual motion' },
    { id: 'i18n', name: 'Multilingual i18n Localization', price: 4999, desc: 'Global multi-currency & language' }
  ];

  const speedModifiers = {
    standard: { name: '14-Day Standard Pace', cost: 0, timeline: '14 Days' },
    express: { name: '7-Day Express Sprint (Guaranteed)', cost: 0, timeline: '7 Days' },
    hypersprint: { name: '72-Hour VIP Hyper-Sprint', cost: 9999, timeline: '72 Hours' }
  };

  // Calculate Price
  const baseCost = pageTiers[tier].price;
  let addonsCost = 0;
  Object.keys(addons).forEach((key) => {
    if (addons[key]) {
      const match = addonList.find(a => a.id === key);
      if (match) addonsCost += match.price;
    }
  });

  const speedCost = speedModifiers[sprintSpeed].cost;
  const totalPrice = baseCost + addonsCost + speedCost;

  const toggleAddon = (id) => {
    setAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLaunchProject = () => {
    const selectedAddonNames = Object.keys(addons)
      .filter(k => addons[k])
      .map(k => addonList.find(a => a.id === k)?.name);

    onBridgeToModal({
      industry: industries.find(i => i.id === industry)?.name,
      tier: pageTiers[tier].name,
      addons: selectedAddonNames,
      speed: speedModifiers[sprintSpeed].name,
      totalCost: totalPrice,
      timeline: speedModifiers[sprintSpeed].timeline
    });
  };

  return (
    <section id="estimator" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="section-title">
            Instant Project Scope & Cost Estimator
          </h2>
          <p className="section-desc">
            Configure your dream digital flagship in real-time. Zero hidden agency markups, 100% upfront transparency, and instant delivery timeline computation.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--bg-card-border)',
            background: 'var(--bg-surface)',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            
            {/* Left Column: Scope Configurator */}
            <div>
              
              {/* Step 1: Industry */}
              <div style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  1. Select Your Target Industry
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setIndustry(ind.id)}
                      style={{
                        padding: '0.6rem 0.75rem',
                        borderRadius: '0.6rem',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textAlign: 'left',
                        background: industry === ind.id ? 'rgba(79, 70, 229, 0.12)' : 'var(--bg-card)',
                        color: industry === ind.id ? 'var(--aurora-violet)' : 'var(--text-secondary)',
                        border: industry === ind.id ? '1px solid var(--aurora-violet)' : '1px solid var(--bg-card-border)',
                        boxShadow: industry === ind.id ? 'var(--shadow-sm)' : 'none',
                        transition: 'all 150ms ease'
                      }}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Page Tier */}
              <div style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  2. Select Page Scope & Architecture
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {Object.keys(pageTiers).map((key) => {
                    const pt = pageTiers[key];
                    const isSelected = tier === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setTier(key)}
                        style={{
                          padding: '0.85rem 1.25rem',
                          borderRadius: '0.75rem',
                          background: isSelected ? 'rgba(2, 132, 199, 0.08)' : 'var(--bg-card)',
                          border: isSelected ? '1px solid var(--aurora-cyan)' : '1px solid var(--bg-card-border)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                          transition: 'all 150ms ease'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: '800', fontSize: '0.9rem', color: isSelected ? 'var(--text-primary)' : 'var(--text-primary)' }}>
                            {pt.name}
                          </div>
                        </div>
                        <div style={{ fontWeight: '900', fontSize: '1rem', color: isSelected ? 'var(--aurora-cyan)' : 'var(--text-secondary)' }}>
                          ₹{pt.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Interactive Add-Ons */}
              <div style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  3. Bespoke Interactive Add-Ons
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                  {addonList.map((addon) => {
                    const isChecked = addons[addon.id];
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '0.6rem',
                          background: isChecked ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-card)',
                          border: isChecked ? '1px solid var(--aurora-violet)' : '1px solid var(--bg-card-border)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          boxShadow: isChecked ? 'var(--shadow-sm)' : 'none',
                          transition: 'all 150ms ease'
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '4px',
                            background: isChecked ? 'var(--aurora-violet)' : 'rgba(15, 23, 42, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '2px',
                            color: '#ffffff'
                          }}
                        >
                          {isChecked && <CheckCircle2 size={13} />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-primary)' }}>{addon.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--aurora-cyan-light)', fontWeight: '700' }}>+₹{addon.price.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Sprint Speed */}
              <div>
                <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  4. Delivery Sprint Velocity
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.6rem' }}>
                  {Object.keys(speedModifiers).map((spKey) => {
                    const sp = speedModifiers[spKey];
                    const isSelected = sprintSpeed === spKey;
                    return (
                      <button
                        key={spKey}
                        onClick={() => setSprintSpeed(spKey)}
                        style={{
                          padding: '0.75rem',
                          borderRadius: '0.6rem',
                          textAlign: 'center',
                          background: isSelected ? 'rgba(5, 150, 105, 0.1)' : 'var(--bg-card)',
                          border: isSelected ? '1px solid var(--aurora-emerald)' : '1px solid var(--bg-card-border)',
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                          boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: '900', color: isSelected ? '#059669' : 'var(--text-primary)' }}>
                          {sp.timeline}
                        </div>
                        <div style={{ fontSize: '0.72rem', marginTop: '0.2rem', fontWeight: '600' }}>
                          {sp.cost === 0 ? 'Included' : `+₹${sp.cost.toLocaleString('en-IN')}`}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Cost & Inclusions Summary Card */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-card-border)',
                borderRadius: '1.25rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--aurora-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Live Scope Calculation
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '0.25rem 0.6rem', borderRadius: '9999px', fontWeight: '800' }}>
                    100% Fixed Price
                  </span>
                </div>

                {/* Total Price Display */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Total Investment (No Hidden Fees):</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: '1.1', margin: '0.35rem 0' }}>
                    ₹{totalPrice.toLocaleString('en-IN')}{' '}
                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>INR</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--aurora-cyan-light)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700' }}>
                    <Clock size={16} />
                    <span>Estimated Delivery: {speedModifiers[sprintSpeed].timeline}</span>
                  </div>
                </div>

                {/* What is Included Guarantee */}
                <div style={{ borderTop: '1px solid var(--bg-card-border)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Included With Every Build:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#059669" />
                      <span>100/100 Google PageSpeed Optimization</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#059669" />
                      <span>Cloudflare Pages Global Edge Deployment</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#059669" />
                      <span>100% Bespoke Code Ownership & Git Repo</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#059669" />
                      <span>2 Comprehensive UI Revision Rounds</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#059669" />
                      <span>Custom Domain SSL & DNS Configuration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleLaunchProject}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <span>Bridge Into Project Brief</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
