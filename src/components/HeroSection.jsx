import React from 'react';
import { Play, Sparkles, ArrowRight, Ticket, Flame } from 'lucide-react';
import { THEATRE_INFO, NOW_SHOWING } from '../data/theatreData';

export default function HeroSection({ onOpenVideo, onOpenBooking, onNavigate, setCursorText }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-6 sm:px-8 md:px-12 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Actions matching Screenshot 1 */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-6xl lg:text-[64px] tracking-tight leading-[1.08] text-[#111111]">
              where every seat <br />
              holds its breath.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#444444] font-normal leading-relaxed max-w-xl">
              <p>
                Hello! We are Areeso Theatre, an independent Indian theatre company crafting original plays and bold revivals — stories rooted in our soil, staged for the world.
              </p>
              <p className="text-sm sm:text-base text-[#666666]">
                <strong className="text-[#111111] font-semibold">Shiv-Shakti:</strong> Areeso Theatre's very first production, coming to the Mumbai stage. Dates, venue and tickets announcing soon — watch this space.
              </p>
            </div>

            {/* Buttons matching Screenshot 1 (Play Reel + Solid Dark Button with Pink Line) */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              
              {/* STAGE REEL Button */}
              <button
                onClick={onOpenVideo}
                className="px-6 py-3.5 rounded-lg border border-gray-900 bg-white hover:bg-gray-50 text-[#111111] font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-sm group"
                onMouseEnter={() => setCursorText && setCursorText('PLAY')}
                onMouseLeave={() => setCursorText && setCursorText('')}
              >
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#111111] ml-0.5 group-hover:border-l-[#e60064] transition-colors" />
                <span>Stage Reel</span>
              </button>

              {/* KNOW MORE / BOOK TICKETS Button with Pink Extension Line */}
              <div className="relative inline-flex items-center">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-lg bg-[#222222] hover:bg-black text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md"
                  onMouseEnter={() => setCursorText && setCursorText('BOOK')}
                  onMouseLeave={() => setCursorText && setCursorText('')}
                >
                  Book Tickets
                </button>
                {/* Signature Pink Line Marker (Screenshot 1) */}
                <div className="w-8 h-[3px] bg-[#e60064] ml-2 hidden sm:block" />
              </div>

            </div>

            {/* Status Pill */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#777777]">
              <span className="w-2 h-2 rounded-full bg-[#e60064] animate-ping" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                Season One • Mumbai Stage
              </span>
              <span>•</span>
              <span className="text-[#e60064] font-semibold">Tickets on sale soon</span>
            </div>

          </div>

          {/* Right Column: Provided When Shiv Met Shakti Official Image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[440px] flex items-center justify-center select-none">
              
              {/* Ambient Glows */}
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#e60064]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Hand-drawn blue sketch lines top left */}
              <svg className="absolute -top-4 -left-4 w-16 h-16 text-blue-600 -rotate-12 pointer-events-none z-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M10 20 Q 30 5, 60 15 T 90 25" />
                <path d="M15 35 Q 35 20, 65 30 T 95 40" />
                <path d="M20 50 Q 40 35, 70 45" />
              </svg>

              {/* Blue Cross doodle top right */}
              <div className="absolute -top-4 -right-2 text-blue-600 font-black text-3xl z-20 pointer-events-none">
                ✕
              </div>

              {/* Main Poster Container with Provided Artwork */}
              <div className="relative w-full aspect-[2/3] max-w-[420px] rounded-3xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-900 group">
                <img
                  src="/assets/when-shiv-met-shakti-full-poster.png"
                  alt="When Shiv Met Shakti — Areeso Theatre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Inner Border Glow */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15 pointer-events-none" />
              </div>

              {/* Floating Rating Polygon Badge (Screenshot 1 Style) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 z-30 bg-white border-2 border-gray-900 px-4 py-3 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                <p className="text-[9px] font-mono uppercase tracking-widest text-[#777777] font-bold">Top Debut Production</p>
                <p className="font-display font-black text-base text-[#111111] uppercase tracking-tight">Shiv-Shakti</p>
                <p className="text-[10px] font-mono text-[#e60064] font-bold">Mumbai • 2026</p>
              </div>

              {/* Live Premiere Pill top right */}
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">Debut Production</span>
              </div>

              {/* 3D sphere accent bottom right */}
              <div className="absolute -bottom-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-tr from-gray-300 via-white to-gray-100 border border-gray-300 shadow-2xl z-20" />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
