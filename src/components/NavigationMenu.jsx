import React, { useState } from 'react';
import { X, ArrowUpRight, MapPin, Sparkles, Ticket } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from './Icons';
import { MENU_ITEMS, THEATRE_INFO } from '../data/theatreData';

export default function NavigationMenu({ isOpen, onClose, onNavigate, onOpenBooking, onOpenInvite, setCursorText }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#08080a]/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-6 sm:px-12 md:px-20 py-8 text-white transition-all duration-500 animate-fadeIn">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => { onClose(); onNavigate('hero'); }}
          onMouseEnter={() => setCursorText('HOME')}
          onMouseLeave={() => setCursorText('')}
        >
          <span className="w-3 h-3 rounded-full bg-theatre-crimson animate-ping" />
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Areeso <span className="text-theatre-gold">Theatre</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => { onClose(); onOpenBooking(); }}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-theatre-crimson text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-theatre-crimsonDark transition-all"
            onMouseEnter={() => setCursorText('BOOK')}
            onMouseLeave={() => setCursorText('')}
          >
            <Ticket className="w-3.5 h-3.5" />
            Book Tickets
          </button>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-theatre-crimson hover:bg-theatre-crimson/10 transition-all duration-300 group"
            onMouseEnter={() => setCursorText('CLOSE')}
            onMouseLeave={() => setCursorText('')}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Main Menu Links with Boch & Fernsh Marquee Hover Effect */}
      <div className="my-auto py-10">
        <nav className="flex flex-col space-y-2 md:space-y-3">
          {MENU_ITEMS.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.label}
                className="relative overflow-hidden group border-b border-white/5 py-2 md:py-3 transition-colors"
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setCursorText('EXPLORE');
                }}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                  setCursorText('');
                }}
              >
                <button
                  onClick={() => {
                    onClose();
                    onNavigate(item.targetId);
                  }}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs md:text-sm text-theatre-gold/60 font-medium">
                      0{idx + 1}
                    </span>
                    <span className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase transition-all duration-300 ${
                      isHovered ? 'text-theatre-crimson translate-x-3' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden lg:inline text-xs font-mono tracking-widest text-white/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      Go to {item.label}
                    </span>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-theatre-crimson group-hover:bg-theatre-crimson group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Infinite Marquee Subtitle Track that sweeps on hover (Boch & Fernsh signature) */}
                {isHovered && (
                  <div className="absolute inset-y-0 right-20 left-1/3 pointer-events-none hidden xl:flex items-center overflow-hidden opacity-30">
                    <div className="flex w-max animate-marquee text-xs font-display font-bold uppercase tracking-widest text-theatre-gold">
                      {[...Array(6)].map((_, mIdx) => (
                        <span key={mIdx} className="mx-4">{item.marquee}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer / Submenu Row */}
      <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Left: Location & Email */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2">Based in</p>
          <p className="font-display font-bold text-lg text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-theatre-gold" />
            {THEATRE_INFO.contact.city}
          </p>
          <p className="text-sm text-white/60 mt-1 font-mono">{THEATRE_INFO.contact.email}</p>
        </div>

        {/* Center: Quick Action Buttons */}
        <div className="flex flex-wrap gap-3 md:justify-center">
          <button
            onClick={() => { onClose(); onOpenInvite(); }}
            className="text-xs font-display font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-theatre-gold/40 text-theatre-gold hover:bg-theatre-gold hover:text-black transition-all"
            onMouseEnter={() => setCursorText('INVITE')}
            onMouseLeave={() => setCursorText('')}
          >
            Invite Us to Your City ↗
          </button>
          <a
            href={THEATRE_INFO.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-display font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-all flex items-center gap-1.5"
            onMouseEnter={() => setCursorText('YOUTUBE')}
            onMouseLeave={() => setCursorText('')}
          >
            <YoutubeIcon className="w-3.5 h-3.5 text-theatre-crimson" />
            Archive Channel
          </a>
        </div>

        {/* Right: Social Links with Hover Tagline */}
        <div className="flex flex-col md:items-end">
          <div className="h-5 mb-1">
            {hoveredSocial && (
              <span className="text-xs font-mono text-theatre-gold tracking-widest uppercase animate-fadeIn">
                {hoveredSocial}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={THEATRE_INFO.links.bookMyShow}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-theatre-gold transition-colors"
              onMouseEnter={() => setHoveredSocial('Book on BookMyShow')}
              onMouseLeave={() => setHoveredSocial('')}
            >
              BookMyShow
            </a>
            <span className="text-white/20">•</span>
            <a
              href={THEATRE_INFO.links.district}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-theatre-gold transition-colors"
              onMouseEnter={() => setHoveredSocial('Book on District')}
              onMouseLeave={() => setHoveredSocial('')}
            >
              District
            </a>
            <span className="text-white/20">•</span>
            <a
              href={THEATRE_INFO.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-theatre-gold transition-colors"
              onMouseEnter={() => setHoveredSocial('Watch Archives on YouTube')}
              onMouseLeave={() => setHoveredSocial('')}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
