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
            border: '1px solid rgba(99, 102, 241, 0.25)',
            background: 'linear-gradient(180deg, rgba(19, 21, 32, 0.85) 0%, rgba(13, 14, 21, 0.95) 100%)',
            padding: '1.5rem',
            borderRadius: '1.25rem'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>
                  Architecture & Engineering
                </th>
                <th
                  style={{
                    padding: '1.25rem 1rem',
                    fontSize: '1.05rem',
                    color: '#ffffff',
                    fontWeight: '900',
                    background: 'rgba(99, 102, 241, 0.18)',
                    borderTopLeftRadius: '0.75rem',
                    borderTopRightRadius: '0.75rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderBottom: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={18} color="var(--aurora-cyan)" />
                    <span>LaunchPages Studio</span>
                  </div>
                </th>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '700' }}>
                  Traditional WordPress Agencies
                </th>
                <th style={{ padding: '1.25rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '700' }}>
                  DIY Builders (Wix / Webflow)
                </th>
              </tr>
            </thead>
            <tbody>
              {BENCHMARK_METRICS.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>
                    {row.feature}
                  </td>

                  {/* LaunchPages Column */}
                  <td
                    style={{
                      padding: '1.2rem 1rem',
                      fontSize: '0.9rem',
                      fontWeight: '800',
                      color: 'var(--aurora-cyan-light)',
                      background: 'rgba(99, 102, 241, 0.12)',
                      borderLeft: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRight: '1px solid rgba(99, 102, 241, 0.25)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>{row.launchPages}</span>
                    </div>
                  </td>

                  {/* Traditional Agencies */}
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <XCircle size={15} color="#f87171" />
                      <span>{row.traditionalAgencies}</span>
                    </div>
                  </td>

                  {/* DIY Builders */}
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <AlertCircle size={15} color="#fbbf24" />
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
