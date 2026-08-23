import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Zap, ShieldCheck, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenProjectModal, activeView, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const navLinks = [
    { label: '7 Live Templates', href: '#templates' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Why Us Matrix', href: '#benchmarks' },
    { label: '7-Day Sprint', href: '#sprint' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (activeView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const elem = document.querySelector(href);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.querySelector(href);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 300ms ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-card-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <div
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--gradient-aurora)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(79, 70, 229, 0.35)',
              color: '#ffffff'
            }}
          >
            <Zap size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '900',
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                LaunchPages
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '6px',
                  background: 'rgba(2, 132, 199, 0.1)',
                  border: '1px solid rgba(2, 132, 199, 0.25)',
                  color: 'var(--aurora-cyan-light)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                launch.pages.dev
              </span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              Cloudflare-Native Web Studio
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
            background: 'var(--bg-surface)',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            border: '1px solid var(--bg-card-border)',
            boxShadow: 'var(--shadow-sm)',
            backdropFilter: 'blur(16px)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{
                fontSize: '0.875rem',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--aurora-violet)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          
          {/* Live Availability Badge */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(5, 150, 105, 0.08)',
              border: '1px solid rgba(5, 150, 105, 0.25)',
              color: 'var(--aurora-emerald)',
              fontSize: '0.78rem',
              fontWeight: '700',
            }}
            className="availability-badge"
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#059669',
                boxShadow: '0 0 8px #059669',
                animation: 'pulse-live 2s infinite ease-in-out'
              }}
            />
            2 Spots Open for August
          </div>

          {/* Theme Mode Switcher Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-card-border)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer',
              transition: 'all 150ms ease'
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenProjectModal()}
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex' }}
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-card-border)',
              color: 'var(--text-primary)'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-surface)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--bg-card-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.12)',
              color: 'var(--aurora-emerald)',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981'
              }}
            />
            🟢 2 Client Openings Available This Month
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--bg-card-border)'
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProjectModal();
            }}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <span>Book 7-Day Sprint (from ₹19,999)</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}

      {/* Media query styling hook */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .availability-badge { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
