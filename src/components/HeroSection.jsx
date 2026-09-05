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

          {/* Right Column: Independent Artwork with Ambient Contrast Aura */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative flex items-center justify-center select-none">
              
              {/* Soft Ambient Contrast Aura (Enhances white lettering contrast without creating a box) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-amber-500/15 rounded-full blur-3xl scale-125 -z-10 pointer-events-none" />

              {/* Independent Artwork Image with Height Capping */}
              <img
                src="/assets/Final.png"
                alt="When Shiv Met Shakti — Areeso Theatre"
                className="w-auto max-h-[430px] sm:max-h-[470px] lg:max-h-[500px] max-w-[300px] sm:max-w-[340px] lg:max-w-[370px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
