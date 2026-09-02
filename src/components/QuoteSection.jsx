import React from 'react';
import { Eye, Heart, Sparkles, Flame, Users } from 'lucide-react';
import { THEATRE_INFO } from '../data/theatreData';

export default function QuoteSection({ setCursorText }) {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 relative overflow-hidden bg-[#08080a] border-t border-b border-white/10">
      
      {/* Background Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-theatre-crimson/15 via-theatre-gold/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Top Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-theatre-gold" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-theatre-gold">
            Areeso Manifesto
          </span>
        </div>

        {/* Big Editorial Quote */}
        <blockquote className="space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] uppercase text-white">
            “Theatre is the art <br className="hidden sm:inline" />
            of <span className="text-theatre-gold underline decoration-theatre-crimson/80 decoration-wavy decoration-2">looking</span> at ourselves, <br className="hidden sm:inline" />
            <span className="text-theatre-crimson font-serifDisplay italic lowercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              together.
            </span>”
          </h2>
        </blockquote>

        {/* 3 Emotional Pillars Bar like Boch & Fernsh (Mind • Heart • Gut) */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-mono uppercase tracking-widest text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-theatre-crimson/20 border border-theatre-crimson/40 flex items-center justify-center text-theatre-crimson">
              <Eye className="w-4 h-4" />
            </span>
            <span className="text-white font-semibold">Excites the Mind</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-theatre-gold/20 border border-theatre-gold/40 flex items-center justify-center text-theatre-gold">
              <Heart className="w-4 h-4" />
            </span>
            <span className="text-white font-semibold">Moves the Heart</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Users className="w-4 h-4" />
            </span>
            <span className="text-white font-semibold">Stirs the Room</span>
          </div>
        </div>

      </div>
    </section>
  );
}
