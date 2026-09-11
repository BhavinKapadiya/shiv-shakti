import React from 'react';
import { ArrowRight } from 'lucide-react';
import { THEATRE_INFO, NOW_SHOWING } from '../data/theatreData';

export default function HeroSection({ onOpenVideo, onOpenBooking, onNavigate, setCursorText }) {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-6 sm:px-8 md:px-12 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 shadow-sm text-xs font-mono text-[#555555]">
              <span className="w-2 h-2 rounded-full bg-[#e60064] animate-ping" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                Season One • Mumbai Stage
              </span>
              <span>•</span>
              <span className="text-[#e60064] font-semibold">Tickets on sale soon</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] tracking-tight leading-[1.05] text-[#111111]">
              where every seat <br />
              holds its breath.
            </h1>

            {/* Body Copy */}
            <div className="space-y-3 text-base sm:text-[17px] text-[#444444] font-normal leading-relaxed max-w-xl">
              <p>
                Hello! We are Areeso Theatre, an independent Indian theatre company crafting original plays and bold revivals — stories rooted in our soil, staged for the world.
              </p>
              <p className="text-sm sm:text-base text-[#666666]">
                <strong className="text-[#111111] font-semibold">Shiv-Shakti:</strong> Areeso Theatre's very first production, coming to the Mumbai stage. Dates, venue and tickets announcing soon — watch this space.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              
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

              {/* BOOK TICKETS Button */}
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-lg bg-[#111111] hover:bg-[#e60064] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 group"
                onMouseEnter={() => setCursorText && setCursorText('BOOK')}
                onMouseLeave={() => setCursorText && setCursorText('')}
              >
                <span>Book Tickets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

          {/* Right Column: Areeso Theatre Pop-Art Visual with Actor Cutout */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative flex items-center justify-center select-none w-full max-w-[420px] aspect-square">
              
              {/* Ambient Stage Light Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e60064]/20 via-[#ff2a85]/10 to-amber-400/15 rounded-full blur-3xl scale-110 -z-10 pointer-events-none" />

              {/* Iconic Pop-Art Pink Backdrop Circle */}
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-tr from-[#d6005d] via-[#e60064] to-[#ff2a85] shadow-2xl shadow-[#e60064]/30" />

              {/* Areeso Actor Cutout (Black & White Drama Portrait) */}
              <div className="relative z-10 flex items-end justify-center h-full w-full">
                <img
                  src="/assets/areeso-actor-cutout.png"
                  alt="Areeso Theatre Ensemble Actor"
                  className="w-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500 ease-out pointer-events-none translate-y-2"
                />
              </div>

              {/* Rotating Circular Brand Seal Badge */}
              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-2 z-20 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Rotating SVG Circular Text */}
                  <svg className="w-full h-full animate-[spin_22s_linear_infinite]" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[9px] font-bold tracking-[0.22em] uppercase fill-[#111111]">
                      <textPath href="#circlePath" startOffset="0%">
                        AREESO THEATRE • LIVE ON STAGE •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Star Badge */}
                  <div className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-md">
                    <span className="text-amber-400 text-sm sm:text-base font-bold">★</span>
                  </div>
                </div>
              </div>

              {/* Floating Tag Pill: Season One Ensemble */}
              <div className="absolute -bottom-2 left-4 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e60064] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Mumbai • Original Plays
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
