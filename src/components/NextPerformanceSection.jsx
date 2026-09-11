import React from 'react';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Eye, Play, Sparkles, ChevronRight } from 'lucide-react';

export default function NextPerformanceSection({ onOpenBooking, onOpenShowInfo, onOpenInvite, onOpenVideo, setCursorText }) {
  
  const upcomingShows = [
    {
      id: 'show-the-last-act',
      title: 'THE LAST ACT',
      badge: 'Ahmedabad Premiere',
      dates: '12–14 September 2026',
      city: 'Ahmedabad, Gujarat',
      venue: 'Natrani Amphitheatre',
      genre: 'Contemporary Drama • Hindi / Gujarati',
      duration: '90 Mins',
      status: 'Booking Opening Soon',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
      description: 'A gripping battle of wit, memory, and unspoken truth between two legendary actors during their twilight rehearsal.'
    },
    {
      id: 'show-chandni-raatein',
      title: 'CHANDNI RAATEIN',
      badge: 'Musical Showcase',
      dates: '26–28 September 2026',
      city: 'New Delhi',
      venue: 'Kamani Auditorium & Prithvi Mumbai',
      genre: 'Musical Drama • Live Ghazals',
      duration: '105 Mins',
      status: 'Few Seats Left',
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
      description: 'Three generations of laughter, grief, and old gramophones echoing in an Old Delhi family courtyard.'
    },
    {
      id: 'show-andha-yug',
      title: 'ANDHA YUG',
      badge: 'Classic Revival',
      dates: '10–12 October 2026',
      city: 'Bengaluru, Karnataka',
      venue: 'Ranga Shankara Auditorium',
      genre: 'Verse Tragedy • Hindustani',
      duration: '100 Mins',
      status: 'In Rehearsals',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      description: 'A ferocious, stripped-down choral reimagining of Dharamvir Bharati’s immortal anti-war classic.'
    },
    {
      id: 'show-green-room',
      title: 'GREEN ROOM MONOLOGUES',
      badge: 'Intimate Blackbox',
      dates: 'Every Sunday • 7:00 PM',
      city: 'Bandra, Mumbai',
      venue: 'Areeso Studio Blackbox',
      genre: 'Physical Theatre • Multi-lingual',
      duration: '50 Mins',
      status: 'Limited 40 Seats',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80',
      description: 'Raw, unamplified 40-minute monologues stripped of sets and artifice — only 40 seats per performance.'
    }
  ];

  return (
    <section id="shows" className="pt-4 sm:pt-6 pb-16 sm:pb-24 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header - Explicitly styled as Upcoming Shows & Live Tour Schedule */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-gray-200 pb-4 sm:pb-5">
          <div className="space-y-2 max-w-2xl">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Section 02 • Upcoming Live Shows & Tour Schedule</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#111111]">
              upcoming shows & tour dates.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            Live tickets and upcoming multi-city performance dates for our headline production and touring repertoire.
          </p>
        </div>

        {/* 1. Main Featured Production Highlight: SHIV-SHAKTI */}
        <div className="relative rounded-3xl bg-[#0d0d11] text-white overflow-hidden shadow-2xl border border-gray-800 transition-all duration-300 group">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e60064]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Panoramic Widescreen Banner Container (Pristine without text overlays) */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[2.4/1] max-h-[380px] sm:max-h-[420px] bg-black overflow-hidden border-b border-gray-800">
            <img
              src="/assets/shiv-shakti-banner.jpg"
              alt="When Shiv Met Shakti Banner — The Rhythm of Divinity Begins"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Details & Action Bar below the Banner */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Badges on TOP of Shiv-Shakti heading */}
              <div className="lg:col-span-7 space-y-3">
                
                {/* 1. Badges moved directly on top of Shiv-Shakti heading */}
                <div className="flex flex-wrap items-center gap-2 pb-1">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#e60064] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Headline Premiere
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15 text-xs font-mono font-medium uppercase">
                    Season One Flagship
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-mono font-medium uppercase">
                    100 Shows Pan-India
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-none">
                  Shiv-Shakti
                </h3>
                <p className="text-base sm:text-lg text-[#e60064] font-medium tracking-wide">
                  When Shiv Met Shakti — The Eternal Cosmic Dance
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed pt-1">
                  An electrifying exploration of balance, cosmic tension, and grounded human emotion. Blending raw physical theatre, intense Indian folk percussion, and bold contemporary dramaturgy, Shiv-Shakti questions where divine archetypes live inside modern conflicts.
                </p>
              </div>

              {/* Right Column: Performance Meta Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Calendar className="w-4 h-4 text-[#e60064] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block">Performance Dates</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">12–14 September 2026</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-[#e60064] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block">Venue & City</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">Royal Opera House • Mumbai</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block">Runtime</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">115 Mins (With Interval)</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block">Genre & Score</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">Drama • Live Percussion</strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Action Buttons Row */}
            <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Book Tickets */}
                <button
                  onClick={onOpenBooking}
                  className="px-6 sm:px-8 py-3 rounded-xl bg-[#e60064] hover:bg-[#ff007a] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#e60064]/40 flex items-center gap-2 group"
                  onMouseEnter={() => setCursorText && setCursorText('BOOK')}
                  onMouseLeave={() => setCursorText && setCursorText('')}
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book Tickets</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* View Show Info */}
                <button
                  onClick={onOpenShowInfo}
                  className="px-5 sm:px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                  onMouseEnter={() => setCursorText && setCursorText('INFO')}
                  onMouseLeave={() => setCursorText && setCursorText('')}
                >
                  <Eye className="w-4 h-4" />
                  <span>View Show Details</span>
                </button>

                {/* Stage Reel */}
                <button
                  onClick={onOpenVideo}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:bg-white/5"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#e60064]" />
                  <span>Watch Teaser</span>
                </button>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ahmedabad & Delhi dates announcing soon</span>
              </div>

            </div>

          </div>
        </div>

        {/* 2. Upcoming Performances / Tour Schedule Grid */}
        <div className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e60064] block">
                Season One Tour Schedule
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                More Upcoming Shows & Cities
              </h3>
            </div>

            <button
              onClick={onOpenInvite}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] hover:text-[#e60064] flex items-center gap-1.5 transition-colors self-start sm:self-auto py-1"
            >
              <span>Want us in your city?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#fafafa] hover:bg-white border border-gray-200 hover:border-gray-900/40 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              >
                <div className="space-y-3.5">
                  
                  {/* Show Image Header */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-gray-200">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase">
                        {show.badge}
                      </span>
                    </div>
                  </div>

                  {/* Show Information */}
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#e60064] transition-colors">
                      {show.title}
                    </h4>

                    {/* Meta Chips */}
                    <div className="space-y-1 text-xs text-[#555555]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#e60064] shrink-0" />
                        <span className="font-semibold text-[#111111]">{show.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">{show.city} • {show.venue}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#666666] leading-relaxed pt-0.5 line-clamp-2">
                      {show.description}
                    </p>
                  </div>

                </div>

                {/* Bottom Buttons */}
                <div className="pt-4 mt-3 border-t border-gray-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={onOpenShowInfo}
                    className="px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider text-[#111111] hover:bg-gray-100 flex items-center gap-1 transition-colors"
                  >
                    <span>View Show</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-1.5 rounded-lg bg-[#111111] hover:bg-[#e60064] text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1.5"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
