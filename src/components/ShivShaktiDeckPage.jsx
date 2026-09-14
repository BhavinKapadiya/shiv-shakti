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
  Star,
  Search,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATRE_INFO } from '../data/theatreData';
import { SPONSORSHIP_SLIDES } from './SponsorshipPage';

export const SHIV_SHAKTI_CAST = [
  {
    id: "sandip-soparrkar",
    name: "Dr. Sandip Soparrkar",
    character: "Lord Shiva (The Mahadeva)",
    category: "leads",
    categoryLabel: "Lead Actor • Lord Shiva",
    accentColor: "#38bdf8",
    image: "/assets/Dr. Sandip Soparrkar.jpeg",
    experience: "Internationally Acclaimed Dancer & Choreographer",
    almaMater: "Pioneer of Ballroom Culture in India",
    speciality: "Tandava Choreography, Classical & Latin Staging",
    tags: ["Lead Actor - Shiv", "Bollywood Choreographer", "Latin & Ballroom Pioneer", "Trained Global Icons"],
    bio: "Dr. Sandip Soparrkar is an internationally acclaimed Latin and ballroom dancer, Bollywood choreographer, and the pioneer of formal ballroom culture in India. Renowned for training global icons like Madonna and Britney Spears, his iconic work includes choreographing the acclaimed film Zubeidaa.\n\nHe currently plays the lead role of Lord Shiva in the grand, Broadway-style mythological dance drama, Shiv-Shakti, commanding the stage with extraordinary physical poise, dynamic Tandava movements, and divine authority.",
    characterHighlight: "Leading the production as Lord Shiva, channeling the cosmic stillness of the yogi and the thunderous, transformative fury of the Tandava dance."
  },
  {
    id: "vaidika-senjaliya",
    name: "Vaidika Senjaliya",
    character: "Shakti / Sati / Parvati",
    category: "leads",
    categoryLabel: "Lead Actress • Shakti / Sati / Parvati",
    accentColor: "#e60064",
    image: "/assets/Vaidika Senjaliya.jpeg",
    experience: "Acclaimed Lead Actress Across Stage & Screen",
    almaMater: "Classical Dramatic Arts & Performance",
    speciality: "Emotional Range, Classical Expressiveness & Physical Devotion",
    tags: ["Lead Actress - Shakti", "Sati & Parvati", "Stage & Screen", "Emotional & Classical Depth"],
    bio: "Vaidika Senjaliya is an accomplished, versatile leading actress and performing artist acclaimed for her commanding screen presence, deep emotional range, and classical stagecraft.\n\nIn Shiv-Shakti, she takes center stage as Shakti, embodying the divine manifestations of both Sati and Parvati with breathtaking grace, fiery spiritual intensity, and transcendent devotion that redefines cosmic destiny.",
    characterHighlight: "Embodying the dual incarnations of Shakti — from Sati's fearless defiance of orthodox vanity to Parvati's profound penance that reawakens the Mahadeva."
  },
  {
    id: "gyanesh-upadhyay",
    name: "Gyanesh Upadhyay",
    character: "Lord Vishnu",
    category: "leads",
    categoryLabel: "Lord Vishnu • Cosmic Preserver",
    accentColor: "#3b82f6",
    image: "/assets/Gyanesh Upadhyay.jpeg",
    experience: "11 Years Theatre Experience",
    almaMater: "Anupam Kher's Actor Prepares (Scholarship Graduate)",
    speciality: "Classical Staging, Feature Films & Screen Acting",
    tags: ["11 Yrs Theatre Exp", "Actor Prepares Scholar", "30+ Stage Productions", "5 Feature Films"],
    bio: "Gyanesh Upadhyay is a Delhi and Mumbai based theatre artist/actor who has been actively doing theatre for last 11 Years under the guidance of eminent theatre directors and actors like Puneet Issar ji, Nitish Bhardwaj ji, Atul Satya Kaushik ji, Sandeep Rawat, Yogesh Soman, Bhalekar sir, Kamal Kishore and is associated with 'FTS', 'D For Drama', 'Samarth Theatre Group' and Mumbai University. He has also done five feature films, more than 10 short films, more than 15 TVC/digital ads and several serials.\n\nHe was also awarded a scholarship to attend an acting diploma at Anupam Kher's Actor Prepares (Mumbai) and has performed in more than 30 stage productions. Born in Bihar and brought up in Delhi, he brings immense gravitas and classical mastery to the stage.",
    characterHighlight: "Portraying the cosmic preserver Lord Vishnu, anchoring the divine Trinity with serene majesty, moral wisdom, and cosmic equilibrium."
  },
  {
    id: "swapnil-kale",
    name: "Swapnil Kale",
    character: "Lord Brahma",
    category: "leads",
    categoryLabel: "Lord Brahma • Cosmic Creator",
    accentColor: "#fbbf24",
    image: "/assets/Sswapnil Kale.jpeg",
    experience: "Physical & Classical Theatre",
    almaMater: "Mumbai Dramatic Circle",
    speciality: "Classical Staging & Vocal Gravitas",
    tags: ["Lord Brahma", "Cosmic Archetype", "Classical Delivery"],
    bio: "Swapnil Kale portrays Lord Brahma, the cosmic creator archetype, bringing commanding stature, classical voice resonance, and architectural stage presence to the celestial councils that govern cosmic order.",
    characterHighlight: "Anchors the divine assembly scenes with majestic presence, balancing cosmological creation against the unfolding conflict of Daksh's court."
  },
  {
    id: "rumit-sharma",
    name: "Rumit Sharma",
    character: "Prajapati Daksh & Tarakasur",
    category: "leads",
    categoryLabel: "Principal Cast • Dual Roles",
    accentColor: "#f97316",
    image: "/assets/rumit.jpeg",
    experience: "15 Years Stage Experience",
    almaMater: "Acting Studio Mumbai",
    speciality: "Chekhov & Adler Techniques",
    tags: ["15 Yrs Stage Exp", "Acting Studio Mumbai", "Chekhov & Adler Techniques"],
    bio: "Rumit Sharma is a trained actor and dancer with fifteen years of stage experience. A graduate of Acting Studio Mumbai, he is trained in the classical Michael Chekhov and Stella Adler acting techniques.\n\nHis theatre credits span a diverse range — from Strindberg's Facing Death and Sophocles' King Oedipus to Vijay Tendulkar's Thief Police, Mohan Rakesh's Bahut Bahut Bada Sawaal, Dario Fo's The Virtuous Burglar and Open Couple, and Dedh Inch Oopar. Most recently he has been part of the Gujarati commercial production Dussehra.",
    characterHighlight: "Dual Roles: Prajapati Daksh (The authoritarian patriarch whose tragic hubris sparks Sati's cosmic sacrifice) & Tarakasur (The invincible cosmic conqueror whose boon terrorizes the Devas)."
  },
  {
    id: "kalyan-choudhury",
    name: "Kalyan Choudhury",
    character: "Narad",
    category: "sages",
    categoryLabel: "INLAKS Awardee • Senior Actor",
    accentColor: "#fbbf24",
    image: "/assets/Kalyan chaudhri.jpeg",
    experience: "22+ Years Stage & Screen",
    almaMater: "Prague Shakespeare Company",
    speciality: "Kudiyattam & Commedia dell’Arte",
    tags: ["22+ Yrs Experience", "INLAKS Theatre Award (2007)", "Prague Shakespeare Co."],
    bio: "With over 22 years of experience in theatre, film, and voice work, Kalyan Choudhury is an accomplished actor and INLAKS Theatre Award recipient (2007). He has performed in over 50 productions across major Indian festivals and internationally in the UK and Prague.\n\nTrained in Kudiyattam under G. Venu and European Clowning and Commedia dell’Arte at the Prague Shakespeare Company, Czech Republic, his diverse body of work spans classical, physical, and contemporary forms.",
    characterHighlight: "Brings master physical clowning nuance, Kudiyattam precision, and cosmic insight to Devrishi Narad as the divine catalyst bridging Kailash and the mortal realm."
  },
  {
    id: "shivangi-tripathi",
    name: "Shivangi Tripathi",
    character: "Rati",
    category: "celestials",
    categoryLabel: "NSD Graduate • Yakshagana",
    accentColor: "#ec4899",
    image: "/assets/Shivangi Tripathi.jpeg",
    experience: "10+ Years Stage Experience",
    almaMater: "NSD Varanasi",
    speciality: "Yakshagana & Folk Singing",
    tags: ["NSD Varanasi Graduate", "10+ Yrs Theatre Exp", "30+ Productions", "Yakshagana"],
    bio: "Shivangi Tripathi is a dedicated actor and NSD Varanasi graduate with over ten years of theatre experience across 30+ productions. Trained in Yakshagana and traditional folk singing, she brings a grounded physical presence, emotional authenticity, and strong vocal command to stage and screen.",
    characterHighlight: "Infuses the character of Rati (Goddess of Love & Desire) with hypnotic traditional discipline, expressive vocal power, and profound emotional vulnerability."
  },
  {
    id: "priyanshi-choudhary",
    name: "Priyanshi Choudhary",
    character: "Varini",
    category: "celestials",
    categoryLabel: "NSD & Kamani Stages",
    accentColor: "#f472b6",
    image: "/assets/Priyanshi chaudhri.jpeg",
    experience: "Mumbai & Delhi Stages",
    almaMater: "National School of Drama (NSD) Stages",
    speciality: "Classical Dance, Acting & Vocal Power",
    tags: ["NSD & Kamani Stages", "LTG Auditorium", "Dancer & Actor", "Stage & Camera"],
    bio: "Priyanshi Choudhary is a versatile Mumbai-based theatre artist, actor, and dancer originally from Ghaziabad, Uttar Pradesh. She has performed extensively on prestigious stages including the National School of Drama (NSD), Kamani Auditorium, and LTG Auditorium. Trained in dance, acting, and singing, Priyanshi seamlessly navigates stage and camera, bringing emotional authenticity, vocal power, and dynamic stage presence to her work.",
    characterHighlight: "Depicts Queen Varini (Consort to Daksh and Mother of Sati) with regal dignity, maternal devotion, and nuanced dramatic depth."
  },
  {
    id: "kiran-holkar",
    name: "Kiran Holkar",
    character: "Jaya",
    category: "celestials",
    categoryLabel: "Celestial Attendant to Shakti",
    accentColor: "#ec4899",
    image: "/assets/Kiran holkar.jpeg",
    experience: "Physical Theatre & Classical Grace",
    almaMater: "Contemporary Performing Arts",
    speciality: "Lyrical Movement & Emotional Resonance",
    tags: ["Jaya", "Celestial Realm", "Lyrical Grace"],
    bio: "Kiran Holkar portrays Jaya, the loyal companion and celestial attendant to Goddess Sati/Shakti, bringing luminous stage presence, lyrical physical grace, and deep emotional resonance.",
    characterHighlight: "The steadfast emotional companion witnessing, supporting, and honoring Sati's eternal journey and ultimate sacrifice."
  },
  {
    id: "prakash-sawant",
    name: "Prakash Sawant",
    character: "Shringi",
    category: "sages",
    categoryLabel: "Sage & Devout Guardian",
    accentColor: "#34d399",
    image: "/assets/Prakash Savant.jpeg",
    experience: "Stage & Classical Dramaturgy",
    almaMater: "Indian Theatre Collective",
    speciality: "Spiritual Intensity & Dramatic Restraint",
    tags: ["Rishi Shringi", "Devoted Sage", "Dramatic Restraint"],
    bio: "Prakash Sawant brings profound spiritual gravitas and emotional conviction to the role of Rishi Shringi, the revered sage whose unyielding devotion to Mahadeva and moral fortitude anchor key dramatic conflicts.",
    characterHighlight: "Delivers poignant philosophical counsel and dramatic conviction in the royal sacrificial court of Prajapati Daksh."
  },
  {
    id: "arun-sahu",
    name: "Arun Sahu",
    character: "Rishi",
    category: "sages",
    categoryLabel: "Vedic Priest & Scholar",
    accentColor: "#f59e0b",
    image: "/assets/Arun sahu.jpeg",
    experience: "Classical Verse & Stage",
    almaMater: "Vedic Arts & Dramatics",
    speciality: "Vedic Chanting & Ceremonial Rites",
    tags: ["Vedic Rishi", "Sacred Chants", "Ceremonial Delivery"],
    bio: "Arun Sahu performs as the royal Rishi in the court of Prajapati Daksh, bringing classical diction, traditional Vedic chant cadence, and formal solemnity to the sacred sacrificial rituals.",
    characterHighlight: "Conducts the Vedic yajna ceremonies with ritual authenticity, vocal authority, and ceremonial precision."
  },
  {
    id: "pinkesh-prajapati",
    name: "Pinkesh Prajapati",
    character: "Ensemble & Movement Artist",
    category: "movement",
    categoryLabel: "Kalaripayattu & Garba Artist",
    accentColor: "#38bdf8",
    image: "/assets/Pinkesh Prajapati.jpeg",
    experience: "9 Years Stage Experience",
    almaMater: "Assistant to Director Manoj Shah",
    speciality: "Kalaripayattu & Authentic Garba",
    tags: ["9 Yrs Stage Exp", "Kalaripayattu Martial Art", "Authentic Garba", "Asst. to Manoj Shah"],
    bio: "Mumbai-based actor and theatre professional with nine years of stage experience, Pinkesh Prajapati has been part of productions like Socrates, iSchool, Tabiyat, Lagan Magan, and Mr. Apple, Main Kaun Hoon, while also serving as assistant to director 'Manoj Shah' across multiple productions. Trained in Kalaripayattu and authentic Garba folk dance, he brings a physical, grounded presence to his work across stage and screen.",
    characterHighlight: "Powers the high-energy physical choreography and martial discipline of the Shiv Ganas and celestial assembly sequences."
  },
  {
    id: "atharva-verma",
    name: "Atharva Verma",
    character: "Ensemble & Multi-Instrumentalist",
    category: "movement",
    categoryLabel: "Live Multi-Instrumentalist",
    accentColor: "#a855f7",
    image: "/assets/Atharva varma.jpeg",
    experience: "Stage, Television & Live Score",
    almaMater: "Classical Music & Dramatic Arts",
    speciality: "Harmonium, Keyboard, Tabla, Dholak & Guitar",
    tags: ["Classical Singing", "Multi-Instrumentalist", "Tabla • Dholak • Guitar", "Hindi • English • Marathi"],
    bio: "Atharva Verma is a professionally trained actor with a strong foundation in theatre, dance, classical singing, and multi-instrumental performance (Harmonium, Keyboard, Tabla, Dholak, Guitar). Fluent in Hindi, English, and Marathi, he brings versatility, discipline, and emotional depth to roles across stage, television, and screen.",
    characterHighlight: "Synthesizes live onstage temple instrumentation with dynamic character presence across pivotal ensemble scenes."
  },
  {
    id: "pranay-hajare",
    name: "Pranay Hajare",
    character: "Bhairav",
    category: "movement",
    categoryLabel: "Primal Fury & Tandava",
    accentColor: "#ef4444",
    image: "/assets/Pranay hajre.jpeg",
    experience: "Physical Movement & Combat",
    almaMater: "Movement & Martial Arts Guild",
    speciality: "Martial Staging & Physical Acrobatics",
    tags: ["Bhairav", "Martial Movement", "Tandava Fury"],
    bio: "Pranay Hajare channels the ferocious, primal power of Bhairav — the divine protector and manifestation of Lord Shiva's supreme righteous fury, uniting explosive physical combat with visceral theatrical power.",
    characterHighlight: "Leads the earth-shattering combat and dance sequences during the destruction of Daksh's sacrificial arena."
  }
];

export default function ShivShaktiDeckPage({ onNavigateHome, setCursorText }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [castFilter, setCastFilter] = useState('all');
  const [castSearch, setCastSearch] = useState('');

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
              <p className="text-xs sm:text-sm font-mono text-[#e60064] font-bold tracking-wider pt-1">
                Written & Directed by Nandini • Produced by Areeso Theatre
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              An electrifying exploration of cosmic balance, primordial grief, and transcendent devotion. Staged on a monumental canvas with an ensemble of 14 physical theatre actors, original live folk and temple percussion, and visionary dramaturgy.
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
                14 Cast + 4 Musicians
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

          {/* Right Image / Banner Showcase (Clean without text overlays) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl group">
              <img
                src="/assets/shiv-shakti-banner.jpg"
                alt="Shiv-Shakti Production Banner"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
            03. Ensemble & Cast ({SHIV_SHAKTI_CAST.length} Artists)
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

          {/* Director & Writer Nandini */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-widest">
                Directorial & Literary Leadership
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                Nandini <span className="text-gray-400 text-2xl sm:text-3xl font-normal">(Writer & Director)</span>
              </h2>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5 text-sm sm:text-base text-gray-300 leading-relaxed">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-white/10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#e60064]/50 bg-black shrink-0 shadow-xl">
                  <img
                    src="/assets/Nandani.jpeg"
                    alt="Nandini - Writer & Director of Shiv-Shakti"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/shiv-shakti-center-panel.png';
                    }}
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e60064]/20 border border-[#e60064]/40 text-[#ff3388] text-[10px] font-mono font-bold uppercase tracking-wider">
                    Playwright & Director
                  </span>
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl pt-0.5">Nandini</h4>
                  <p className="text-xs font-mono text-gray-400">Writer, Director & Scenographer • Shiv-Shakti</p>
                </div>
              </div>

              <p>
                With a signature directorial style that synthesizes ancient Natya Shastra physical discipline with modern psychological realism, Nandini has conceived, written, and directed <em className="text-white">Shiv-Shakti</em>.
              </p>
              <p>
                Her text and scenography focus on uninhibited physical embodiment, stripping away decorative clichés to expose the raw philosophical core of duality: creation and dissolution, divine detachment, and cosmic love.
              </p>

              <blockquote className="border-l-2 border-[#e60064] pl-4 text-xs sm:text-sm italic text-gray-300 pt-1">
                "Shiv-Shakti is not a distant myth to be observed behind glass. It is the living rhythm inside our veins — the quiet yogic silence inside our minds, and the fierce creative fire that keeps us alive."
                <footer className="text-[10px] font-mono uppercase tracking-widest text-[#e60064] not-italic pt-1 font-bold">
                  — Nandini, Writer & Director's Note
                </footer>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: The Ensemble & Cast Cards Grid */}
      <section id="cast-section" className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 border-b border-white/10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e60064]/15 border border-[#e60064]/30 text-[#ff3388] text-xs font-mono font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>03 • Principal Ensemble & Artists</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                The Cast of Shiv-Shakti
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Meet the {SHIV_SHAKTI_CAST.length} powerhouse physical theatre actors, classical scholars, and master performers bringing the cosmic narrative to life on stage.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>{SHIV_SHAKTI_CAST.length} Featured Cast Profiles</span>
              </span>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
              <button
                onClick={() => setCastFilter('all')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  castFilter === 'all'
                    ? 'bg-[#e60064] text-white font-bold shadow-md shadow-[#e60064]/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                All Artists ({SHIV_SHAKTI_CAST.length})
              </button>

              <button
                onClick={() => setCastFilter('leads')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  castFilter === 'leads'
                    ? 'bg-[#e60064] text-white font-bold shadow-md shadow-[#e60064]/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                Leads & Deities ({SHIV_SHAKTI_CAST.filter(c => c.category === 'leads').length})
              </button>

              <button
                onClick={() => setCastFilter('celestials')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  castFilter === 'celestials'
                    ? 'bg-[#e60064] text-white font-bold shadow-md shadow-[#e60064]/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                Celestials & Queens ({SHIV_SHAKTI_CAST.filter(c => c.category === 'celestials').length})
              </button>

              <button
                onClick={() => setCastFilter('sages')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  castFilter === 'sages'
                    ? 'bg-[#e60064] text-white font-bold shadow-md shadow-[#e60064]/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                Sages & Scholars ({SHIV_SHAKTI_CAST.filter(c => c.category === 'sages').length})
              </button>

              <button
                onClick={() => setCastFilter('movement')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  castFilter === 'movement'
                    ? 'bg-[#e60064] text-white font-bold shadow-md shadow-[#e60064]/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                Movement & Music ({SHIV_SHAKTI_CAST.filter(c => c.category === 'movement').length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={castSearch}
                onChange={(e) => setCastSearch(e.target.value)}
                placeholder="Search actor or character..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#e60064] focus:bg-white/10 transition-all"
              />
              {castSearch && (
                <button
                  onClick={() => setCastSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Cast Cards Grid */}
          {(() => {
            const filtered = SHIV_SHAKTI_CAST.filter(actor => {
              const matchesCategory = castFilter === 'all' || actor.category === castFilter;
              const matchesSearch = !castSearch || 
                actor.name.toLowerCase().includes(castSearch.toLowerCase()) ||
                actor.character.toLowerCase().includes(castSearch.toLowerCase()) ||
                actor.bio.toLowerCase().includes(castSearch.toLowerCase()) ||
                actor.tags.some(t => t.toLowerCase().includes(castSearch.toLowerCase()));
              return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
              return (
                <div className="p-12 text-center rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                  <Theater className="w-10 h-10 text-gray-500 mx-auto" />
                  <h3 className="font-display font-bold text-lg text-white">No cast members match your filter</h3>
                  <p className="text-xs font-mono text-gray-400">Try resetting your search query or choosing another category.</p>
                  <button
                    onClick={() => { setCastFilter('all'); setCastSearch(''); }}
                    className="px-4 py-2 rounded-xl bg-[#e60064] text-white text-xs font-mono font-bold"
                  >
                    Reset Filters
                  </button>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((actor) => (
                  <div
                    key={actor.id}
                    className="group rounded-3xl bg-[#111116] border border-white/10 hover:border-[#e60064]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[#e60064]/20 hover:-translate-y-1.5"
                  >
                    {/* Top Image Frame */}
                    <div className="relative aspect-[4/5] bg-black overflow-hidden">
                      <img
                        src={actor.image}
                        alt={`${actor.name} - ${actor.character}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/shiv-shakti-center-panel.png';
                        }}
                      />
                      
                      {/* Gradient Shade for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/30 to-transparent" />

                      {/* Top Left: Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                          <span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: actor.accentColor || '#e60064' }} 
                          />
                          {actor.categoryLabel}
                        </span>
                      </div>

                      {/* Bottom Character Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-[#fbbf24] text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                          <Theater className="w-3.5 h-3.5 text-[#e60064]" />
                          <span>Playing: {actor.character}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Block */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                      
                      <div className="space-y-3">
                        {/* Name & Title */}
                        <div>
                          <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-[#ff3388] transition-colors leading-tight">
                            {actor.name}
                          </h3>
                          <p className="text-xs font-mono font-bold text-[#e60064] uppercase tracking-wider pt-1">
                            {actor.character}
                          </p>
                        </div>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {actor.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bio Paragraphs */}
                        <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pt-2 space-y-2">
                          {actor.bio.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {/* Highlight Box */}
                      {actor.characterHighlight && (
                        <div className="pt-2 border-t border-white/10">
                          <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#fbbf24] flex items-center gap-1.5">
                              <Star className="w-3 h-3 text-[#fbbf24]" />
                              Character Focus
                            </span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {actor.characterHighlight}
                            </p>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                ))}
              </div>
            );
          })()}

          {/* Full Ensemble Summary Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171720] via-[#111116] to-[#171720] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e60064] font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Season One Production Ensemble</span>
              </div>
              <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                14 Principal Actors • 4 Master Live Percussionists • 24 Touring Party
              </h4>
              <p className="text-xs text-gray-400">
                Crafted under the rigorous scenographic direction of Nandini and produced by Areeso Theatre, Mumbai.
              </p>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('booking-inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-[#e60064]/25"
            >
              <span>Book Full Ensemble</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
