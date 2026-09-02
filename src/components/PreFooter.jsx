import React from 'react';
import { Ticket, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { THEATRE_INFO } from '../data/theatreData';

export default function PreFooter({ onOpenBooking, setCursorText }) {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 relative overflow-hidden bg-gradient-to-b from-[#0c0c10] to-[#08080a] border-b border-white/10">
      
      {/* Dramatic Stage Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80vw] h-[350px] bg-gradient-to-t from-theatre-crimson/20 via-theatre-gold/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Sub-label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theatre-crimson/20 border border-theatre-crimson/40">
          <span className="w-2 h-2 rounded-full bg-theatre-gold animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
            Season One Premiere
          </span>
        </div>

        {/* Big CTA Title */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.95]">
          The curtain <br />
          <span className="text-stroke-gold text-theatre-gold">rises soon.</span> <br />
          <span className="text-theatre-crimson font-serifDisplay italic lowercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            Will you be there?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-white/80 font-light max-w-2xl mx-auto">
          Independent theatre production company. Launching in India, headed for the world.
        </p>

        {/* Booking Buttons Area */}
        <div className="pt-6 space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-theatre-crimson hover:bg-theatre-crimsonDark text-white font-display text-sm font-bold uppercase tracking-wider flex items-center gap-3 shadow-2xl shadow-theatre-crimson/40 hover:scale-105 transition-all"
              onMouseEnter={() => setCursorText('BOOK')}
              onMouseLeave={() => setCursorText('')}
            >
              <Ticket className="w-4 h-4 text-theatre-gold" />
              <span>Book on Our Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={THEATRE_INFO.links.bookMyShow}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-[#c82333]/80 hover:bg-[#c82333] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              onMouseEnter={() => setCursorText('BMS')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>BookMyShow</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={THEATRE_INFO.links.district}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-[#2563eb]/80 hover:bg-[#2563eb] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              onMouseEnter={() => setCursorText('DISTRICT')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>District</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            Official Box Office • Instant Ticket Confirmation
          </p>
        </div>

      </div>
    </section>
  );
}
