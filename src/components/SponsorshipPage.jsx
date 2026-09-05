import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Users, 
  Award, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar,
  Layers,
  Grid,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATRE_INFO } from '../data/theatreData';

export const SPONSORSHIP_SLIDES = [
  { id: 0, file: 'shiv shakti ppt-images-0.jpg', title: 'Shiv Shakti — A Divine Love Story', category: 'Executive Overview', desc: '100 Shows Pan-India First Season • 80,000+ Live Audience' },
  { id: 1, file: 'shiv shakti ppt-images-1.jpg', title: 'The Play — A Timeless Epic on Grand Scale', category: 'Artistic Vision', desc: 'Broadway-scale staging with original live score and transcendent dramaturgy' },
  { id: 2, file: 'shiv shakti ppt-images-2.jpg', title: 'Sanatan Pauranik Itihasa Staged for the World', category: 'Artistic Vision', desc: 'The eternal union of consciousness and energy, stillness and cosmic dance' },
  { id: 3, file: 'shiv shakti ppt-images-3.jpg', title: 'Pan-India Tour Footprint & Venues', category: 'Tour & Reach', desc: 'Flagship runs across Mumbai, Delhi, Bengaluru, Pune, and Ahmedabad' },
  { id: 4, file: 'shiv shakti ppt-images-4.jpg', title: 'Audience Demographics & Cultural Patrons', category: 'Audience Demographics', desc: 'High net-worth families, cultural leaders, youth patrons, and corporate leaders' },
  { id: 5, file: 'shiv shakti ppt-images-5.jpg', title: 'Auditorium & On-Ground Brand Exposure', category: 'Brand Integration', desc: 'Premium foyer lounges, red carpet step-and-repeat backdrops, and stage callouts' },
  { id: 6, file: 'shiv shakti ppt-images-6.jpg', title: 'Digital, Ticketing & Media Footprint', category: 'Omnichannel Media', desc: 'Multi-channel integration across BookMyShow, District, social channels, and press' },
  { id: 7, file: 'shiv shakti ppt-images-7.jpg', title: 'Sponsorship Tiers & Strategic Value', category: 'Partnership Packages', desc: 'High-impact partnership packages tailored to corporate and brand objectives' },
  { id: 8, file: 'shiv shakti ppt-images-8.jpg', title: 'Title Partner — Supreme Co-Branding', category: 'Partnership Packages', desc: 'Top marquee billing across all 100 shows, tickets, media, and promotional assets' },
  { id: 9, file: 'shiv shakti ppt-images-9.jpg', title: 'Powered By & Associate Partner Tiers', category: 'Partnership Packages', desc: 'Category exclusivity, high-frequency branding, and interactive foyer touchpoints' },
  { id: 10, file: 'shiv shakti ppt-images-10.jpg', title: 'Experiential Activations & Sampling', category: 'Brand Activations', desc: 'Product displays, branded lounges, photo zones, and patron engagement stalls' },
  { id: 11, file: 'shiv shakti ppt-images-11.jpg', title: 'VIP Hospitality & Corporate Hosting', category: 'Hospitality & Access', desc: 'Exclusive VIP box seats, private cast receptions, and client gala experiences' },
  { id: 12, file: 'shiv shakti ppt-images-12.jpg', title: 'Production Timeline & Campaign Milestones', category: 'Marketing Timeline', desc: 'Rehearsals, premiere dates, festival entries, and multi-city tour rollouts' },
  { id: 13, file: 'shiv shakti ppt-images-13.jpg', title: 'Creative Ensemble & Master Artists', category: 'The Company', desc: 'Acclaimed directors, playwrights, choreographers, and master percussionists' },
  { id: 14, file: 'shiv shakti ppt-images-14.jpg', title: 'Direct Partnership Channel & Contact', category: 'Get in Touch', desc: 'Connect with Areeso Theatre’s Brand & Sponsorship Leadership team' }
];

export default function SponsorshipPage({ onNavigateHome, setCursorText }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'deck'
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    tier: 'Title Partner',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ['All', 'Executive Overview', 'Artistic Vision', 'Tour & Reach', 'Partnership Packages', 'Brand Activations', 'Hospitality & Access'];

  const filteredSlides = activeCategory === 'All' 
    ? SPONSORSHIP_SLIDES 
    : SPONSORSHIP_SLIDES.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % SPONSORSHIP_SLIDES.length);
        if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + SPONSORSHIP_SLIDES.length) % SPONSORSHIP_SLIDES.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#e60064', '#111111', '#fbbf24', '#2563eb']
      });
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-24 pb-24 selection:bg-[#e60064] selection:text-white">
      
      {/* Top Breadcrumb & Back Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-4 pb-6">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#666666] hover:text-[#e60064] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header matching Boch & Fernsh Design Language */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-16 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200">
              <span className="w-2 h-2 rounded-full bg-[#e60064] animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
                Partnership & Sponsorship Opportunities
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[72px] tracking-tight leading-[1.04] text-[#111111]">
              empower culture. <br />
              <span className="text-[#e60064]">elevate your brand.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#444444] font-normal leading-relaxed max-w-2xl">
              Partner with Areeso Theatre's inaugural magnum opus — <strong className="text-[#111111] font-semibold">Shiv-Shakti: A Divine Love Story</strong>. 
              A 100-show pan-India production reaching 80,000+ high-affinity, culturally engaged live patrons across India’s finest metropolitan auditoriums.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <a
              href="/assets/sponsership/shiv-shakti-pitch-deck.pdf"
              download="Shiv-Shakti-Sponsorship-Pitch-Deck.pdf"
              className="w-full px-6 py-4 rounded-xl bg-[#111111] hover:bg-[#e60064] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Full Pitch Deck (PDF)</span>
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('partnership-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-6 py-3.5 rounded-xl border border-gray-900 bg-white hover:bg-gray-50 text-[#111111] font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span>Submit Sponsorship Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 4 Quick Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-gray-100">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-[#111111]">100</p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#e60064] font-bold">Shows Pan-India</p>
            <p className="text-xs text-[#666666]">Season 1 Multi-City Tour</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-[#111111]">80,000+</p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#2563eb] font-bold">Live Footfall</p>
            <p className="text-xs text-[#666666]">Direct Auditorium Reach</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-[#111111]">5 Metros</p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ea580c] font-bold">Premier Cities</p>
            <p className="text-xs text-[#666666]">Mumbai, Delhi, BLR, Pune, AMD</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-[#111111]">100% Live</p>
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">Percussion Score</p>
            <p className="text-xs text-[#666666]">Broadway-Style Grand Staging</p>
          </div>
        </div>
      </section>

      {/* Main Presentation Slides Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16">
        
        {/* Controls Bar: Category Filters & View Mode Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-200">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#111111] tracking-tight">
              Official Pitch Deck Presentation
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#666666] pt-1">
              Explore all 15 official deck slides below • Click any slide to view high-resolution fullscreen
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-lg bg-gray-100 border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' ? 'bg-[#111111] text-white shadow-sm' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('deck')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  viewMode === 'deck' ? 'bg-[#111111] text-white shadow-sm' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Deck Viewer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 py-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#e60064] text-white font-bold shadow-md'
                  : 'bg-gray-100 text-[#555555] hover:bg-gray-200 hover:text-black border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VIEW MODE 1: Interactive Deck Viewer Carousel */}
        {viewMode === 'deck' && (
          <div className="space-y-6 bg-gray-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
            {/* Active Slide Display */}
            <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
              <img
                src={`/assets/sponsership/${SPONSORSHIP_SLIDES[activeSlideIndex].file}`}
                alt={SPONSORSHIP_SLIDES[activeSlideIndex].title}
                className="w-full h-full object-contain cursor-pointer"
                onClick={() => setLightboxIndex(activeSlideIndex)}
              />

              {/* Top Banner with Slide info */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#fbbf24] text-xs font-mono font-bold border border-white/20">
                  Slide {activeSlideIndex + 1} of {SPONSORSHIP_SLIDES.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(activeSlideIndex)}
                  className="pointer-events-auto p-2 rounded-full bg-black/80 backdrop-blur-md text-white hover:bg-[#e60064] transition-colors border border-white/20"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Prev / Next Overlay Controls */}
              <button
                onClick={() => setActiveSlideIndex((prev) => (prev - 1 + SPONSORSHIP_SLIDES.length) % SPONSORSHIP_SLIDES.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#e60064] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveSlideIndex((prev) => (prev + 1) % SPONSORSHIP_SLIDES.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#e60064] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Meta & Captions */}
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="space-y-1">
                <p className="text-xs font-mono text-[#e60064] uppercase tracking-widest font-bold">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].category}
                </p>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].title}
                </h3>
                <p className="text-xs text-white/60">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].desc}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-white/50">Jump to:</span>
                <select
                  value={activeSlideIndex}
                  onChange={(e) => setActiveSlideIndex(Number(e.target.value))}
                  className="bg-black/80 border border-white/20 text-white rounded-lg px-3 py-1.5 text-xs font-mono focus:outline-none focus:border-[#e60064]"
                >
                  {SPONSORSHIP_SLIDES.map((s, idx) => (
                    <option key={s.id} value={idx}>
                      {idx + 1}. {s.title.slice(0, 30)}...
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Thumbnails Strip */}
            <div className="max-w-5xl mx-auto flex items-center gap-2.5 overflow-x-auto pb-2 pt-4 scrollbar-thin">
              {SPONSORSHIP_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`relative shrink-0 w-24 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${
                    activeSlideIndex === idx ? 'border-[#e60064] scale-105 shadow-md' : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={`/assets/sponsership/${slide.file}`}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold bg-black/80 px-1 rounded text-white">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* VIEW MODE 2: High-Resolution All 15 Slides Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSlides.map((slide) => (
              <div
                key={slide.id}
                onClick={() => setLightboxIndex(slide.id)}
                className="group cursor-pointer rounded-2xl bg-white border border-gray-200 hover:border-gray-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Slide Image Frame */}
                <div className="relative aspect-[16/9] bg-gray-900 overflow-hidden">
                  <img
                    src={`/assets/sponsership/${slide.file}`}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Slide Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold">
                    Slide {slide.id + 1}
                  </div>

                  {/* Top Category Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#111111] text-[10px] font-mono font-semibold">
                    {slide.category}
                  </div>

                  {/* Zoom Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-[#e60064] text-white flex items-center justify-center shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Text & Metadata */}
                <div className="p-5 space-y-2 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-[#111111] group-hover:text-[#e60064] transition-colors leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-[#666666] font-normal leading-relaxed line-clamp-2">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#777777] group-hover:text-[#111111] transition-colors">
                    <span>View High-Res Slide</span>
                    <span className="font-bold text-[#e60064] group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Sponsorship Tiers Grid Section */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-20 px-6 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Strategic Partnership Tiers
            </h2>
            <p className="text-sm sm:text-base text-[#555555]">
              Tailored sponsorship packages delivering measurable brand recall, demographic reach, and exclusive on-ground auditorium presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tier 1 */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#e60064] space-y-6 flex flex-col justify-between shadow-lg relative">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-pink-100 text-[#e60064] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Supreme Tier
                </span>
                <h3 className="font-display font-black text-2xl text-[#111111]">Title Partner</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  "Brand Presents Shiv-Shakti" marquee billing across all 100 shows, ticketing apps, national media, red-carpet step-and-repeat, and stage announcements.
                </p>
                <ul className="text-xs space-y-2 text-[#444444] font-medium pt-2">
                  <li className="flex items-center gap-2">✓ Marquee Title Co-Branding</li>
                  <li className="flex items-center gap-2">✓ Exclusive Foyer Lounge</li>
                  <li className="flex items-center gap-2">✓ 100 VIP Donor Passes</li>
                  <li className="flex items-center gap-2">✓ Dedicated Stage Mention</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, tier: 'Title Partner' }));
                  const el = document.getElementById('partnership-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#e60064] hover:bg-[#c70054] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                Inquire Title Tier
              </button>
            </div>

            {/* Tier 2 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-900 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Category Leader
                </span>
                <h3 className="font-display font-black text-2xl text-[#111111]">Powered By</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  High-frequency co-branding on promotional assets, BookMyShow/District banners, auditorium foyer activations, and digital trailers.
                </p>
                <ul className="text-xs space-y-2 text-[#444444] font-medium pt-2">
                  <li className="flex items-center gap-2">✓ Secondary Marquee Billing</li>
                  <li className="flex items-center gap-2">✓ Category Exclusivity</li>
                  <li className="flex items-center gap-2">✓ Foyer Display Kiosk</li>
                  <li className="flex items-center gap-2">✓ 50 Premium Passes</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, tier: 'Powered By Partner' }));
                  const el = document.getElementById('partnership-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Inquire Powered By
              </button>
            </div>

            {/* Tier 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-900 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-[#ea580c] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Brand Associate
                </span>
                <h3 className="font-display font-black text-2xl text-[#111111]">Associate Partner</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Targeted brand positioning with brochure inserts, program book full-page ad, promotional banners, and ticket allocations.
                </p>
                <ul className="text-xs space-y-2 text-[#444444] font-medium pt-2">
                  <li className="flex items-center gap-2">✓ Program Book Full-Page</li>
                  <li className="flex items-center gap-2">✓ Foyer Sampling Rights</li>
                  <li className="flex items-center gap-2">✓ Logo on Official Collateral</li>
                  <li className="flex items-center gap-2">✓ 25 Premiere Tickets</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, tier: 'Associate Partner' }));
                  const el = document.getElementById('partnership-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Inquire Associate
              </button>
            </div>

            {/* Tier 4 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-900 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                  Corporate
                </span>
                <h3 className="font-display font-black text-2xl text-[#111111]">Hospitality & Gala</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Bespoke corporate client entertainment package with private auditoriums/blocks, backstage cast meet-and-greets, and gala receptions.
                </p>
                <ul className="text-xs space-y-2 text-[#444444] font-medium pt-2">
                  <li className="flex items-center gap-2">✓ Reserved Executive Seating</li>
                  <li className="flex items-center gap-2">✓ Cast Meet & Greet Access</li>
                  <li className="flex items-center gap-2">✓ Post-Show Wine/Cocktail Gala</li>
                  <li className="flex items-center gap-2">✓ Custom Branding Options</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, tier: 'Hospitality & Gala' }));
                  const el = document.getElementById('partnership-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Inquire Hospitality
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Sponsorship Inquiry Form */}
      <section id="partnership-form" className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 md:p-16 shadow-xl space-y-8">
          
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-[#e60064] text-xs font-mono font-bold">
              <span>Direct Partnership Desk</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
              Submit Sponsorship Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Our partnerships director will connect with you within 24 hours with custom packages, auditorium specs, and deliverables.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  placeholder="e.g. Tata Motors / Nykaa / Spotify"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                  placeholder="e.g. Rahul Sharma (Brand Head)"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                Interested Sponsorship Tier
              </label>
              <select
                value={formData.tier}
                onChange={(e) => setFormData(prev => ({ ...prev, tier: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all font-display font-medium"
              >
                <option value="Title Partner">Title Partner (Supreme Headline Billing)</option>
                <option value="Powered By Partner">Powered By Partner (Category Exclusivity)</option>
                <option value="Associate Partner">Associate Partner (Foyer & Program Book)</option>
                <option value="Hospitality & Gala">Hospitality & Corporate Client Box</option>
                <option value="Custom Partnership">Custom Strategic Partnership</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#444444] font-bold">
                Message / Strategic Goals
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us about your brand's target demographic, city focus, or activation ideas..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#e60064] focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#e60064] hover:bg-[#c70054] text-white font-display text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Submit Partnership Proposal</span>
              <Send className="w-4 h-4" />
            </button>

            {formSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-mono flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Proposal received! Our sponsorships director will connect with your brand team within 24 hours.</span>
              </div>
            )}
          </form>

          {/* Direct Contact Row */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#e60064]" />
              <span>{THEATRE_INFO.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{THEATRE_INFO.contact.phoneDisplay}</span>
            </div>
            <span>Mumbai, India</span>
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="space-y-0.5">
              <span className="text-xs font-mono text-[#e60064] uppercase font-bold">
                Slide {lightboxIndex + 1} of {SPONSORSHIP_SLIDES.length} • {SPONSORSHIP_SLIDES[lightboxIndex].category}
              </span>
              <h4 className="font-display font-bold text-sm sm:text-base text-white">
                {SPONSORSHIP_SLIDES[lightboxIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`/assets/sponsership/${SPONSORSHIP_SLIDES[lightboxIndex].file}`}
                download={SPONSORSHIP_SLIDES[lightboxIndex].file}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5 transition-colors border border-white/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download Slide</span>
              </a>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + SPONSORSHIP_SLIDES.length) % SPONSORSHIP_SLIDES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Slide High-Res Image */}
          <div className="max-w-6xl max-h-[80vh] w-full flex items-center justify-center">
            <img
              src={`/assets/sponsership/${SPONSORSHIP_SLIDES[lightboxIndex].file}`}
              alt={SPONSORSHIP_SLIDES[lightboxIndex].title}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % SPONSORSHIP_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Caption */}
          <div className="absolute bottom-4 left-6 right-6 text-center text-xs font-mono text-white/60 pointer-events-none">
            Use arrow keys or buttons to navigate • Press ESC to close
          </div>

        </div>
      )}

    </div>
  );
}
