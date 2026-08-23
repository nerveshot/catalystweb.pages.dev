import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calculator,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Bell,
  Download,
  Building,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Search,
  Check,
  Phone,
  Mail,
  FileText,
  CreditCard,
  Layers,
  Flag,
  Globe,
  Star
} from 'lucide-react';

export default function VanguardAcademyTemplate({ onAdoptTemplate }) {
  // Navigation State
  const [activeNavTab, setActiveNavTab] = useState('home'); // 'home', 'academics', 'admissions', 'houses', 'facilities', 'notices'
  const [activeStream, setActiveStream] = useState('science'); // 'science', 'commerce', 'humanities', 'college'
  const [activeNoticeTab, setActiveNoticeTab] = useState('all'); // 'all', 'admissions', 'circulars', 'events'
  
  // Interactive Fee Calculator State (Realistic Indian Academic INR)
  const [divisionTier, setDivisionTier] = useState('senior_sec'); // 'junior', 'senior_sec', 'college_ug', 'college_pg'
  const [meritScore, setMeritScore] = useState(92);
  const [fellowshipCategory, setFellowshipCategory] = useState('merit'); // 'merit', 'jesuit', 'sports', 'alumni'
  const [hostelSelected, setHostelSelected] = useState(false);
  const [busTransport, setBusTransport] = useState(true);

  // Tour Booking & TC Verification State
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourEmail, setTourEmail] = useState('');
  const [tourGrade, setTourGrade] = useState('Grade 11 - Science (PCM + Computer Science)');
  const [tourConfirmed, setTourConfirmed] = useState(false);
  const [tcNumber, setTcNumber] = useState('');
  const [tcVerified, setTcVerified] = useState(false);
  const [prospectusDownloaded, setProspectusDownloaded] = useState(false);

  // Fee Data in INR
  const feeStructure = {
    junior: { name: 'Junior Wing (Grades 1 to 8)', baseFee: 68000, desc: 'Holistic Foundation, Activity-Based Pedagogy & Language Labs' },
    senior_sec: { name: 'Senior Secondary (Grades 9 to 12 - CBSE)', baseFee: 88000, desc: 'Science, Commerce & Humanities Streams with Advanced AI/Robotics' },
    college_ug: { name: 'Collegiate Undergraduate (BBA, BCA, B.Com Hons, BA Hons)', baseFee: 115000, desc: 'NEP 2020 4-Year Honors Degree affiliated to University of Rajasthan' },
    college_pg: { name: 'Postgraduate & Management (MBA, MCA, M.Com)', baseFee: 145000, desc: 'Dual Specialization & Corporate Placements with Fortune 500 recruiters' },
  };

  const currentFeeData = feeStructure[divisionTier];

  // Scholarship calculations
  let meritDiscount = 0;
  if (meritScore >= 95) meritDiscount = 0.35; // 35%
  else if (meritScore >= 90) meritDiscount = 0.20; // 20%
  else if (meritScore >= 85) meritDiscount = 0.10; // 10%

  let categoryBonusAmount = 0;
  if (fellowshipCategory === 'jesuit') categoryBonusAmount = 18000;
  else if (fellowshipCategory === 'sports') categoryBonusAmount = 22000;
  else if (fellowshipCategory === 'alumni') categoryBonusAmount = 12000;

  const totalDiscount = Math.min(currentFeeData.baseFee, Math.round(currentFeeData.baseFee * meritDiscount + categoryBonusAmount));
  const transportFee = busTransport ? 18000 : 0;
  const hostelFee = hostelSelected ? 75000 : 0;
  const netAnnualInvestment = currentFeeData.baseFee - totalDiscount + transportFee + hostelFee;

  // Authentic St. Xavier's Circulars & Notice Board
  const notices = [
    {
      id: 1,
      category: 'admissions',
      badge: 'ADMISSIONS 2026-27',
      title: 'Online Application Portal Open for Nursery, Class XI (Science/Commerce/Humanities) & College (BBA/BCA/B.Com/BA)',
      date: '23 Aug 2026',
      pdf: 'Admissions_Guidelines_2026.pdf',
      isNew: true
    },
    {
      id: 2,
      category: 'events',
      badge: 'ANNUAL FEST',
      title: "Xavier's National Youth Extravaganza 'ZEST 2026' & All-India Model United Nations (XMUN) Registrations",
      date: '20 Aug 2026',
      pdf: 'XMUN_Delegate_Handbook.pdf',
      isNew: true
    },
    {
      id: 3,
      category: 'circulars',
      badge: 'EXAMINATIONS',
      title: 'CBSE Term-1 Board Assessment & Rajasthan University Semester Schedule for Collegiate Divisions',
      date: '18 Aug 2026',
      pdf: 'Exam_DateSheet_Autumn2026.pdf',
      isNew: false
    },
    {
      id: 4,
      category: 'admissions',
      badge: 'SCHOLARSHIP',
      title: 'Fr. William E. Dsouza Jesuit Memorial Merit-Cum-Means Scholarship Applications Invited',
      date: '14 Aug 2026',
      pdf: 'Jesuit_Scholarship_Form.pdf',
      isNew: false
    }
  ];

  const filteredNotices = activeNoticeTab === 'all' 
    ? notices 
    : notices.filter(n => n.category === activeNoticeTab);

  // House System Data (St. Xavier's Signature 4 Houses)
  const houses = [
    { id: 'george', name: 'St. George House', color: '#dc2626', bg: '#fef2f2', border: '#fca5a5', motto: 'Bravery & Fortitude', points: 1420, emblem: '🦁', leader: 'Capt. Aarav Sharma' },
    { id: 'patrick', name: 'St. Patrick House', color: '#16a34a', bg: '#f0fdf4', border: '#86efac', motto: 'Faith & Dedicated Service', points: 1395, emblem: '🍀', leader: 'Capt. Ananya Rathore' },
    { id: 'andrew', name: 'St. Andrew House', color: '#2563eb', bg: '#eff6ff', border: '#93c5fd', motto: 'Truth, Honor & Integrity', points: 1460, emblem: '⚓', leader: 'Capt. Kabir Shekhawat' },
    { id: 'david', name: 'St. David House', color: '#d97706', bg: '#fffbeb', border: '#fde68a', motto: 'Wisdom & Steadfast Valor', points: 1380, emblem: '🐉', leader: 'Capt. Diya Khandelwal' }
  ];

  // Academic Streams
  const streams = {
    science: {
      title: 'Senior Secondary Science Stream (CBSE)',
      subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'Computer Science (Python/SQL)', 'Physical Education'],
      desc: 'Rigorous engineering and medical preparatory foundation with state-of-the-art Atal Robotics, Biotech and Advanced Physics laboratories.',
      placements: 'Consistent selections in IIT-JEE, NEET-UG, BITSAT and premier international STEM universities.'
    },
    commerce: {
      title: 'Senior Secondary Commerce & FinTech (CBSE)',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics / Informatics Practices', 'Entrepreneurship'],
      desc: 'Industry-integrated commerce curriculum with mock stock exchange simulations, Xavier Commerce Society case studies, and CA foundation mentoring.',
      placements: 'Leading admits to SRCC, St. Xavier’s Kolkata/Mumbai, IIM Indore IPM, and top global business schools.'
    },
    humanities: {
      title: 'Senior Secondary Humanities & Liberal Arts (CBSE)',
      subjects: ['Psychology', 'Political Science', 'Economics', 'History', 'Sociology / English Elective'],
      desc: 'Cultivating critical inquiry, parliamentary debate, model UN diplomacy, and ethical civil service leadership.',
      placements: 'Top ranks in CLAT (National Law Universities), CUET Central Universities, and premier liberal arts academies.'
    },
    college: {
      title: 'St. Xavier’s College Higher Education (NEP 2020)',
      subjects: ['BBA (Bachelor of Business Admin)', 'BCA (Cloud Computing & AI)', 'B.Com (Honours in Finance)', 'BA (Hons in Psychology/Economics)', 'MBA & MCA Dual Specialization'],
      desc: '40-acre expansive college campus in Nevta-Mahapura with Xavier Incubation Centre (XIC) funding student startups up to ₹15 Lakhs.',
      placements: 'Corporate campus recruitments with average ₹8.4 LPA, highest package ₹24 LPA by Fortune 500 firms.'
    }
  };

  const currentStreamData = streams[activeStream];

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (tourName && tourPhone) {
      setTourConfirmed(true);
    }
  };

  const handleTcSearch = (e) => {
    e.preventDefault();
    if (tcNumber) {
      setTcVerified(true);
    }
  };

  const handleDownloadProspectus = () => {
    setProspectusDownloaded(true);
    setTimeout(() => setProspectusDownloaded(false), 4000);
  };

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', fontFamily: 'var(--font-sans)', minHeight: '100%' }}>
      
      {/* 1. Official Institutional Top Utility Bar (Signature St. Xavier's Layout) */}
      <div style={{ background: '#0a2540', color: '#e2e8f0', padding: '0.45rem 1.5rem', fontSize: '0.75rem', borderBottom: '2px solid #d4af37' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <MapPin size={12} color="#d4af37" />
              Bhagwan Das Road, C-Scheme, Jaipur & Nevta Campus
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Phone size={12} color="#d4af37" />
              +91 141 2372336 / 2367792
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Mail size={12} color="#d4af37" />
              principal@xaviersjaipur.edu.in
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#fde047', border: '1px solid #d4af37', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.68rem' }}>
              CBSE Affiliation No: 1730008 • Estd 1941
            </span>
            <button
              onClick={() => setActiveNavTab('admissions')}
              style={{ background: '#d4af37', color: '#0a2540', border: 'none', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.7rem', cursor: 'pointer' }}
            >
              ERP Student Login
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Institutional Header with Traditional Jesuit Crest & Typography */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1rem 1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Crest & Title Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Jesuit Golden Shield Crest */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0a2540 0%, #1e3a8a 60%, #991b1b 100%)',
              border: '2px solid #d4af37',
              boxShadow: '0 4px 12px rgba(10, 37, 64, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              position: 'relative'
            }}>
              <GraduationCap size={26} color="#fde047" />
              <span style={{ fontSize: '0.55rem', fontWeight: '900', color: '#fde047', letterSpacing: '0.05em' }}>IHS</span>
            </div>

            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.45rem', letterSpacing: '0.01em', color: '#0a2540', margin: 0, lineHeight: '1.15' }}>
                ST. XAVIER'S SENIOR SECONDARY SCHOOL & COLLEGE
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#991b1b', fontStyle: 'italic', letterSpacing: '0.05em' }}>
                  "Ad Majorem Dei Gloriam" (For the Greater Glory of God)
                </span>
                <span style={{ color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '700' }}>
                  Jaipur, Rajasthan • Estd. 1941
                </span>
                <span style={{ color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '800' }}>
                  NAAC 'A' Grade Accredited
                </span>
              </div>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handleDownloadProspectus}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0a2540', fontWeight: '700' }}
            >
              {prospectusDownloaded ? <Check size={14} color="#059669" /> : <Download size={14} color="#d4af37" />}
              <span>{prospectusDownloaded ? 'Prospectus PDF Sent' : 'E-Prospectus 2026'}</span>
            </button>

            <button
              onClick={() => onAdoptTemplate && onAdoptTemplate("St. Xavier's Collegiate (Schools & Higher Ed)")}
              className="btn btn-primary btn-sm"
              style={{ background: 'linear-gradient(135deg, #0a2540, #1e3a8a)', border: '1px solid #d4af37', fontSize: '0.8rem', fontWeight: '800', color: '#ffffff' }}
            >
              <span>Adopt Xavier's Template</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Official Navigation Bar */}
      <div style={{ background: '#0a2540', borderBottom: '1px solid #1e3a8a' }}>
        <div style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto', maxWidth: '1240px', margin: '0 auto', padding: '0 1rem' }}>
          {[
            { id: 'home', label: '🏛️ Home' },
            { id: 'about', label: '📜 About Us & Heritage' },
            { id: 'academics', label: '🎓 Academics & Streams' },
            { id: 'admissions', label: '📋 Admissions 2026-27' },
            { id: 'fee_calc', label: '💰 Fee & Scholarships' },
            { id: 'houses', label: '🏆 House System' },
            { id: 'facilities', label: '🏫 Campus Infrastructure' },
            { id: 'notices', label: '📢 Notice Board' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveNavTab(tab.id)}
              style={{
                padding: '0.75rem 1rem',
                border: 'none',
                background: activeNavTab === tab.id ? '#1e3a8a' : 'transparent',
                color: activeNavTab === tab.id ? '#fde047' : '#e2e8f0',
                borderBottom: activeNavTab === tab.id ? '3px solid #d4af37' : '3px solid transparent',
                fontSize: '0.825rem',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 150ms ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Live Red Flashing Notice Board Ticker */}
      <div style={{ background: '#991b1b', color: '#ffffff', padding: '0.55rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '300px', maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ background: '#ffffff', color: '#991b1b', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: '900', fontSize: '0.68rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Bell size={12} />
            <span>LATEST NOTICES</span>
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fef2f2', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            <span style={{ color: '#fde047', fontWeight: '800', marginRight: '0.35rem' }}>[ADMISSIONS 2026-27]</span>
            Online Application forms for Class XI (Science/Commerce/Humanities) & College Wings (BBA/BCA/B.Com/BA) are live. Merit deadline: 15 Sept 2026.
          </div>

          <button
            onClick={() => setActiveNavTab('notices')}
            style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700', cursor: 'pointer' }}
          >
            View All ({notices.length})
          </button>
        </div>
      </div>

      {/* Container Body */}
      <div style={{ maxWidth: '1240px', margin: '2rem auto', padding: '0 1.5rem' }}>
        
        {/* 5. Majestic Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.8rem', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '9999px', color: '#b45309', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
              <Award size={14} color="#d97706" />
              <span>A LEGACY OF EXCELLENCE IN EDUCATION SINCE 1941</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.8vw, 2.9rem)', fontWeight: '900', lineHeight: '1.15', color: '#0a2540', marginBottom: '1rem' }}>
              Nurturing Ethical Leaders & <span style={{ color: '#0284c7' }}>Men & Women for Others</span>
            </h2>

            <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
              Managed by the Jesuit Fathers of the Jaipur Xavier Educational Association (JXEA). We provide value-based holistic education, combining rigorous CBSE academics, NEP 2020 collegiate pathways, state-of-the-art sports facilities, and social stewardship.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveNavTab('admissions')}
                className="btn btn-primary"
                style={{ background: 'linear-gradient(135deg, #0a2540, #1e3a8a)', border: '1px solid #d4af37', color: '#fff', fontWeight: '800' }}
              >
                <span>Online Admission 2026-27</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setActiveNavTab('fee_calc')}
                className="btn btn-secondary"
                style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#0a2540', fontWeight: '700' }}
              >
                <Calculator size={16} color="#d97706" />
                <span>Calculate Fees & Aid</span>
              </button>
            </div>
          </div>

          {/* Key Milestone Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={{ padding: '1.4rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#0a2540', fontFamily: 'var(--font-display)' }}>85+</div>
              <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '800', marginTop: '0.2rem' }}>Years of Eminence</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>Estd 1941 in Jaipur</div>
            </div>

            <div style={{ padding: '1.4rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#d97706', fontFamily: 'var(--font-display)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '800', marginTop: '0.2rem' }}>Board Pass Rate</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>CBSE Class X & XII</div>
            </div>

            <div style={{ padding: '1.4rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#059669', fontFamily: 'var(--font-display)' }}>40-Acre</div>
              <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '800', marginTop: '0.2rem' }}>Lush Green Campus</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>C-Scheme & Nevta</div>
            </div>

            <div style={{ padding: '1.4rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#991b1b', fontFamily: 'var(--font-display)' }}>NAAC 'A'</div>
              <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '800', marginTop: '0.2rem' }}>Accreditation</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>Top State Ranking</div>
            </div>
          </div>
        </div>

        {/* 6. The 4 Iconic Quick Action Portal Boxes (Signature Indian Institutional Website Feature) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          
          <div
            onClick={() => setActiveNavTab('admissions')}
            style={{ padding: '1.25rem', background: 'linear-gradient(135deg, #0a2540, #1e3a8a)', borderRadius: '1rem', color: '#ffffff', cursor: 'pointer', boxShadow: 'var(--shadow-md)', transition: 'transform 150ms ease' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <GraduationCap size={24} color="#fde047" />
              <ArrowRight size={18} color="#fde047" />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '900' }}>Digital Admission Portal</div>
            <div style={{ fontSize: '0.75rem', color: '#93c5fd', marginTop: '0.35rem' }}>Online registration, entrance test syllabus & eligibility for 2026-27.</div>
          </div>

          <div
            onClick={() => setActiveNavTab('fee_calc')}
            style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', color: '#0a2540', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <CreditCard size={24} color="#059669" />
              <ArrowRight size={18} color="#059669" />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '900' }}>Online Fee Payment</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem' }}>Secure fee submission, installment receipts & scholarship status.</div>
          </div>

          <div
            onClick={() => setActiveNavTab('admissions')}
            style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', color: '#0a2540', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <FileText size={24} color="#d97706" />
              <ArrowRight size={18} color="#d97706" />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '900' }}>TC & Result Verification</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem' }}>Official Transfer Certificate verification and CBSE board mark sheets.</div>
          </div>

          <div
            onClick={() => setActiveNavTab('facilities')}
            style={{ padding: '1.25rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', color: '#0a2540', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <Building size={24} color="#991b1b" />
              <ArrowRight size={18} color="#991b1b" />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '900' }}>Virtual Campus Tour</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem' }}>Explore 40-acre campus, science labs, Olympic pool & cricket oval.</div>
          </div>

        </div>

        {/* 7. Message from the Rector / Principal */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '2rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Principal's Desk
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: '900', color: '#0a2540', marginBottom: '0.75rem' }}>
                "Empowering Minds, Inspiring Character"
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
                "At St. Xavier's, education transcends the boundaries of textbooks. We form individuals of competence, conscience, and compassionate commitment. Our students learn to excel in academics while remaining profoundly empathetic towards society. We welcome you to experience the vibrant spirit of Xavier’s."
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <div style={{ fontWeight: '800', color: '#0a2540', fontSize: '0.95rem' }}>Rev. Fr. Principal, SJ</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Jaipur Xavier Educational Association (JXEA)</div>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0a2540', marginBottom: '0.75rem' }}>
                Jesuit Educational Core Values:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.825rem', color: '#334155' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Magis:</strong> The drive to excel more deeply for the common good.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Cura Personalis:</strong> Individualized care for every student’s mind and heart.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Social Stewardship:</strong> Active community outreach through AICUF & Rotaract.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 8. Interactive Academic Stream & Degree Explorer */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '2rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.2rem', color: '#0a2540' }}>
                <BookOpen size={20} color="#0284c7" />
                <span>Academic Streams & NEP 2020 Curriculum</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Select a stream to explore course modules, laboratory facilities, and competitive exam preparation.
              </p>
            </div>

            {/* Stream Switcher */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[
                { id: 'science', label: '🔬 Science (PCM/PCB)' },
                { id: 'commerce', label: '📊 Commerce & FinTech' },
                { id: 'humanities', label: '📚 Humanities & Arts' },
                { id: 'college', label: '🎓 College Degrees (BBA/BCA)' }
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveStream(st.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    background: activeStream === st.id ? '#0a2540' : '#f1f5f9',
                    color: activeStream === st.id ? '#fde047' : '#475569',
                    border: activeStream === st.id ? '1px solid #0a2540' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stream Detail Card */}
          <div style={{ background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#0a2540', marginBottom: '0.5rem' }}>
              {currentStreamData.title}
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {currentStreamData.desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Core Subjects Offered:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {currentStreamData.subjects.map((sub, i) => (
                    <span key={i} style={{ background: 'rgba(2,132,199,0.08)', color: '#0369a1', border: '1px solid rgba(2,132,199,0.2)', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Career & Placements Pathway:
                </div>
                <div style={{ fontSize: '0.825rem', color: '#334155', lineHeight: '1.5' }}>
                  {currentStreamData.placements}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Interactive Fee Schedule & Jesuit Scholarship Calculator in INR */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '2rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.2rem', color: '#0a2540' }}>
                <Calculator size={20} color="#d97706" />
                <span>Interactive Tuition & Jesuit Scholarship Calculator (INR)</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Transparent Indian academic fee structure with automatic merit and endowment fellowship concessions.
              </p>
            </div>

            <div style={{ textAlign: 'right', background: 'rgba(217,119,6,0.08)', padding: '0.6rem 1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(217,119,6,0.3)' }}>
              <div style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: '800', textTransform: 'uppercase' }}>Net Annual Investment</div>
              <div style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0a2540' }}>
                ₹{netAnnualInvestment.toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: '#64748b' }}>/ annum</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            
            {/* Division Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0a2540' }}>
                1. Select Academic Division:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {Object.keys(feeStructure).map((key) => {
                  const item = feeStructure[key];
                  const isSelected = divisionTier === key;
                  return (
                    <div
                      key={key}
                      onClick={() => setDivisionTier(key)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        background: isSelected ? 'rgba(10,37,64,0.06)' : '#f8fafc',
                        border: isSelected ? '1px solid #0a2540' : '1px solid #e2e8f0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.825rem'
                      }}
                    >
                      <span style={{ fontWeight: isSelected ? '800' : '600', color: isSelected ? '#0a2540' : '#334155' }}>
                        {item.name}
                      </span>
                      <span style={{ fontWeight: '800', color: '#0284c7' }}>
                        ₹{item.baseFee.toLocaleString('en-IN')}/yr
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Score Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.825rem', fontWeight: '800', color: '#0a2540' }}>
                  2. Qualifying Board / Entrance Score:
                </label>
                <span style={{ fontSize: '1rem', fontWeight: '900', color: '#0284c7' }}>
                  {meritScore}% Aggregate
                </span>
              </div>

              <input
                type="range"
                min="70"
                max="99"
                value={meritScore}
                onChange={(e) => setMeritScore(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1rem' }}
              />

              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.25)', fontSize: '0.78rem', color: '#065f46', fontWeight: '600' }}>
                <strong>Merit Discount: </strong>
                {meritScore >= 95 && 'Presidential Gold Medalist (35% Fee Concession)'}
                {meritScore >= 90 && meritScore < 95 && 'Dean’s Honor Tier (20% Fee Concession)'}
                {meritScore >= 85 && meritScore < 90 && 'Academic Distinction (10% Fee Concession)'}
                {meritScore < 85 && 'Standard General Fee Schedule Applied'}
              </div>
            </div>

            {/* Category & Transport Add-on */}
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0a2540' }}>
                3. Special Fellowships & Transport:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { id: 'merit', label: 'Open Merit Category', concession: `Saved: ₹${totalDiscount.toLocaleString('en-IN')}` },
                  { id: 'jesuit', label: 'Jesuit & Minority Endowment', concession: '+₹18,000 Extra Grant' },
                  { id: 'sports', label: 'State/National Sports Laureate', concession: '+₹22,000 Extra Grant' },
                  { id: 'alumni', label: 'Xavier Alumni Ward Concession', concession: '+₹12,000 Extra Grant' },
                ].map((fel) => (
                  <div
                    key={fel.id}
                    onClick={() => setFellowshipCategory(fel.id)}
                    style={{
                      padding: '0.55rem 0.85rem',
                      borderRadius: '0.5rem',
                      background: fellowshipCategory === fel.id ? '#fef3c7' : '#f8fafc',
                      border: fellowshipCategory === fel.id ? '1px solid #d97706' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.78rem'
                    }}
                  >
                    <span style={{ fontWeight: '700', color: fellowshipCategory === fel.id ? '#b45309' : '#334155' }}>{fel.label}</span>
                    <span style={{ color: '#d97706', fontWeight: '800' }}>{fel.concession}</span>
                  </div>
                ))}

                {/* Transport & Hostel Toggles */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <div
                    onClick={() => setBusTransport(!busTransport)}
                    style={{
                      padding: '0.5rem',
                      borderRadius: '0.4rem',
                      background: busTransport ? 'rgba(2,132,199,0.1)' : '#f8fafc',
                      border: busTransport ? '1px solid #0284c7' : '1px solid #e2e8f0',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontWeight: '700',
                      color: busTransport ? '#0284c7' : '#64748b'
                    }}
                  >
                    {busTransport ? '✓ Bus (+₹18k)' : '+ Add Bus'}
                  </div>

                  <div
                    onClick={() => setHostelSelected(!hostelSelected)}
                    style={{
                      padding: '0.5rem',
                      borderRadius: '0.4rem',
                      background: hostelSelected ? 'rgba(2,132,199,0.1)' : '#f8fafc',
                      border: hostelSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontWeight: '700',
                      color: hostelSelected ? '#0284c7' : '#64748b'
                    }}
                  >
                    {hostelSelected ? '✓ Hostel (+₹75k)' : '+ Add Hostel'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 10. The 4 Legendary Houses of St. Xavier's (Signature Xavier's School Culture) */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '2rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.2rem', color: '#0a2540' }}>
                <Flag size={20} color="#991b1b" />
                <span>The 4 Legendary Houses & Annual Cock-House Championship</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Since 1941, every Xavierite is assigned to one of four historic houses fostering camaraderie, debate, athletics and discipline.
              </p>
            </div>

            <div style={{ background: '#fef3c7', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid #fde68a', fontSize: '0.75rem', fontWeight: '800', color: '#b45309' }}>
              🏆 Current Leader: St. Andrew House (1,460 Pts)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {houses.map((h) => (
              <div
                key={h.id}
                style={{
                  padding: '1.25rem',
                  borderRadius: '0.85rem',
                  background: h.bg,
                  border: `1px solid ${h.border}`,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{h.emblem}</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '900', color: h.color }}>{h.points} pts</span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: '900', color: '#0f172a' }}>{h.name}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: h.color, marginTop: '0.2rem' }}>Motto: {h.motto}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.4rem' }}>
                  House Captain: <strong style={{ color: '#0f172a' }}>{h.leader}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Live Digital Notice Board & Circulars Hub */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '1.25rem', padding: '2rem', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.2rem', color: '#0a2540' }}>
                <Bell size={20} color="#0284c7" />
                <span>Digital Notice Board & Official Circulars</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Official administrative notifications, exam schedules, and competition entry forms.
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {[
                { id: 'all', label: 'All Notices' },
                { id: 'admissions', label: 'Admissions' },
                { id: 'circulars', label: 'Examinations' },
                { id: 'events', label: 'Fests & MUN' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveNoticeTab(cat.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    background: activeNoticeTab === cat.id ? '#0a2540' : '#f1f5f9',
                    color: activeNoticeTab === cat.id ? '#fde047' : '#64748b',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredNotices.map((nt) => (
              <div
                key={nt.id}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '0.75rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: '800', background: 'rgba(10,37,64,0.1)', color: '#0a2540', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                      {nt.badge}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>📅 {nt.date}</span>
                    {nt.isNew && (
                      <span style={{ fontSize: '0.65rem', fontWeight: '800', background: '#dc2626', color: '#fff', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0f172a' }}>
                    {nt.title}
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading official circular: ${nt.pdf}`)}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.72rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Download size={13} color="#0284c7" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Campus Infrastructure & Tour Booking Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          {/* Campus Highlights */}
          <div style={{ background: '#ffffff', borderRadius: '1.25rem', border: '1px solid #e2e8f0', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '1rem', color: '#0a2540', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building size={18} color="#0284c7" />
              <span>World-Class Campus Infrastructure</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ padding: '0.85rem', background: '#f8fafc', borderRadius: '0.6rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0a2540' }}>Central Jesuit Library</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>50,000+ volumes, digital JSTOR repository & quiet reading halls</div>
              </div>

              <div style={{ padding: '0.85rem', background: '#f8fafc', borderRadius: '0.6rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0a2540' }}>Atal Robotics & AI Lab</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>3D printers, IoT kits, Python/AI stations & drone mechanics</div>
              </div>

              <div style={{ padding: '0.85rem', background: '#f8fafc', borderRadius: '0.6rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0a2540' }}>Sports Pavilion & Oval</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>Full-size cricket oval, football pitch & synthetic tennis courts</div>
              </div>

              <div style={{ padding: '0.85rem', background: '#f8fafc', borderRadius: '0.6rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0a2540' }}>Olympic Swimming Complex</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>Heated 50m competition pool with certified life coaches</div>
              </div>
            </div>
          </div>

          {/* Schedule Guided Tour Form */}
          <div style={{ background: '#ffffff', borderRadius: '1.25rem', border: '1px solid #e2e8f0', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '0.35rem', color: '#0a2540', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} color="#0284c7" />
              <span>Schedule an Admissions Campus Visit</span>
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
              Meet faculty deans, explore classrooms, laboratories and sports facilities.
            </p>

            {tourConfirmed ? (
              <div style={{ padding: '1rem', borderRadius: '0.6rem', background: 'rgba(5,150,105,0.1)', border: '1px solid #059669', color: '#065f46', textAlign: 'center', fontSize: '0.85rem', fontWeight: '800' }}>
                ✓ Campus Visit Confirmed for {tourName}!
                <div style={{ fontSize: '0.75rem', color: '#065f46', marginTop: '0.3rem', fontWeight: '600' }}>
                  Admissions Dean gate pass & schedule dispatched to {tourPhone}.
                </div>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Candidate / Parent Name"
                    value={tourName}
                    onChange={(e) => setTourName(e.target.value)}
                    style={{ padding: '0.65rem 0.85rem', borderRadius: '0.5rem', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.825rem' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Contact (+91)"
                    value={tourPhone}
                    onChange={(e) => setTourPhone(e.target.value)}
                    style={{ padding: '0.65rem 0.85rem', borderRadius: '0.5rem', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.825rem' }}
                  />
                </div>

                <select
                  value={tourGrade}
                  onChange={(e) => setTourGrade(e.target.value)}
                  style={{ padding: '0.65rem 0.85rem', borderRadius: '0.5rem', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.825rem' }}
                >
                  <option value="Grade 11 - Science (PCM/PCB)">Grade 11 - Science (PCM / PCB)</option>
                  <option value="Grade 11 - Commerce with Maths/IP">Grade 11 - Commerce Stream</option>
                  <option value="Grade 11 - Humanities & Liberal Arts">Grade 11 - Humanities Stream</option>
                  <option value="Collegiate BBA / BCA (Nevta Campus)">Collegiate BBA / BCA Degree</option>
                  <option value="Junior & Middle School Wing">Junior & Middle School Wing</option>
                </select>

                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  style={{ background: 'linear-gradient(135deg, #0a2540, #1e3a8a)', color: '#ffffff', fontWeight: '800', marginTop: '0.3rem' }}
                >
                  Confirm Guided Campus Visit
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* 13. Institutional Footer (Official St. Xavier's Information) */}
      <div style={{ background: '#0a2540', color: '#e2e8f0', borderTop: '4px solid #d4af37', padding: '2.5rem 1.5rem 1.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          
          <div>
            <div style={{ fontWeight: '900', fontSize: '1.1rem', color: '#fde047', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              ST. XAVIER'S JAIPUR
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Established in 1941 by the Society of Jesus (Jesuits). Nurturing leaders of conscience, competence and compassionate commitment.
            </p>
            <div style={{ fontSize: '0.75rem', color: '#d4af37', marginTop: '0.75rem', fontWeight: '700' }}>
              Motto: "Ad Majorem Dei Gloriam"
            </div>
          </div>

          <div>
            <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Campus Locations
            </div>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              <strong>School Campus:</strong><br />
              Bhagwan Das Road, C-Scheme, Jaipur - 302001<br /><br />
              <strong>College Campus:</strong><br />
              Nevta-Mahapura Road, Near Nevta Dam, Jaipur - 302029
            </div>
          </div>

          <div>
            <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Academic Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
              <li>• CBSE Affiliation No. 1730008</li>
              <li>• University of Rajasthan Affiliation</li>
              <li>• NAAC 'A' Grade Peer Assessment</li>
              <li>• Xavier Alumni Association (XAA)</li>
              <li>• Xavier Incubation Centre (XIC)</li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Contact & Inquiries
            </div>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Tel: +91 141 2372336 / 2367792<br />
              Admissions: admissions@xaviersjaipur.edu.in<br />
              Office Hours: Mon–Sat, 8:00 AM – 3:30 PM
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
          © 1941–2026 St. Xavier's Senior Secondary School & College, Jaipur. All Rights Reserved. Designed with sub-0.4s Cloudflare performance by LaunchPages.
        </div>
      </div>

    </div>
  );
}
