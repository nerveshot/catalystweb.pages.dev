import React from 'react';
import { ShieldCheck, Zap, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { BENCHMARK_METRICS } from '../../data/comparisonData';

export default function BenchmarkMatrix() {
  return (
    <section id="benchmarks" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Unfair Competitive Advantage</span>
          </div>
          <h2 className="section-title">
            Why We Outperform 99% of Web Agencies
          </h2>
          <p className="section-desc">
            Traditional web agencies trap you in 12-week bloated development cycles and legacy PHP servers. Here is how LaunchPages changes the equation forever.
          </p>
        </div>

        {/* Matrix Table */}
        <div
          className="glass-panel"
          style={{
            overflowX: 'auto',
            border: '1px solid var(--bg-card-border)',
            background: 'var(--bg-surface)',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.5rem',
            borderRadius: '1.25rem'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--bg-card-border)' }}>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase' }}>
                  Architecture & Engineering
                </th>
                <th
                  style={{
                    padding: '1.25rem 1rem',
                    fontSize: '1.05rem',
                    color: 'var(--aurora-violet)',
                    fontWeight: '900',
                    background: 'rgba(79, 70, 229, 0.08)',
                    borderTopLeftRadius: '0.75rem',
                    borderTopRightRadius: '0.75rem',
                    border: '1px solid rgba(79, 70, 229, 0.25)',
                    borderBottom: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={18} color="var(--aurora-violet)" />
                    <span>LaunchPages Studio</span>
                  </div>
                </th>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '700' }}>
                  Traditional WordPress Agencies
                </th>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '700' }}>
                  DIY Builders (Wix / Webflow)
                </th>
              </tr>
            </thead>
            <tbody>
              {BENCHMARK_METRICS.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--bg-card-border)',
                    background: idx % 2 === 0 ? 'rgba(241, 245, 249, 0.5)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {row.feature}
                  </td>

                  {/* LaunchPages Column */}
                  <td
                    style={{
                      padding: '1.2rem 1rem',
                      fontSize: '0.9rem',
                      fontWeight: '800',
                      color: 'var(--aurora-cyan-light)',
                      background: 'rgba(79, 70, 229, 0.06)',
                      borderLeft: '1px solid rgba(79, 70, 229, 0.2)',
                      borderRight: '1px solid rgba(79, 70, 229, 0.2)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>{row.launchPages}</span>
                    </div>
                  </td>

                  {/* Traditional Agencies */}
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <XCircle size={15} color="#e11d48" />
                      <span>{row.traditionalAgencies}</span>
                    </div>
                  </td>

                  {/* DIY Builders */}
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <AlertCircle size={15} color="#d97706" />
                      <span>{row.diyBuilders}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
