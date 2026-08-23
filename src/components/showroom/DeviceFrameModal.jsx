import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Minimize2, X, Sparkles } from 'lucide-react';
import NexusSaaSTemplate from './templates/NexusSaaSTemplate';
import AuraLuxeCreatorTemplate from './templates/AuraLuxeCreatorTemplate';
import MaisonEliteDiningTemplate from './templates/MaisonEliteDiningTemplate';
import VanguardAcademyTemplate from './templates/VanguardAcademyTemplate';
import ApexLivingRealEstateTemplate from './templates/ApexLivingRealEstateTemplate';
import PulseSmilesMedicalTemplate from './templates/PulseSmilesMedicalTemplate';
import ZenithStudioAgencyTemplate from './templates/ZenithStudioAgencyTemplate';

export default function DeviceFrameModal({ template, onClose, onAdoptTemplate }) {
  const [device, setDevice] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!template) return null;

  const renderTemplateContent = () => {
    switch (template.id) {
      case 'nexus':
        return <NexusSaaSTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'aura':
        return <AuraLuxeCreatorTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'maison':
        return <MaisonEliteDiningTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'vanguard':
        return <VanguardAcademyTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'apex':
        return <ApexLivingRealEstateTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'pulse':
        return <PulseSmilesMedicalTemplate onAdoptTemplate={onAdoptTemplate} />;
      case 'zenith':
        return <ZenithStudioAgencyTemplate onAdoptTemplate={onAdoptTemplate} />;
      default:
        return <NexusSaaSTemplate onAdoptTemplate={onAdoptTemplate} />;
    }
  };

  // Device frame constraints
  const getDeviceStyle = () => {
    if (isFullscreen) {
      return {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        borderRadius: 0,
      };
    }
    switch (device) {
      case 'mobile':
        return {
          width: '390px',
          maxWidth: '100%',
          height: '780px',
          borderRadius: '36px',
          border: '10px solid #0f172a',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3), 0 0 30px rgba(79,70,229,0.15)',
        };
      case 'tablet':
        return {
          width: '768px',
          maxWidth: '100%',
          height: '820px',
          borderRadius: '24px',
          border: '10px solid #0f172a',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3), 0 0 30px rgba(79,70,229,0.15)',
        };
      case 'desktop':
      default:
        return {
          width: '100%',
          maxWidth: '1280px',
          height: '820px',
          borderRadius: '16px',
          border: '1px solid #cbd5e1',
          boxShadow: '0 30px 70px -20px rgba(0,0,0,0.2), 0 0 40px rgba(79,70,229,0.1)',
        };
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 200ms ease-out'
      }}
    >
      
      {/* Top Interactive Toolbar */}
      <div
        style={{
          padding: '0.85rem 1.5rem',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        {/* Template Info & Cloudflare Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: '900', fontSize: '1.05rem', color: '#0f172a' }}>
                {template.name}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: 'rgba(79, 70, 229, 0.1)',
                  color: '#4f46e5',
                  border: '1px solid rgba(79, 70, 229, 0.25)'
                }}
              >
                {template.categoryLabel}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.15rem' }}>
              <span style={{ color: '#059669', fontWeight: '700' }}>● Speed: {template.metrics.speed}</span>
              <span>Score: {template.metrics.score}</span>
              <span>Lift: {template.metrics.conversion}</span>
            </div>
          </div>
        </div>

        {/* Device Switcher (Desktop / Tablet / Mobile) */}
        {!isFullscreen && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#f1f5f9',
              padding: '0.25rem',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}
          >
            <button
              onClick={() => setDevice('desktop')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                background: device === 'desktop' ? '#ffffff' : 'transparent',
                color: device === 'desktop' ? '#4f46e5' : '#64748b',
                border: device === 'desktop' ? '1px solid #cbd5e1' : 'none',
                boxShadow: device === 'desktop' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer'
              }}
            >
              <Monitor size={15} />
              <span>Desktop (1440px)</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                background: device === 'tablet' ? '#ffffff' : 'transparent',
                color: device === 'tablet' ? '#4f46e5' : '#64748b',
                border: device === 'tablet' ? '1px solid #cbd5e1' : 'none',
                boxShadow: device === 'tablet' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer'
              }}
            >
              <Tablet size={15} />
              <span>Tablet (768px)</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                background: device === 'mobile' ? '#ffffff' : 'transparent',
                color: device === 'mobile' ? '#4f46e5' : '#64748b',
                border: device === 'mobile' ? '1px solid #cbd5e1' : 'none',
                boxShadow: device === 'mobile' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer'
              }}
            >
              <Smartphone size={15} />
              <span>Mobile (390px)</span>
            </button>
          </div>
        )}

        {/* Right Actions: Fullscreen & Adopt & Close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#334155',
              cursor: 'pointer'
            }}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Sandbox"}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button
            onClick={() => {
              onClose();
              onAdoptTemplate(template.name);
            }}
            className="btn btn-primary btn-sm"
          >
            <Sparkles size={15} />
            <span>Adopt This Template</span>
          </button>

          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#dc2626',
              cursor: 'pointer'
            }}
            title="Close Preview"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Frame Sandbox Stage */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          alignItems: isFullscreen ? 'stretch' : 'center',
          justifyContent: 'center',
          padding: isFullscreen ? 0 : '1.5rem',
          background: '#e2e8f0'
        }}
      >
        <div
          style={{
            ...getDeviceStyle(),
            overflowY: 'auto',
            position: 'relative',
            background: '#ffffff',
            transition: 'width 250ms ease, height 250ms ease, border-radius 250ms ease',
          }}
        >
          {/* Simulated Mobile Top Bar if Mobile */}
          {device === 'mobile' && !isFullscreen && (
            <div
              style={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: '#ffffff',
                borderBottom: '1px solid #e2e8f0',
                padding: '0.4rem 1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.7rem',
                color: '#0f172a',
                fontWeight: '700'
              }}
            >
              <span>9:41</span>
              <div style={{ width: '80px', height: '14px', borderRadius: '9999px', background: '#0f172a' }} />
              <span>5G 100%</span>
            </div>
          )}

          {renderTemplateContent()}
        </div>
      </div>

    </div>
  );
}
