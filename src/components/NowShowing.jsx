import React from 'react';
import { Calendar, MapPin, Ticket, ExternalLink, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { NOW_SHOWING, THEATRE_INFO } from '../data/theatreData';

export default function NowShowing({ onOpenBooking, onOpenShowInfo, setCursorText }) {
  return (
    <section id="shows" className="py-24 px-6 sm:px-8 md:px-12 relative overflow-hidden bg-gradient-to-b from-[#08080a] via-[#0e0e12] to-[#08080a] border-t border-b border-white/10">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-theatre-crimson/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-theatre-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
                Live Repertoire
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              Now Showing
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
              Flagship Production
            </span>
            <span className="font-display text-sm font-bold text-theatre-gold uppercase">
              Season One Inaugural Run
            </span>
          </div>
        </div>

        {/* Featured Production Spotlight Box */}
        <div className="rounded-3xl border border-white/15 bg-theatre-card overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image & Poster Pane */}
            <div className="lg:col-span-5 relative group min-h-[380px] lg:min-h-full">
              <img
                src={NOW_SHOWING.posterImage}
                alt="Shiv-Shakti Production by Areeso Theatre"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/40 to-transparent" />

              {/* Badges on Poster */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-theatre-crimson text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg">
                  Hindi
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-theatre-gold border border-theatre-gold/30 font-display text-xs font-bold uppercase tracking-wider">
                  Our Debut Production
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white font-display text-xs font-bold uppercase tracking-wider">
                  Drama
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serifDisplay italic text-white/90 text-sm md:text-base drop-shadow-md">
                  "{NOW_SHOWING.curtainCallQuote}"
                </p>
              </div>
            </div>

            {/* Right Content & Booking Hub */}
            <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 flex flex-col justify-between space-y-8">
              
              <div>
                {/* Title & Tagline */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-theatre-crimson px-2.5 py-1 rounded bg-theatre-crimson/10 border border-theatre-crimson/30">
                      Season 1 • Production #01
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase">
                      Mumbai Tour
                    </span>
                  </div>

                  <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                    Shiv-Shakti
                  </h3>
                  
                  <p className="text-sm font-mono uppercase tracking-widest text-theatre-gold">
                    {NOW_SHOWING.subtitle}
                  </p>
                </div>

                {/* Blurb from user content */}
                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
                  {NOW_SHOWING.shortDescription}
                </p>

                {/* Key Logistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#08080a]/70 border border-white/10 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-theatre-crimson/20 flex items-center justify-center text-theatre-crimson shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">Dates</p>
                      <p className="font-display font-bold text-sm text-white">Announcing Soon</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-theatre-gold/20 flex items-center justify-center text-theatre-gold shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">Location</p>
                      <p className="font-display font-bold text-sm text-white">Mumbai Stage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">Status</p>
                      <p className="font-display font-bold text-sm text-emerald-400">Tickets On Sale Soon</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Ticketing Platform Buttons */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60">
                    Official Booking Partners:
                  </span>
                  <span className="text-[11px] font-mono text-theatre-gold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Authorized Box Office
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Book on BookMyShow */}
                  <a
                    href={THEATRE_INFO.links.bookMyShow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-[#c82333]/90 hover:bg-[#c82333] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all group"
                    onMouseEnter={() => setCursorText('BOOKMYSHOW')}
                    onMouseLeave={() => setCursorText('')}
                  >
                    <div className="flex items-center gap-2.5">
                      <Ticket className="w-4 h-4" />
                      <span>Book on BookMyShow</span>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Book on District */}
                  <a
                    href={THEATRE_INFO.links.district}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-[#2563eb]/90 hover:bg-[#2563eb] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all group"
                    onMouseEnter={() => setCursorText('DISTRICT')}
                    onMouseLeave={() => setCursorText('')}
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Book on District</span>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Direct All Shows link */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={onOpenShowInfo}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-theatre-gold hover:text-white transition-colors group"
                    onMouseEnter={() => setCursorText('INFO')}
                    onMouseLeave={() => setCursorText('')}
                  >
                    <span>All Shows & Ticket Info</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-mono text-white/50 hover:text-white underline transition-colors"
                  >
                    Join VIP Early-Bird Notification List →
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
