import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../../data/faqData';

export default function FaqAccordion() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(1);

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section" style={{ position: 'relative' }}>
      <div className="container-sm">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Clear Answers</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-desc">
            Everything you need to know about our sub-0.4s Cloudflare-native architecture, 7-day sprint delivery, and 100% source code ownership.
          </p>
        </div>

        {/* Search Input Bar */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }}
          />
          <input
            type="text"
            placeholder="Search questions (e.g. custom domain, ownership, 7 days, CMS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.25rem 1rem 3.25rem',
              borderRadius: '1rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-card-border)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              boxShadow: 'var(--shadow-sm)',
              backdropFilter: 'blur(16px)',
              outline: 'none'
            }}
          />
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              No matching questions found. Try searching another keyword or contact our studio directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card"
                  style={{
                    borderRadius: '0.875rem',
                    border: isOpen ? '1px solid var(--aurora-violet)' : '1px solid var(--bg-card-border)',
                    background: 'var(--bg-card)',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 200ms ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      gap: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--aurora-violet)',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          display: 'block',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {faq.category}
                      </span>
                      <span style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                        {faq.question}
                      </span>
                    </div>

                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 200ms ease',
                        color: isOpen ? 'var(--aurora-violet)' : 'var(--text-muted)'
                      }}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.7', borderTop: '1px solid var(--bg-card-border)', paddingTop: '1rem' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
