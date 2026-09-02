import React, { useState } from 'react';
import { ExternalLink, Ticket, Sparkles, MapPin } from 'lucide-react';
import { PRODUCTIONS, THEATRE_INFO } from '../data/theatreData';

export default function ProductionsFilterSection({ onOpenBooking, onOpenShowInfo, setCursorText }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = [
    'All',
    'Shiv-Shakti',
    'Hindi Drama',
    'Classic Revivals',
    'Original Writing',
    'Live Music & Ghazal',
    'Blackbox Monologues',
    'Mumbai Premiere',
    'Delhi Tour'
  ];

  const filteredItems = activeFilter === 'All'
    ? PRODUCTIONS
    : PRODUCTIONS.filter((p) => 
        p.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())) ||
        p.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="shows" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-[#08080a] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Centered Headline matching Screenshot 5 */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white lowercase">
            stories rooted in our soil, staged for the world.
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#e60064]">
            Season One Full Repertoire & Showtimes
          </p>
        </div>

        {/* Filter Pill Badges matching Screenshot 5 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto pt-4">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-display font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-transparent text-white/70 border border-white/20 hover:border-white hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3-Column Card Grid with Top Corner Pills matching Screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredItems.map((prod) => (
            <div
              key={prod.id}
              onClick={prod.title === 'Shiv-Shakti' ? onOpenBooking : onOpenShowInfo}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              {/* Media Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#141419] border border-white/10 shadow-lg">
                <img
                  src={prod.poster}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Corner Pill Badges (Screenshot 5 style) */}
                <div className="absolute top-3.5 right-3.5 flex flex-wrap gap-1.5 justify-end">
                  {prod.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-mono font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Left Venue & Season */}
                <div className="absolute bottom-3.5 left-3.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-mono text-[#fbbf24] flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3 h-3 text-[#e60064]" />
                  <span>{prod.city}</span>
                </div>
              </div>

              {/* Title & Tagline Below */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight group-hover:text-[#e60064] transition-colors">
                    {prod.title}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400">
                    {prod.status}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-light line-clamp-2">
                  {prod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Action Banner */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-lg text-white uppercase">
              Shiv-Shakti — Debut Production
            </h4>
            <p className="text-xs text-white/60">
              Areeso Theatre's flagship production coming to the Mumbai stage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={THEATRE_INFO.links.bookMyShow}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#c82333] hover:bg-[#b01c2a] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
            >
              <span>Book on BookMyShow</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={THEATRE_INFO.links.district}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
            >
              <span>Book on District</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
