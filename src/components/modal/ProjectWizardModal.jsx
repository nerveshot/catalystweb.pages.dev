import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Copy, Check, ShieldCheck, Zap, FileText } from 'lucide-react';
import { TEMPLATES } from '../../data/templatesData';

export default function ProjectWizardModal({ isOpen, onClose, initialData, onNavigateTerms }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    template: 'Nexus 3.0 (AI & SaaS)',
    tier: '3–5 Bespoke Pages ($2,850)',
    timeline: '7-Day Express Sprint',
    notes: '',
    agreedToTerms: false
  });

  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        template: initialData.template || initialData.industry ? `${initialData.industry} Edition` : prev.template,
        tier: initialData.tier ? `${initialData.tier} ($${initialData.totalCost?.toLocaleString() || '2,850'})` : prev.tier,
        timeline: initialData.timeline ? `${initialData.timeline} Sprint` : prev.timeline,
        notes: initialData.addons?.length ? `Selected Add-Ons: ${initialData.addons.join(', ')}` : prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `LP-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedId);
    setSubmitted(true);
    triggerConfetti();
  };

  const copySummaryToClipboard = () => {
    const summaryText = `
=== LAUNCHPAGES PROJECT BRIEF [${refId}] ===
Client Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Current Site: ${formData.website || 'N/A'}
Template Foundation: ${formData.template}
Scope Tier: ${formData.tier}
Timeline: ${formData.timeline}
Notes: ${formData.notes || 'None'}
Status: Confirmed & Accepted Terms (Jaipur, Rajasthan, India)
=============================================
`.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="glass-panel modal-container"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem',
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.98) 0%, rgba(10, 11, 18, 0.99) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* Submission Confirmation View */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: '#10b981'
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.8rem', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '9999px', color: 'var(--aurora-cyan-light)', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              <span>Project Brief Initialized</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.5rem' }}>
              Project Reference #{refId}
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Your project brief has been logged into our engineering dispatch queue. We will review your requirements within 2 hours.
            </p>

            {/* Brief Summary Box */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                color: '#cbd5e1'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Client:</span>
                <span style={{ fontWeight: '700', color: '#fff' }}>{formData.name} ({formData.company})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Contact:</span>
                <span>{formData.email}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Template Architecture:</span>
                <span style={{ color: 'var(--aurora-cyan-light)' }}>{formData.template}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Target Delivery:</span>
                <span style={{ color: 'var(--aurora-emerald)' }}>{formData.timeline}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>IP & Source Rights:</span>
                <span style={{ color: '#ffffff' }}>100% Client Beneficial Ownership</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={copySummaryToClipboard}
                className="btn btn-secondary"
                style={{ minWidth: '180px' }}
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Brief Summary'}</span>
              </button>

              <button
                onClick={onClose}
                className="btn btn-primary"
                style={{ minWidth: '140px' }}
              >
                <span>Done</span>
              </button>
            </div>

          </div>
        ) : (
          /* Step-by-Step Form Wizard */
          <div>
            
            {/* Wizard Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--gradient-aurora)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Zap size={16} />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--aurora-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  LaunchPages 7-Day Sprint Intake
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '900', color: '#ffffff' }}>
                {step === 1 && '1. Contact & Brand Identity'}
                {step === 2 && '2. Template Foundation & Scope'}
                {step === 3 && '3. Feature Brief & Terms Agreement'}
              </h2>

              {/* Progress Steps Indicator */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: '4px',
                      borderRadius: '9999px',
                      background: s <= step ? 'var(--gradient-aurora)' : 'rgba(255, 255, 255, 0.1)',
                      transition: 'background 200ms ease'
                    }}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
              
              {/* Step 1: Contact Details */}
              {step === 1 && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexandre Duval"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexandre@duvalcapital.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Company / Brand Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Duval Capital"
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current Website (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. duvalcapital.com"
                        className="form-input"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Template Selection & Tier */}
              {step === 2 && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Preferred Template Foundation</label>
                    <select
                      className="form-select"
                      value={formData.template}
                      onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                    >
                      {TEMPLATES.map((t) => (
                        <option key={t.id} value={`${t.name} (${t.categoryLabel})`}>
                          {t.name} — {t.tagline}
                        </option>
                      ))}
                      <option value="100% Bespoke Custom Architecture">100% Bespoke Custom Architecture (From Scratch)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Page Scope Tier</label>
                    <select
                      className="form-select"
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    >
                      <option value="1-Page High-Converting Landing ($1,850)">1-Page High-Converting Landing ($1,850)</option>
                      <option value="3–5 Bespoke Pages ($2,850)">3–5 Bespoke Pages ($2,850)</option>
                      <option value="6–10 Rich Multi-Section Pages ($4,200)">6–10 Rich Multi-Section Pages ($4,200)</option>
                      <option value="12+ Enterprise Architectural Web App ($6,500)">12+ Enterprise Architectural Web App ($6,500)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Delivery Sprint</label>
                    <select
                      className="form-select"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="7-Day Express Sprint (Guaranteed)">7-Day Express Sprint (Guaranteed)</option>
                      <option value="14-Day Standard Pace">14-Day Standard Pace</option>
                      <option value="72-Hour VIP Hyper-Sprint">72-Hour VIP Hyper-Sprint</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Brief Details & Terms Agreement */}
              {step === 3 && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Key Goals, Integrations & Custom Features</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your target audience, conversion goals, specific calculators or third-party APIs (Stripe, Calendly, Supabase)..."
                      className="form-textarea"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        style={{ marginTop: '3px', width: '18px', height: '18px', accentColor: '#6366f1' }}
                      />
                      <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        I agree to the LaunchPages{' '}
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigateTerms();
                          }}
                          style={{ color: 'var(--aurora-cyan-light)', textDecoration: 'underline', fontWeight: '600' }}
                        >
                          Terms & Conditions
                        </button>
                        , including the 2 revision rounds, 3-year domain registration provisions, 100% IP code transfer upon settlement, and Indian governing jurisdiction in the courts of Jaipur, Rajasthan.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn btn-secondary btn-sm"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <span>{step === 3 ? 'Confirm & Initialize Brief' : 'Next Step'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
