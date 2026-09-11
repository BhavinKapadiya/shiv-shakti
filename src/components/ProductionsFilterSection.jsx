import React, { useState } from 'react';
import { ExternalLink, Sparkles, MapPin, Award, Eye, Calendar, ArrowRight, Play } from 'lucide-react';
import { THEATRE_INFO } from '../data/theatreData';

export default function ProductionsFilterSection({ onOpenBooking, onOpenShowInfo, onOpenInvite, onOpenVideo, setCursorText }) {
  const [activeFilter, setActiveFilter] = useState('All Past Works');

  const filterOptions = [
    'All Past Works',
    'Housefull Runs',
    'Festival Premieres',
    'Original Writing',
    'Classic Revivals',
    'Studio Blackbox'
  ];

  const pastProductions = [
    {
      id: 'past-shiv-shakti',
      title: 'When Shiv Met Shakti',
      badge: '★ Sold Out Premiere',
      category: 'Original Writing',
      tags: ['Original Writing', 'Housefull Runs', 'Live Percussion'],
      runInfo: 'Mumbai & Ahmedabad Showcase',
      showsCount: '18 Sold Out Shows',
      acclaim: 'Standing Ovations • 100% Full Houses',
      poster: '/assets/shiv-shakti-banner.jpg',
      city: 'Mumbai & Ahmedabad',
      description: 'The foundational mythic-physical staging that marked Areeso Theatre’s debut, featuring 12 actors, intense movement, and live percussion.'
    },
    {
      id: 'past-andha-yug',
      title: 'Andha Yug: Shadows of Twilight',
      badge: 'Classic Revival',
      category: 'Classic Revivals',
      tags: ['Classic Revivals', 'Housefull Runs', 'Verse Theatre'],
      runInfo: 'Mumbai & Delhi Tour',
      showsCount: '24 Shows Staged',
      acclaim: 'The Hindu: “Staging of the highest order”',
      poster: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
      city: 'Mumbai & Delhi',
      description: 'A ferocious, stripped-down industrial reimagining of Dharamvir Bharati’s post-war tragedy staged across Mumbai and Delhi auditoriums.'
    },
    {
      id: 'past-chandni-raatein',
      title: 'Chandni Raatein',
      badge: 'Festival Premiere',
      category: 'Original Writing',
      tags: ['Original Writing', 'Festival Premieres', 'Housefull Runs'],
      runInfo: 'Kamani Delhi & Prithvi Mumbai',
      showsCount: '32 Shows Staged',
      acclaim: 'Audience Choice Winner 2025',
      poster: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1000&q=80',
      city: 'Delhi, Pune & Mumbai',
      description: 'A tender family chronicle set around live ghazals and heirloom memories in an Old Delhi courtyard, winning praise across 3 metros.'
    },
    {
      id: 'past-the-last-act',
      title: 'The Last Act',
      badge: 'Festival Premiere',
      category: 'Festival Premieres',
      tags: ['Festival Premieres', 'Original Writing', 'Housefull Runs'],
      runInfo: 'Natrani Amphitheatre Run',
      showsCount: '12 Shows • Sold Out',
      acclaim: 'Ahmedabad Theatre Guild Acclaim',
      poster: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80',
      city: 'Ahmedabad & Vadodara',
      description: 'An intense psychological drama exploring memory and unspoken truth between two legendary stage veterans in their final rehearsal.'
    },
    {
      id: 'past-green-room',
      title: 'Green Room Monologues (Vol. 1 & 2)',
      badge: 'Studio Blackbox',
      category: 'Studio Blackbox',
      tags: ['Studio Blackbox', 'Experimental'],
      runInfo: 'Bandra Studio & Intimate Spaces',
      showsCount: '40+ Studio Evenings',
      acclaim: 'Intimate 40-Seat Immersive Experience',
      poster: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1000&q=80',
      city: 'Mumbai Alternative Stages',
      description: 'Raw, unamplified 40-minute monologues stripped of sets and artifice, hosted in alternative intimate spaces across Mumbai.'
    },
    {
      id: 'past-kashi-galiyan',
      title: 'Kashi Ki Galiyan',
      badge: 'Classic Revival',
      category: 'Classic Revivals',
      tags: ['Classic Revivals', 'Festival Premieres'],
      runInfo: 'NCPA Mumbai & Varanasi Ghats',
      showsCount: '16 Shows Staged',
      acclaim: 'Special Jury Mention — National Fringe',
      poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
      city: 'Varanasi & Mumbai',
      description: 'A sensory journey through folk ballads, Ghat rituals, and the timeless physical rhythms of the holy city.'
    }
  ];

  const filteredItems = activeFilter === 'All Past Works'
    ? pastProductions
    : pastProductions.filter((p) => 
        p.category === activeFilter ||
        p.tags.includes(activeFilter) ||
        p.badge.includes(activeFilter)
      );

  return (
    <section id="productions" className="pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 sm:px-8 md:px-12 bg-[#08080a] text-white relative overflow-hidden">
      
      {/* Background Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e60064]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 relative z-10">
        
        {/* Centered Headline matching Option 1 */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-[#e60064]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Past Productions • Archive & Repertoire</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white lowercase leading-[1.08]">
            stages we’ve ignited. <br />
            stories that stayed.
          </h2>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            From housefull opening nights in Mumbai to packed auditoriums across Gujarat and Delhi — explore the past productions, tours, and standing ovations that built our stage.
          </p>

        </div>

        {/* Filter Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto pt-2">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-[#e60064] text-white font-bold shadow-lg shadow-[#e60064]/30 scale-105'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/40 hover:text-white hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3-Column Past Production Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredItems.map((prod) => (
            <div
              key={prod.id}
              onClick={onOpenShowInfo}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-[#121216] border border-white/10 hover:border-white/30 p-4 sm:p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                
                {/* Media Poster Frame */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#1a1a22] border border-white/10">
                  <img
                    src={prod.poster}
                    alt={prod.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-semibold border border-white/15">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-300 font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#e60064]" />
                      {prod.showsCount}
                    </span>
                    <span className="text-white/80 bg-black/60 px-2 py-0.5 rounded">
                      {prod.city}
                    </span>
                  </div>
                </div>

                {/* Show Title & Details */}
                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#e60064] transition-colors">
                    {prod.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#e60064]">
                    <span>{prod.runInfo}</span>
                  </div>

                  <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-display uppercase tracking-wider text-white/80 group-hover:text-white">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5 text-[#e60064]" />
                  View Archive & Cast
                </span>
                <span className="text-[#e60064] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Repertoire Inquiry Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white uppercase">
              Looking to host a revival or festival showcase in your city?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              We bring our complete cast, physical set, and live musical ensemble to auditoriums and arts festivals across India.
            </p>
          </div>

          <button
            onClick={onOpenInvite}
            className="px-6 py-3.5 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#e60064]/30 flex items-center gap-2 shrink-0 group"
          >
            <span>Invite a Revival Tour</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
