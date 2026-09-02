import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, MapPin, Ticket, Flame } from 'lucide-react';
import { PRODUCTIONS, THEATRE_INFO } from '../data/theatreData';

export default function ProductionsSection({ onOpenBooking, onOpenInvite, onOpenShowInfo, setCursorText }) {
  return (
    <section id="productions" className="py-28 px-6 sm:px-8 md:px-12 relative overflow-hidden bg-[#0c0c10] border-t border-b border-white/10">
      
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
                Season One Repertoire
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight">
              Our Journey <br />
              <span className="text-theatre-crimson font-serifDisplay italic lowercase text-5xl sm:text-7xl md:text-8xl">
                begins.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenInvite}
              className="px-6 py-3.5 rounded-full bg-theatre-gold/10 hover:bg-theatre-gold border border-theatre-gold/40 text-theatre-gold hover:text-black font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all group"
              onMouseEnter={() => setCursorText('INVITE')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>Want us in your city? Invite Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenShowInfo}
              className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              onMouseEnter={() => setCursorText('ALL')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>View All Productions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Project Card Grid (Boch & Fernsh "we make work that works" style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTIONS.map((prod, idx) => (
            <div
              key={prod.id}
              className="group flex flex-col justify-between space-y-4 cursor-pointer"
              onClick={prod.title === 'Shiv-Shakti' ? onOpenBooking : onOpenShowInfo}
              onMouseEnter={() => setCursorText(prod.title === 'Shiv-Shakti' ? 'BOOK' : 'VIEW')}
              onMouseLeave={() => setCursorText('')}
            >
              {/* Media Thumbnail Container with Hover Swap */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-theatre-card aspect-[16/10] sm:aspect-[16/11]">
                
                {/* Base Poster Image */}
                <img
                  src={prod.poster}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 brightness-90"
                />

                {/* Hover Alternate Video / Action Still */}
                <img
                  src={prod.hoverPoster}
                  alt={`${prod.title} on stage`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 brightness-100"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Status Badge Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${
                    prod.featured 
                      ? 'bg-theatre-crimson text-white' 
                      : 'bg-black/70 text-theatre-gold border border-theatre-gold/30'
                  }`}>
                    {prod.season}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono uppercase">
                    {prod.language}
                  </span>
                </div>

                {/* City & Venue Tag Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-theatre-gold flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3 h-3 text-theatre-crimson" />
                  {prod.city}
                </div>
              </div>

              {/* Text & Meta (Boch & Fernsh "pro_txt" structure) */}
              <div className="space-y-2 pt-2">
                
                {/* Title & Category Tags */}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-theatre-gold transition-colors">
                    {prod.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {prod.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Witty / Evocative One-Liner Quote */}
                <p className="font-serifDisplay italic text-sm sm:text-base text-white/70 group-hover:text-white transition-colors">
                  "{prod.quote}"
                </p>

                {/* Short synopsis */}
                <p className="text-xs text-white/50 font-light line-clamp-2">
                  {prod.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
