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

          {/* Right Column: Independent When Shiv Met Shakti Artwork (No Box / No Clutter) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[500px] flex items-center justify-center select-none">
              
              {/* Independent Artwork Image */}
              <img
                src="/assets/Final.png"
                alt="When Shiv Met Shakti — Areeso Theatre"
                className="w-full max-w-[460px] sm:max-w-[500px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
