import React, { useState } from 'react';
import { Flame, Heart, Sparkles, ArrowRight, CheckCircle2, DollarSign, Video } from 'lucide-react';

export default function AuraLuxeCreatorTemplate({ onAdoptTemplate }) {
  const [selectedServices, setSelectedServices] = useState({
    tiktok: true,
    youtube: false,
    storyTrio: true,
    usageRights: false,
  });

  const [reelLikes, setReelLikes] = useState({
    reel1: 142800,
    reel2: 98400,
    reel3: 310500
  });

  const [likedMap, setLikedMap] = useState({});

  const toggleLike = (key) => {
    setLikedMap((prev) => {
      const isLiked = prev[key];
      setReelLikes((l) => ({
        ...l,
        [key]: isLiked ? l[key] - 1 : l[key] + 1
      }));
      return { ...prev, [key]: !isLiked };
    });
  };

  const servicePrices = {
    tiktok: { title: 'Dedicated 60s TikTok / IG Reel', price: 25000, estReach: '1.2M - 2.8M views' },
    youtube: { title: 'Dedicated 90s YouTube Integration', price: 45000, estReach: '600k - 1.4M views' },
    storyTrio: { title: '3x Instagram Story Blast + Direct Link', price: 15000, estReach: '400k - 750k views' },
    usageRights: { title: '30-Day Paid Whitelisting & Ad Spark Rights', price: 20000, estReach: 'Global Ad Placement' },
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(selectedServices).forEach((k) => {
      if (selectedServices[k]) total += servicePrices[k].price;
    });
    return total;
  };

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', padding: '2rem 1.5rem', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* Template Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #ec4899, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flame size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#0f172a' }}>
            AURA <span style={{ color: '#ec4899' }}>LUXE</span>
          </span>
        </div>

        <button
          onClick={() => onAdoptTemplate && onAdoptTemplate('Aura Luxe (Creators & Influencers)')}
          className="btn btn-primary btn-sm"
          style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', border: 'none', fontSize: '0.8rem', color: '#fff' }}
        >
          <span>Adopt Aura Luxe</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Creator Media Kit Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '9999px', color: '#db2777', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>GLOBAL LUXURY CREATOR & TASTEMAKER</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1rem', color: '#0f172a' }}>
            Elena Rostova <span style={{ color: '#ec4899' }}>Media Kit</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Partnering with luxury fashion, high-end beauty, and premium lifestyle brands. Reaching over 5.1M highly engaged Gen-Z and Millennial tastemakers globally.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ padding: '0.5rem 1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: '600', color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
              📍 London & Mumbai
            </div>
            <div style={{ padding: '0.5rem 1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: '600', color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
              💎 78% Female Audience
            </div>
            <div style={{ padding: '0.5rem 1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: '600', color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
              🎯 Top Tier: India / UAE / UK
            </div>
          </div>
        </div>

        {/* Dynamic Reach Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid rgba(236,72,153,0.3)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#db2777' }}>2.4M</div>
            <div style={{ fontSize: '0.8rem', color: '#ec4899', fontWeight: '700' }}>TikTok Followers</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>14.2% Avg Eng.</div>
          </div>

          <div style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid rgba(168,85,247,0.3)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#9333ea' }}>1.8M</div>
            <div style={{ fontSize: '0.8rem', color: '#a855f7', fontWeight: '700' }}>YouTube Subs</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>840k Avg Views</div>
          </div>

          <div style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid rgba(244,63,94,0.3)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#e11d48' }}>940K</div>
            <div style={{ fontSize: '0.8rem', color: '#f43f5e', fontWeight: '700' }}>Instagram VIPs</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>8.9% Story CTR</div>
          </div>
        </div>
      </div>

      {/* Interactive Feature 1: Brand Collaboration Rate Card & Deliverables Calculator */}
      <div style={{ background: '#ffffff', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.05rem', color: '#db2777' }}>
              <DollarSign size={20} />
              <span>Interactive Brand Collaboration Rate & Package Calculator</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#475569' }}>Select deliverables to instantly compute budget & estimated campaign impression reach.</p>
          </div>

          <div style={{ textAlign: 'right', background: 'rgba(236,72,153,0.06)', padding: '0.6rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(236,72,153,0.3)' }}>
            <div style={{ fontSize: '0.72rem', color: '#db2777', textTransform: 'uppercase', fontWeight: '800' }}>Estimated Campaign Budget</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#0f172a' }}>
              ₹{calculateTotal().toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: '#64748b' }}>INR</span>
            </div>
          </div>
        </div>

        {/* Deliverables Selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
          {Object.keys(servicePrices).map((key) => {
            const item = servicePrices[key];
            const isSelected = selectedServices[key];
            return (
              <div
                key={key}
                onClick={() => setSelectedServices({ ...selectedServices, [key]: !isSelected })}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: isSelected ? 'rgba(236,72,153,0.08)' : '#f8fafc',
                  border: isSelected ? '1px solid #ec4899' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    background: isSelected ? '#ec4899' : 'rgba(15,23,42,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    color: '#fff'
                  }}
                >
                  {isSelected && <CheckCircle2 size={14} />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '800', color: '#0f172a' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#db2777', marginTop: '0.2rem', fontWeight: '600' }}>{item.estReach}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#0f172a', marginTop: '0.35rem' }}>
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Feature 2: Reels Spotlight with Interactive Likes */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '900', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
          <Video size={18} color="#ec4899" />
          <span>Curated Viral Video Campaigns (Live Engagement Test)</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          
          {/* Reel 1 */}
          <div style={{ background: '#ffffff', borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '140px', background: 'linear-gradient(135deg, #fbcfe8, #f472b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', background: 'rgba(255,255,255,0.9)', color: '#831843', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
                Gucci Haute Couture Spring
              </span>
            </div>
            <div style={{ padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0f172a' }}>Paris Fashion Week</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>2.1M views • 9.8% CTR</div>
              </div>
              <button
                onClick={() => toggleLike('reel1')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '9999px',
                  background: likedMap.reel1 ? 'rgba(236,72,153,0.15)' : '#f1f5f9',
                  color: likedMap.reel1 ? '#db2777' : '#475569',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  border: '1px solid rgba(236,72,153,0.2)'
                }}
              >
                <Heart size={14} fill={likedMap.reel1 ? '#db2777' : 'none'} color={likedMap.reel1 ? '#db2777' : '#475569'} />
                <span>{reelLikes.reel1.toLocaleString()}</span>
              </button>
            </div>
          </div>

          {/* Reel 2 */}
          <div style={{ background: '#ffffff', borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '140px', background: 'linear-gradient(135deg, #e0e7ff, #a5b4fc)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', background: 'rgba(255,255,255,0.9)', color: '#312e81', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
                Dyson Airwrap Botanical Routine
              </span>
            </div>
            <div style={{ padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0f172a' }}>Haircare Routine</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>1.4M views • 14.1% CTR</div>
              </div>
              <button
                onClick={() => toggleLike('reel2')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '9999px',
                  background: likedMap.reel2 ? 'rgba(236,72,153,0.15)' : '#f1f5f9',
                  color: likedMap.reel2 ? '#db2777' : '#475569',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  border: '1px solid rgba(236,72,153,0.2)'
                }}
              >
                <Heart size={14} fill={likedMap.reel2 ? '#db2777' : 'none'} color={likedMap.reel2 ? '#db2777' : '#475569'} />
                <span>{reelLikes.reel2.toLocaleString()}</span>
              </button>
            </div>
          </div>

          {/* Reel 3 */}
          <div style={{ background: '#ffffff', borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '140px', background: 'linear-gradient(135deg, #fef3c7, #fcd34d)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', background: 'rgba(255,255,255,0.9)', color: '#78350f', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
                Cartier Trinity Gala Night
              </span>
            </div>
            <div style={{ padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0f172a' }}>Fine Jewelry Launch</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>3.8M views • 18.2% CTR</div>
              </div>
              <button
                onClick={() => toggleLike('reel3')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '9999px',
                  background: likedMap.reel3 ? 'rgba(236,72,153,0.15)' : '#f1f5f9',
                  color: likedMap.reel3 ? '#db2777' : '#475569',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  border: '1px solid rgba(236,72,153,0.2)'
                }}
              >
                <Heart size={14} fill={likedMap.reel3 ? '#db2777' : 'none'} color={likedMap.reel3 ? '#db2777' : '#475569'} />
                <span>{reelLikes.reel3.toLocaleString()}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
