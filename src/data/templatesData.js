export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All Templates', icon: 'Sparkles' },
  { id: 'saas', label: 'AI & SaaS', icon: 'Cpu' },
  { id: 'creator', label: 'Creators & Media', icon: 'Flame' },
  { id: 'hospitality', label: 'Fine Dining & Hospitality', icon: 'Utensils' },
  { id: 'education', label: 'Schools & Higher Ed', icon: 'GraduationCap' },
  { id: 'realestate', label: 'Luxury Real Estate', icon: 'Building2' },
  { id: 'medical', label: 'Medical & Dental', icon: 'HeartPulse' },
  { id: 'agency', label: 'Creative Studios', icon: 'Palette' },
];

export const TEMPLATES = [
  {
    id: 'nexus',
    name: 'Nexus 3.0',
    tagline: 'Autonomous AI Infrastructure & Enterprise SaaS Engine',
    category: 'saas',
    categoryLabel: 'AI & SaaS',
    badge: 'Flagship Tech',
    badgeColor: 'violet',
    accentColor: '#6366f1',
    description: 'Ultra-low latency landing page with real-time global API latency monitors, interactive compute cost ROI slider, bento feature grid, and live early-access waitlist.',
    metrics: { speed: '0.24s LCP', score: '100/100', conversion: '+410% ARR lift' },
    features: [
      'Real-time Global Edge Latency Telemetry (Live Ping)',
      'Dynamic Compute ROI & Serverless Cost Calculator',
      'High-Density Bento Grid Feature Architecture',
      'Tiered Pricing Switcher (Monthly / Annual Discount)',
      'Instant Webhook Waitlist Form with Validation'
    ],
    previewBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.1))',
    heroTag: 'SUB-10MS INFERENCE ON CLOUDFLARE WORKERS'
  },
  {
    id: 'aura',
    name: 'Aura Luxe',
    tagline: 'High-Fashion Media Kit & Creator Brand Portal',
    category: 'creator',
    categoryLabel: 'Creators & Media',
    badge: 'Viral Edition',
    badgeColor: 'rose',
    accentColor: '#ec4899',
    description: 'Vogue-inspired editorial layout for top-tier creators and digital personalities with live cross-platform reach counters, dynamic rate card calculator, and video reels spotlight.',
    metrics: { speed: '0.31s LCP', score: '99/100', conversion: '5.2M Monthly Impressions' },
    features: [
      'Live Audience Reach Counters (2.4M TikTok, 1.8M YT, 940K IG)',
      'Dynamic Brand Sponsorship Rate & Deliverables Calculator',
      'Curated Video Reels Showcase with Interactive Like Counter',
      'Exclusive VIP Press & Management Booking Desk',
      'Minimalist Glassmorphic Link-in-Bio Dropdown'
    ],
    previewBg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.1))',
    heroTag: 'PREMIER TALENT REPRESENTATION'
  },
  {
    id: 'maison',
    name: 'Maison Élite',
    tagline: '2-Michelin Star Gastronomy & Sommelier Sanctuary',
    category: 'hospitality',
    categoryLabel: 'Fine Dining & Hospitality',
    badge: 'Michelin Grade',
    badgeColor: 'gold',
    accentColor: '#f59e0b',
    description: 'Opulent culinary design with interactive table reservation booking widget, room atmosphere selector (Chef Table / Grand Salon), and filterable seasonal degustation menu.',
    metrics: { speed: '0.28s LCP', score: '100/100', conversion: '+340% Table Bookings' },
    features: [
      'Interactive Table Reservation Engine with Live Slot Triage',
      'Atmosphere & Dining Room Experience Switcher',
      'Filterable 9-Course Degustation & Seasonal Caviar Menu',
      'Sommelier Grand Cru Reserve Pairing Notes',
      'Private Chef Table & Private Event Inquiries'
    ],
    previewBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1))',
    heroTag: 'THREE ROSETTES & TWO MICHELIN STARS'
  },
  {
    id: 'vanguard',
    name: 'Vanguard Academy',
    tagline: 'Elite Global Academy & Ivy-League Preparatory Portal',
    category: 'education',
    categoryLabel: 'Schools & Higher Ed',
    badge: 'Ivy League',
    badgeColor: 'cyan',
    accentColor: '#06b6d4',
    description: 'Authoritative academic portal featuring dynamic tuition & merit grant calculator, 100% Ivy acceptance stat grid, interactive curriculum stream explorer, and Open Day RSVP.',
    metrics: { speed: '0.33s LCP', score: '100/100', conversion: '+185% Admissions Inquiry' },
    features: [
      'Dynamic Academic Tuition & Merit Grant Aid Estimator',
      'Key Metric Dashboard (100% Acceptance, 6:1 Ratio, 42 APs)',
      'Filterable Academic Stream Explorer (STEM, Law, Arts, AI)',
      'Interactive Campus Tour & Open-Day RSVP Calendar',
      'Direct Dean Advisory Consultation Request'
    ],
    previewBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1))',
    heroTag: 'CENTURY OF ACADEMIC EXCELLENCE'
  },
  {
    id: 'apex',
    name: 'Apex Living',
    tagline: 'Swiss Minimalist Ultra-Luxury Architectural Estates',
    category: 'realestate',
    categoryLabel: 'Luxury Real Estate',
    badge: 'Architectural',
    badgeColor: 'emerald',
    accentColor: '#10b981',
    description: 'Sleek architectural grid featuring interactive blueprint and floorplan switchers, 360° virtual room inspectors, unit specifications, and private broker viewing scheduler.',
    metrics: { speed: '0.29s LCP', score: '99/100', conversion: '$64M Sold Portfolio' },
    features: [
      'Interactive Architectural Floorplan Switcher with Room Dimensions',
      'Virtual 360° Living Room, Sky Penthouse & Master Suite Inspector',
      'Curated Spec Sheet (Italian Marble, Private Heliport, Sub-Zero)',
      'VIP Private Jet / Limousine Tour Consultation Request',
      'Downloadable High-Res Architectural Dossier (PDF/ZIP)'
    ],
    previewBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.1))',
    heroTag: 'BESPOKE SKY RESIDENCES & COASTAL VILLAS'
  },
  {
    id: 'pulse',
    name: 'Pulse Smiles',
    tagline: 'Next-Gen Cosmetic Dentistry & Medical Wellness Clinic',
    category: 'medical',
    categoryLabel: 'Medical & Dental',
    badge: 'Clinical Luxury',
    badgeColor: 'cyan',
    accentColor: '#06b6d4',
    description: 'State-of-the-art clinical experience with interactive Before/After smile transformation image reveal slider, procedure triage selector, and real-time insurance eligibility lookup.',
    metrics: { speed: '0.27s LCP', score: '100/100', conversion: '+280% Consult Bookings' },
    features: [
      'Interactive Before/After Smile Transformation Reveal Slider',
      'Smart Procedure Selector (Veneers, Invisalign, Implants, Whitening)',
      'Instant Insurance Provider Coverage & Financing Eligibility Checker',
      'Board-Certified Specialist Profiles & Medical Accreditations',
      'Same-Day Emergency Dental Appointment Dispatch'
    ],
    previewBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.1))',
    heroTag: 'BEVERLY HILLS & HARLEY STREET CLINICAL STANDARD'
  },
  {
    id: 'zenith',
    name: 'Zenith Studio',
    tagline: 'Brutalist-Luxe Design Lab & Kinetic Digital Craft',
    category: 'agency',
    categoryLabel: 'Creative Studios',
    badge: 'Awwwards SOTD',
    badgeColor: 'purple',
    accentColor: '#a855f7',
    description: 'Radical editorial brutalism with kinetic typography, filterable case studies with financial impact metrics, dynamic Dark/Neon theme switcher, and international awards wall.',
    metrics: { speed: '0.22s LCP', score: '100/100', conversion: '14x Awwwards SOTD' },
    features: [
      'Real-Time Dark/Neon Theme Color Mode Switcher',
      'Dynamic Filterable Case Studies with Direct ROI & Metrics',
      'International Accolades Grid (Awwwards SOTD, FWA, D&AD)',
      'Interactive Kinetic Services Matrix with Scope Tags',
      '1-Click RFP Generator with Direct Studio Slack Integration'
    ],
    previewBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1))',
    heroTag: 'DESIGN CRAFT FOR CULTURE-DEFINING BRANDS'
  }
];
