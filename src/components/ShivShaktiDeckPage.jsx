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
  FileText,
  Flame,
  Music,
  MapPin,
  Clock,
  Theater,
  Quote,
  Shield,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATRE_INFO } from '../data/theatreData';
import { SPONSORSHIP_SLIDES } from './SponsorshipPage';

export default function ShivShaktiDeckPage({ onNavigateHome, setCursorText }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Venue / Festival Booking',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Lightbox keyboard navigation
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
    if (!formData.name || !formData.email) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 85,
        origin: { y: 0.8 },
        colors: ['#e60064', '#111111', '#fbbf24', '#2563eb']
      });
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white pt-24 pb-24 selection:bg-[#e60064] selection:text-white">
      
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-4 pb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-[#e60064] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Stage</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e60064]/20 border border-[#e60064]/40 text-[#ff3388] text-[11px] font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e60064] animate-ping" />
            Official Show Dossier • Season One
          </span>
          <a
            href="/assets/sponsership/shiv-shakti-pitch-deck.pdf"
            download="Shiv-Shakti-Show-Pitch-Deck.pdf"
            className="px-3.5 py-1.5 rounded-lg bg-[#e60064] hover:bg-[#ff007a] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-[#e60064]/25 group"
          >
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Deck PDF</span>
          </a>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#e60064]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90">
                Areeso Theatre Flagship Presentation
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white">
                SHIV<span className="text-[#e60064]">-</span>SHAKTI
              </h1>
              <p className="font-display text-2xl sm:text-3xl text-gray-300 font-semibold tracking-wide">
                A Divine Love Story
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              An electrifying exploration of cosmic balance, primordial grief, and transcendent devotion. Staged on a monumental canvas with an ensemble of 12 physical theatre actors, original live folk and temple percussion, and visionary dramaturgy.
            </p>

            {/* Quick Spec Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#e60064]" />
                115 Mins (With Intermission)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#fbbf24]" />
                100% Live Percussion
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#38bdf8]" />
                12 Cast + 4 Musicians
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                100 Shows Pan-India Tour
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('deck-reader');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#e60064]/30"
              >
                <span>Explore 15-Slide Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('booking-inquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <span>Book For Your Venue / City</span>
              </button>
            </div>
          </div>

          {/* Right Image / Banner Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl group">
              <img
                src="/assets/shiv-shakti-banner.jpg"
                alt="Shiv-Shakti Production Banner"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="px-2.5 py-1 rounded-md bg-[#e60064] text-white text-[10px] font-mono font-bold uppercase">
                  Production Key Art
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  When Shiv Met Shakti
                </h3>
                <p className="text-xs font-mono text-gray-300">
                  Directed by Nandini • Produced by Areeso Theatre
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Navigation Quick Jump Tabs */}
      <div className="sticky top-20 z-40 bg-[#0c0c10]/95 backdrop-blur-md border-y border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center gap-3 overflow-x-auto scrollbar-none text-xs font-mono uppercase tracking-wider">
          <button
            onClick={() => {
              setActiveTab('overview');
              document.getElementById('synopsis-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-lg transition-all shrink-0 ${activeTab === 'overview' ? 'bg-[#e60064] text-white font-bold' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            01. Synopsis & Vision
          </button>
          <button
            onClick={() => {
              setActiveTab('about');
              document.getElementById('company-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-lg transition-all shrink-0 ${activeTab === 'about' ? 'bg-[#e60064] text-white font-bold' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            02. Areeso & Direction
          </button>
          <button
            onClick={() => {
              setActiveTab('cast');
              document.getElementById('cast-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-lg transition-all shrink-0 ${activeTab === 'cast' ? 'bg-[#e60064] text-white font-bold' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            03. Cast Spotlight (Rumit Sharma)
          </button>
          <button
            onClick={() => {
              setActiveTab('deck');
              document.getElementById('deck-reader')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-lg transition-all shrink-0 ${activeTab === 'deck' ? 'bg-[#e60064] text-white font-bold' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            04. 15-Slide Presentation Deck
          </button>
          <button
            onClick={() => {
              setActiveTab('specs');
              document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-lg transition-all shrink-0 ${activeTab === 'specs' ? 'bg-[#e60064] text-white font-bold' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            05. Technical Rider
          </button>
        </div>
      </div>

      {/* SECTION 01: Synopsis & The Play's Vision */}
      <section id="synopsis-section" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[#e60064] font-mono text-xs font-bold uppercase tracking-widest">
              01 • Artistic Vision & Story
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              A Timeless Epic on a Monumental Canvas
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Grounding Sanatan Pauranik Itihasa into modern physical dramaturgy, creating an unforgettable emotional bridge between antiquity and the contemporary human spirit.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-xl text-white">
                The Narrative Arc
              </h3>
              <p>
                <strong className="text-white">Shiv-Shakti: A Divine Love Story</strong> is an intense theatrical exploration of the universe’s most profound polarity — the ascetic stillness of Shiva (the unmanifest pure consciousness) and the radiant, dynamic kinetic force of Shakti (the cosmic energy that animates creation).
              </p>
              <p>
                When Sati, the incarnation of Shakti, chooses the dreadlocked ascetic of Mount Kailash over all worldly kings, she challenges the rigid orthodox patriarchy of her father, <strong className="text-[#fbbf24]">Prajapati Daksh</strong>. Daksh’s vanity leads to the fateful yajna where Sati sacrifices herself in the sacrificial flames. Her death unleashes the fearsome fury of Veerabhadra, tearing through the assembly and breaking Daksh’s pride.
              </p>
              <p>
                As Shiva retreats into unfathomable yogic solitude with Sati's remains, the cosmos descends into cosmic disarray, allowing the demon <strong className="text-[#fbbf24]">Tarakasur</strong> to seize dominion over the three worlds. Only the rebirth of Shakti as Parvati — and her relentless penance — can reawaken the Mahadeva from his cosmic slumber, paving the way for divine restoration and the eternal dance of creation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Flame className="w-5 h-5 text-[#e60064]" />
                <h4 className="font-display font-bold text-sm text-white">Mythic Realism</h4>
                <p className="text-xs text-gray-400">Transcending costume drama into raw, visceral human psychology and physical intensity.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Music className="w-5 h-5 text-[#fbbf24]" />
                <h4 className="font-display font-bold text-sm text-white">Live Temple Soundscape</h4>
                <p className="text-xs text-gray-400">Original live percussion score using Dhol, Nagada, Damru, Mridangam, and Vedic chanting.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Shield className="w-5 h-5 text-[#38bdf8]" />
                <h4 className="font-display font-bold text-sm text-white">Broadway-Scale Staging</h4>
                <p className="text-xs text-gray-400">Dynamic multi-level trussing, atmospheric shadowplay, and cinematic lighting choreography.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 02: About Areeso Theatre & Director Nandini */}
      <section id="company-section" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* About Areeso Theatre */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[#e60064] font-mono text-xs font-bold uppercase tracking-widest">
                02 • The Producing Company
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                About Areeso Theatre
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Areeso Theatre</strong> is an independent Mumbai-based performing arts collective established with a fierce mandate: to create original Indian theatre and bold revivals that honor our cultural roots while daring to innovate with contemporary world-class stagecraft.
              </p>
              <p>
                Beginning with an ensemble of passionate actors, writers, and master percussionists, Areeso produces high-impact stage productions designed to tour India’s premier auditoriums and international performing arts festivals.
              </p>
              <div className="p-5 rounded-xl bg-[#e60064]/10 border border-[#e60064]/20 space-y-2">
                <p className="text-xs font-mono text-[#ff3388] font-bold uppercase tracking-wider">Company Ethos</p>
                <p className="text-sm italic text-gray-200">
                  "Stories rooted in our soil, staged for the world. Where every seat holds its breath."
                </p>
              </div>
            </div>
          </div>

          {/* Director Nandini */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-widest">
                Directorial Leadership
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                Nandini <span className="text-gray-400 text-2xl sm:text-3xl font-normal">(Director)</span>
              </h2>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#e60064] text-white flex items-center justify-center font-display font-bold text-lg">
                  N
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Nandini</h4>
                  <p className="text-xs font-mono text-gray-400">Director & Scenographer • Shiv-Shakti</p>
                </div>
              </div>

              <p>
                With a signature directorial style that synthesizes ancient Natya Shastra physical discipline with modern psychological realism, Nandini leads the artistic vision of <em className="text-white">Shiv-Shakti</em>.
              </p>
              <p>
                Her direction focuses on uninhibited physical embodiment, stripping away decorative clichés to expose the raw philosophical core of duality: creation and dissolution, divine detachment, and cosmic love.
              </p>

              <blockquote className="border-l-2 border-[#e60064] pl-4 text-xs sm:text-sm italic text-gray-300 pt-1">
                "Shiv-Shakti is not a distant myth to be observed behind glass. It is the living rhythm inside our veins — the quiet yogic silence inside our minds, and the fierce creative fire that keeps us alive."
                <footer className="text-[10px] font-mono uppercase tracking-widest text-[#e60064] not-italic pt-1 font-bold">
                  — Nandini, Director's Note
                </footer>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: Featured Cast Spotlight — Rumit Sharma */}
      <section id="cast-section" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        <div className="space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[#e60064] font-mono text-xs font-bold uppercase tracking-widest">
              03 • Ensemble & Cast Spotlight
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Featured Actor Spotlight
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Introducing the powerhouse performing ensemble bringing the timeless characters of Shiv-Shakti to life on stage.
            </p>
          </div>

          {/* Rumit Sharma Hero Feature Card */}
          <div className="rounded-3xl bg-[#111116] border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Rumit Sharma Picture Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-black aspect-[3/4] shadow-2xl group">
                  <img
                    src="/assets/rumit.jpeg"
                    alt="Rumit Sharma - Actor in Shiv-Shakti"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#e60064] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      Featured Lead Cast
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="font-display font-black text-2xl text-white">
                      Rumit Sharma
                    </h3>
                    <p className="text-xs font-mono text-[#fbbf24] font-semibold">
                      Playing: Prajapati Daksh & Tarakasur
                    </p>
                  </div>
                </div>
              </div>

              {/* Rumit Sharma Bio & Credits */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono">15 Years Stage Experience</span>
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono">Acting Studio Mumbai Graduate</span>
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono">Chekhov & Adler Techniques</span>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                    Rumit Sharma
                  </h3>
                  <p className="font-mono text-xs text-[#e60064] uppercase tracking-widest font-bold">
                    Dual Roles: Prajapati Daksh & Tarakasur
                  </p>
                </div>

                {/* Bio text directly provided by client */}
                <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Rumit Sharma</strong> is a trained actor and dancer with fifteen years of stage experience. A graduate of <em>Acting Studio Mumbai</em>, he is trained in the classical <strong>Michael Chekhov</strong> and <strong>Stella Adler</strong> acting techniques.
                  </p>
                  <p>
                    His theatre credits span a rich and diverse repertoire across Indian and global dramaturgy — from August Strindberg's <em>Facing Death</em> and Sophocles' immortal tragedy <em>King Oedipus</em> to Vijay Tendulkar's satirical masterpiece <em>Thief Police</em>, Mohan Rakesh's <em>Bahut Bahut Bada Sawaal</em>, Dario Fo's <em>The Virtuous Burglar</em> and <em>Open Couple</em>, and <em>Dedh Inch Oopar</em>. Most recently, he has been part of the acclaimed Gujarati commercial stage production <em>Dussehra</em>.
                  </p>
                </div>

                {/* Character Breakdown in Shiv-Shakti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#fbbf24] font-bold uppercase">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Role 01: Prajapati Daksh</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      The authoritarian sovereign whose orthodox pride and tragic hubris spark Sati's cosmic self-sacrifice and Veerabhadra's retribution.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#e60064] font-bold uppercase">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Role 02: Tarakasur</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      The invincible cosmic conqueror whose boon terrorizes the Devas and demands the union of Shiva and Shakti for his defeat.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Supporting Ensemble Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-display font-bold">
                SH
              </div>
              <h4 className="font-display font-bold text-lg text-white">Lord Shiva (The Mahadeva)</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Staged through dynamic Tandava physical choreography, yogic stillness, and deep vocal chants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-display font-bold">
                SK
              </div>
              <h4 className="font-display font-bold text-lg text-white">Shakti / Sati / Parvati</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                The manifestation of cosmic energy, fierce grace, devotion, and supreme resilience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-display font-bold">
                GN
              </div>
              <h4 className="font-display font-bold text-lg text-white">The Shiv Ganas & Percussion Chorus</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                A choral ensemble of physical actors and live master percussionists powering every scene.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 04: Interactive 15-Slide Presentation Deck Reader */}
      <section id="deck-reader" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[#e60064] font-mono text-xs font-bold uppercase tracking-widest">
              04 • Official Presentation Deck
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Interactive 15-Slide Deck Reader
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Browse through the official production presentation below or click the stage for high-resolution fullscreen viewing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setLightboxIndex(activeSlideIndex)}
              className="px-4 py-2.5 rounded-xl border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Maximize2 className="w-4 h-4 text-[#e60064]" />
              <span>Fullscreen HD</span>
            </button>
            <a
              href="/assets/sponsership/shiv-shakti-pitch-deck.pdf"
              download="Shiv-Shakti-Pitch-Deck.pdf"
              className="px-4 py-2.5 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#e60064]/30 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Document Reader Console */}
        <div className="mt-8 rounded-3xl bg-[#0e0e12] border border-white/10 text-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Table of Contents */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-[#131318]">
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/30">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#e60064]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Table of Contents
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px] font-mono">
                {SPONSORSHIP_SLIDES.length} Slides
              </span>
            </div>

            <div className="p-3 space-y-1.5 max-h-[340px] sm:max-h-[420px] lg:max-h-[580px] overflow-y-auto scrollbar-thin">
              {SPONSORSHIP_SLIDES.map((slide, idx) => {
                const isActive = activeSlideIndex === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group relative ${
                      isActive
                        ? 'bg-[#e60064] text-white shadow-lg'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5'
                    }`}
                  >
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                      isActive 
                        ? 'bg-black text-[#fbbf24]' 
                        : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-mono uppercase tracking-wider truncate ${
                          isActive ? 'text-white/90' : 'text-[#e60064] group-hover:text-pink-400'
                        }`}>
                          {slide.category}
                        </span>
                      </div>
                      <p className={`text-xs font-display font-semibold truncate mt-0.5 ${
                        isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {slide.title}
                      </p>
                    </div>

                    {isActive && (
                      <span className="text-xs font-bold shrink-0 text-white animate-pulse">
                        ▶
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Slide Stage */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-black">
            
            {/* Stage Top Bar */}
            <div className="p-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2.5 py-1 rounded-md bg-[#e60064] text-white text-xs font-mono font-bold">
                  Slide {activeSlideIndex + 1} of {SPONSORSHIP_SLIDES.length}
                </span>
                <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                  • {SPONSORSHIP_SLIDES[activeSlideIndex].category}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev - 1 + SPONSORSHIP_SLIDES.length) % SPONSORSHIP_SLIDES.length)}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 transition-all"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev + 1) % SPONSORSHIP_SLIDES.length)}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 transition-all"
                  title="Next Slide"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLightboxIndex(activeSlideIndex)}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#e60064] hover:bg-[#ff007a] text-white transition-all ml-1"
                  title="Open Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Main Stage Image */}
            <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-black/90">
              <div 
                onClick={() => setLightboxIndex(activeSlideIndex)}
                className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0a0a0e] border border-white/15 cursor-pointer group shadow-2xl transition-all"
              >
                <img
                  src={`/assets/sponsership/${SPONSORSHIP_SLIDES[activeSlideIndex].file}`}
                  alt={SPONSORSHIP_SLIDES[activeSlideIndex].title}
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold flex items-center gap-2 transform group-hover:scale-105 transition-transform shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#e60064]" />
                    <span>Click for Fullscreen HD Lightbox</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Metadata & Scrubber */}
            <div className="p-5 sm:p-6 border-t border-white/10 bg-[#111116] space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#e60064] font-bold uppercase tracking-wider">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].category}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-2xl">
                  {SPONSORSHIP_SLIDES[activeSlideIndex].desc}
                </p>
              </div>

              {/* Bottom Filmstrip */}
              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {SPONSORSHIP_SLIDES.map((slide, idx) => {
                    const isActive = activeSlideIndex === idx;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`relative shrink-0 w-16 sm:w-20 aspect-[16/9] rounded-md overflow-hidden border-2 transition-all ${
                          isActive 
                            ? 'border-[#e60064] scale-105 shadow-lg' 
                            : 'border-white/20 opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={`/assets/sponsership/${slide.file}`}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono font-bold bg-black/80 px-1 rounded text-white">
                          {idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION 05: Technical Rider & Staging Specifications */}
      <section id="tech-specs" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        <div className="space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[#38bdf8] font-mono text-xs font-bold uppercase tracking-widest">
              05 • Presenter & Venue Technical Rider
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Production & Technical Specifications
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Engineered for seamless adaptation across premier proscenium auditoriums, festival amphitheatres, and state cultural centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-[#e60064] uppercase tracking-wider">Stage & Dimensions</span>
              <h4 className="font-display font-bold text-xl text-white">Proscenium / Thrust</h4>
              <ul className="text-xs text-gray-300 space-y-2 pt-1 font-mono">
                <li>• Min Width: 32 ft (9.8m)</li>
                <li>• Min Depth: 28 ft (8.5m)</li>
                <li>• Grid Height: 18 ft+</li>
                <li>• Black Acoustic Masking</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-[#fbbf24] uppercase tracking-wider">Audio & Acoustics</span>
              <h4 className="font-display font-bold text-xl text-white">Live Percussion Rig</h4>
              <ul className="text-xs text-gray-300 space-y-2 pt-1 font-mono">
                <li>• 8x Wireless Headset Mics</li>
                <li>• 6x Drum & Percussion Mics</li>
                <li>• Left/Right/Center FOH PA</li>
                <li>• 4x Stage Foldback Monitors</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">Lighting & FX</span>
              <h4 className="font-display font-bold text-xl text-white">Atmospheric Scenography</h4>
              <ul className="text-xs text-gray-300 space-y-2 pt-1 font-mono">
                <li>• Warm Tungsten Profile Spots</li>
                <li>• RGBW Moving Heads & Washes</li>
                <li>• Water-based Hazer & DMX Fog</li>
                <li>• Silhouette Gobo Projection</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Touring Party</span>
              <h4 className="font-display font-bold text-xl text-white">22 Company Members</h4>
              <ul className="text-xs text-gray-300 space-y-2 pt-1 font-mono">
                <li>• 12 Principal Actors</li>
                <li>• 4 Live Master Musicians</li>
                <li>• 1 Director & 1 Stage Mgr</li>
                <li>• 4 Technical Crew (Lights/Sound)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 06: Presenter & Tour Booking Desk */}
      <section id="booking-inquiry" className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="rounded-3xl border border-white/15 bg-[#111116] p-8 sm:p-12 md:p-14 shadow-2xl space-y-8">
          
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e60064]/20 border border-[#e60064]/40 text-[#ff3388] text-xs font-mono font-bold">
              <span>Presenter & Tour Booking Desk</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              Book Shiv-Shakti For Your Stage
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Auditorium curators, cultural festival programmers, and corporate sponsors — reach out directly to finalize dates, tour riders, and partnership packages.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Vikram Mehta"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                  Organization / Venue / Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                  placeholder="e.g. NCPA / Prithvi Theatre / Brand Partner"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                Inquiry Type
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData(prev => ({ ...prev, inquiryType: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[#1c1c24] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] transition-all"
              >
                <option value="Venue / Festival Booking">Venue / Festival Staging Booking</option>
                <option value="Corporate / Title Sponsorship">Corporate / Title Sponsorship</option>
                <option value="Private Staging & Bulk Booking">Private Staging & Bulk Booking</option>
                <option value="Press & Media Inquiries">Press & Media Inquiries</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                Proposed Dates, City & Stage Details
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Share your intended city (e.g. Mumbai, Delhi, Bengaluru), preferred months, auditorium capacity, and any specific technical requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all resize-none"
              />
            </div>

            {formSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 flex items-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <strong className="block text-white text-sm font-bold">Inquiry Received Successfully!</strong>
                  Our Executive Producer and Tour Manager will contact you within 24 hours with full technical riders and contract specs.
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#e60064]/30 flex items-center justify-center gap-2 group"
              >
                <span>Submit Staging Inquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </form>

        </div>
      </section>

      {/* Fullscreen HD Lightbox Modal for Presentation Slides */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[#e60064] text-white text-xs font-mono font-bold">
                Slide {lightboxIndex + 1} of {SPONSORSHIP_SLIDES.length}
              </span>
              <span className="text-xs font-mono text-white/80 hidden sm:inline">
                {SPONSORSHIP_SLIDES[lightboxIndex].title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/assets/sponsership/shiv-shakti-pitch-deck.pdf"
                download
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            className="relative flex-1 flex items-center justify-center py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/assets/sponsership/${SPONSORSHIP_SLIDES[lightboxIndex].file}`}
              alt={SPONSORSHIP_SLIDES[lightboxIndex].title}
              className="max-h-[82vh] max-w-[94vw] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + SPONSORSHIP_SLIDES.length) % SPONSORSHIP_SLIDES.length)}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % SPONSORSHIP_SLIDES.length)}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-xs font-mono text-gray-400 z-10">
            Use Left / Right arrow keys to navigate • Press ESC to close
          </div>
        </div>
      )}

    </div>
  );
}
