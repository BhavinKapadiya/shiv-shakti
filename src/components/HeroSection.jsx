import React from 'react';
import { Play, Sparkles, ArrowRight, Ticket } from 'lucide-react';
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

          {/* Right Column: Retro Pop-Art Collage Art piece with transparent Shiv-Shakti Cutout */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
              
              {/* Hand-drawn blue sketch lines top left */}
              <svg className="absolute top-2 left-6 w-16 h-16 text-blue-600 -rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M10 20 Q 30 5, 60 15 T 90 25" />
                <path d="M15 35 Q 35 20, 65 30 T 95 40" />
                <path d="M20 50 Q 40 35, 70 45" />
              </svg>

              {/* Big Vibrant Hot-Pink Circle */}
              <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-[#e60064] relative overflow-hidden flex items-center justify-center shadow-2xl">
                {/* Yellow Marigold Flower Accent top right */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#fbbf24] border-4 border-white flex items-center justify-center shadow-lg transform rotate-12 z-20">
                  <div className="w-8 h-8 rounded-full bg-[#ea580c]" />
                </div>
              </div>

              {/* Shiv & Shakti Divine Duo (No Background Transparent Cutout from Kromme villa grid) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative w-[340px] sm:w-[440px] h-auto flex items-center justify-center">
                  <img
                    src="/assets/shiv-shakti-hero-portrait.png"
                    alt="Shiv-Shakti Play by Areeso Theatre"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] scale-105 sm:scale-110 transform transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Clutch-style Rating Polygon Badge (from Screenshot 1) */}
              <div className="absolute top-1/3 left-0 sm:-left-4 z-30 bg-white border-2 border-gray-900 px-4 py-3 rounded-lg shadow-xl transform -rotate-6">
                <p className="text-[9px] font-mono uppercase tracking-widest text-[#777777] font-bold">Top Debut Production</p>
                <p className="font-display font-black text-base text-[#111111] uppercase tracking-tight">Shiv-Shakti</p>
                <p className="text-[10px] font-mono text-[#e60064] font-bold">Mumbai • 2026</p>
              </div>

              {/* Blue Cross / Plus doodle top right */}
              <div className="absolute top-4 right-2 text-blue-600 font-black text-3xl z-20 pointer-events-none">
                ✕
              </div>

              {/* Blue solid dot bottom left */}
              <div className="absolute bottom-6 left-12 w-9 h-9 rounded-full bg-blue-600 shadow-lg z-20" />

              {/* 3D sphere accent bottom right */}
              <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-gray-300 via-white to-gray-100 border border-gray-300 shadow-2xl z-20" />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
