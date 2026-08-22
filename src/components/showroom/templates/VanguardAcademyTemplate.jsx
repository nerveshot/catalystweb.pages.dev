import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Calculator, Users, Calendar, ArrowRight, CheckCircle2, Globe } from 'lucide-react';

export default function VanguardAcademyTemplate({ onAdoptTemplate }) {
  const [gradeTier, setGradeTier] = useState('upper'); // middle, upper, ib
  const [gpaTier, setGpaTier] = useState('honor'); // standard, honor, dean
  const [activeStream, setActiveStream] = useState('stem');
  const [tourRsvpDone, setTourRsvpDone] = useState(false);
  const [tourName, setTourName] = useState('');

  // Tuition Calculation
  const baseTuition = gradeTier === 'middle' ? 24500 : gradeTier === 'upper' ? 32000 : 38500;
  const grantAmount = gpaTier === 'dean' ? 12000 : gpaTier === 'honor' ? 6500 : 0;
  const netTuition = baseTuition - grantAmount;

  const curriculumStreams = {
    stem: {
      name: 'STEM & Applied Artificial Intelligence',
      courses: ['Quantum Computing & Linear Algebra', 'Autonomous Robotics Engineering', 'Machine Learning & Python Algorithmic Synthesis'],
      faculty: 'Dr. Alistair Finch (PhD MIT, Ex-NASA JPL)'
    },
    law: {
      name: 'Constitutional Law & Global Diplomacy',
      courses: ['International Human Rights Moot Court', 'Geopolitical Economics & Game Theory', 'Diplomatic Negotiation Seminar'],
      faculty: 'Hon. Catherine Vance (Oxford DPhil)'
    },
    med: {
      name: 'Pre-Medical & Biomedical Genetics',
      courses: ['CRISPR Molecular Biology Lab', 'Advanced Organic Synthesis', 'Clinical Pathology & Neuroanatomy'],
      faculty: 'Dr. Rajiv Menon (MD Johns Hopkins)'
    }
  };

  return (
    <div style={{ background: '#050c18', color: '#e0f2fe', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(6,182,212,0.2)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={18} color="#fff" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.02em', color: '#ffffff' }}>
              VANGUARD <span style={{ color: '#06b6d4' }}>ACADEMY</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#38bdf8', letterSpacing: '0.1em' }}>EST. 1912 • IVY LEAGUE PREPARATORY</div>
          </div>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Vanguard Academy (Schools & Higher Ed)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #2563eb)', border: 'none', fontSize: '0.8rem' }}
        >
          <span>Adopt Vanguard Academy</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '9999px', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1rem' }}>
          <Award size={14} />
          <span>RANKED #1 INDEPENDENT COLLEGE PREPARATORY</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#ffffff' }}>
          Igniting Intellectual Curiosity & Global Leadership
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Empowering the next generation of Nobel laureates, diplomats, and innovators with personalized research streams and a world-class faculty.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.2)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#38bdf8' }}>100%</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Top-50 University Admitted</div>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.2)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#38bdf8' }}>6:1</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Student-to-Faculty Ratio</div>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.2)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#38bdf8' }}>42</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Advanced Placement (AP) Courses</div>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.2)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#38bdf8' }}>$14.2M</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Merit Scholarship Pool</div>
        </div>
      </div>

      {/* Interactive Feature 1: Tuition & Merit Grant Aid Estimator */}
      <div style={{ background: 'rgba(8, 24, 48, 0.8)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.05rem', color: '#38bdf8' }}>
              <Calculator size={20} />
              <span>Interactive Tuition & Merit Scholarship Calculator</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Select grade division and academic GPA standing to simulate net family investment.</p>
          </div>

          <div style={{ textAlign: 'right', background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(6,182,212,0.4)' }}>
            <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: '700' }}>Estimated Net Annual Tuition</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ffffff' }}>
              ${netTuition.toLocaleString()} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>/year</span>
            </div>
          </div>
        </div>

        {/* Level & GPA Options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem', color: '#e0f2fe' }}>
              1. Select Grade Division
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { id: 'middle', label: 'Middle Academy (Grades 6–8)', base: '$24,500' },
                { id: 'upper', label: 'Upper College Prep (Grades 9–11)', base: '$32,000' },
                { id: 'ib', label: 'IB Senior Diploma (Grade 12)', base: '$38,500' },
              ].map((g) => (
                <div
                  key={g.id}
                  onClick={() => setGradeTier(g.id)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: gradeTier === g.id ? 'rgba(6,182,212,0.2)' : 'rgba(0,0,0,0.3)',
                    border: gradeTier === g.id ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ fontWeight: '600' }}>{g.label}</span>
                  <span style={{ color: '#94a3b8' }}>{g.base}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem', color: '#e0f2fe' }}>
              2. Projected Academic Merit Standing
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { id: 'dean', label: 'Dean’s Presidential Scholar (3.9+ GPA)', award: '-$12,000 Grant' },
                { id: 'honor', label: 'Academic Honors Merit (3.7+ GPA)', award: '-$6,500 Grant' },
                { id: 'standard', label: 'Standard Admissions (3.3+ GPA)', award: 'No Merit Grant' },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => setGpaTier(m.id)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: gpaTier === m.id ? 'rgba(6,182,212,0.2)' : 'rgba(0,0,0,0.3)',
                    border: gpaTier === m.id ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ fontWeight: '600' }}>{m.label}</span>
                  <span style={{ color: '#34d399', fontWeight: '700' }}>{m.award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Feature 2: Curriculum Stream Explorer & Tour RSVP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* Streams */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} color="#06b6d4" />
            <span>Honors Curriculum Streams</span>
          </h3>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {['stem', 'law', 'med'].map((str) => (
              <button
                key={str}
                onClick={() => setActiveStream(str)}
                style={{
                  flex: 1,
                  padding: '0.4rem 0',
                  borderRadius: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: activeStream === str ? '#06b6d4' : 'rgba(255,255,255,0.06)',
                  color: activeStream === str ? '#000' : '#e0f2fe',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {str.toUpperCase()}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#38bdf8', marginBottom: '0.5rem' }}>
            {curriculumStreams[activeStream].name}
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
            {curriculumStreams[activeStream].courses.map((c, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={12} color="#06b6d4" /> {c}
              </li>
            ))}
          </ul>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Faculty Head: {curriculumStreams[activeStream].faculty}</div>
        </div>

        {/* Tour RSVP */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(6,182,212,0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={18} color="#06b6d4" />
            <span>Campus Open-Day Tour RSVP</span>
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
            Join our next private campus walkthrough & faculty Q&A session.
          </p>

          {tourRsvpDone ? (
            <div style={{ padding: '0.85rem', borderRadius: '0.5rem', background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#34d399', textAlign: 'center', fontSize: '0.85rem', fontWeight: '700' }}>
              ✓ Tour RSVP Confirmed for {tourName}! Admissions packet dispatched.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (tourName) setTourRsvpDone(true); }} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                required
                placeholder="Parent Full Name"
                value={tourName}
                onChange={(e) => setTourName(e.target.value)}
                style={{ flex: 1, padding: '0.65rem 0.85rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem' }}
              />
              <button type="submit" className="btn btn-primary btn-sm" style={{ background: '#06b6d4', color: '#000', fontWeight: '800' }}>
                RSVP
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
