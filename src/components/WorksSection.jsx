import React, { useState } from 'react';
import { ExternalLink, Ticket, ArrowRight, Play } from 'lucide-react';
import { PRODUCTIONS, THEATRE_INFO } from '../data/theatreData';

export default function WorksSection({ onOpenBooking, onOpenInvite, onOpenShowInfo, onOpenVideo, setCursorText }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Shiv-Shakti', 'Debut Production', 'Classic Revivals', 'Original Writing', 'Blackbox'];

  const filteredProductions = selectedFilter === 'All'
    ? PRODUCTIONS
    : PRODUCTIONS.filter((p) => 
        p.title.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        p.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  return (
    <section id="productions" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading matching Screenshot 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e60064] block">
              Season One Repertoire
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-[#111111]">
              we make work <br />
              that works.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInvite}
              className="px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-900 bg-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider transition-all"
            >
              Want Us in Your City? ↗
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-lg bg-[#222222] hover:bg-black text-white font-display text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Book Tickets
            </button>
          </div>
        </div>

        {/* 2-Column Large Rounded Project Cards matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {filteredProductions.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col space-y-4 cursor-pointer"
              onClick={prod.title === 'Shiv-Shakti' ? onOpenBooking : onOpenShowInfo}
            >
              {/* Image Container with Rounded Corners (Screenshot 3 style) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 aspect-[16/11] border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={prod.poster}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-semibold uppercase">
                    {prod.season}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#e60064] text-[11px] font-mono font-bold uppercase">
                    {prod.language}
                  </span>
                </div>

                {prod.title === 'Shiv-Shakti' && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-[#e60064] shadow-md flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Debut Production</span>
                  </div>
                )}
              </div>

              {/* Title & Tagline Meta matching Screenshot 3 */}
              <div className="space-y-2 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  
                  {/* Name and Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight group-hover:text-[#e60064] transition-colors">
                      {prod.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-1.5">
                      {prod.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono uppercase tracking-wider text-[#666666] px-2 py-0.5 rounded-md bg-gray-100 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Evocative One-Liner Quote */}
                <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                  "{prod.quote}"
                </p>

                {/* Booking Links for Shiv-Shakti */}
                {prod.title === 'Shiv-Shakti' && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={THEATRE_INFO.links.bookMyShow}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#c82333] hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Book on BookMyShow</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-gray-300">•</span>
                    <a
                      href={THEATRE_INFO.links.district}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563eb] hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Book on District</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
