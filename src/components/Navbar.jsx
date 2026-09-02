import React, { useState, useEffect } from 'react';
import { THEATRE_INFO } from '../data/theatreData';

export default function Navbar({ onOpenMenu, onOpenBooking, onNavigate, setCursorText }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'py-5 sm:py-6 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo matching Boch & Fernsh B&F style */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-baseline gap-2 group text-left"
          onMouseEnter={() => setCursorText && setCursorText('HOME')}
          onMouseLeave={() => setCursorText && setCursorText('')}
        >
          <span className="font-display font-black text-3xl sm:text-4xl text-[#e60064] tracking-tight group-hover:opacity-90 transition-opacity">
            A&T
          </span>
          <span className="font-display font-bold text-xs uppercase tracking-widest text-[#111111] hidden sm:inline">
            Areeso Theatre
          </span>
        </button>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-display font-semibold uppercase tracking-wider text-[#333333]">
          <button 
            onClick={() => onNavigate('shows')}
            className="hover:text-[#e60064] transition-colors"
          >
            Shows
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="hover:text-[#e60064] transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => onNavigate('productions')}
            className="hover:text-[#e60064] transition-colors"
          >
            Productions
          </button>
          <button 
            onClick={() => onNavigate('artists')}
            className="hover:text-[#e60064] transition-colors"
          >
            Artists
          </button>
          <button 
            onClick={() => onNavigate('gallery')}
            className="hover:text-[#e60064] transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="hover:text-[#e60064] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right Buttons: Matching Boch & Fernsh Screenshot with Pink Line Connector */}
        <div className="flex items-center gap-0 relative">
          
          {/* Send A Brief / Book Tickets Button */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-l-lg rounded-r-none sm:rounded-lg border border-gray-300 hover:border-gray-900 bg-white text-[#111111] font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
            onMouseEnter={() => setCursorText && setCursorText('BOOK')}
            onMouseLeave={() => setCursorText && setCursorText('')}
          >
            Book Tickets
          </button>

          {/* Pink Connecting Line (Signature B&F element from screenshot) */}
          <div className="w-4 sm:w-6 h-[2px] bg-[#e60064] -ml-[1px] z-10 hidden sm:block" />

          {/* Hamburger Menu Trigger */}
          <button
            onClick={onOpenMenu}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-r-lg rounded-l-none sm:rounded-lg border border-gray-300 hover:border-gray-900 bg-white flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group shadow-sm hover:shadow"
            onMouseEnter={() => setCursorText && setCursorText('MENU')}
            onMouseLeave={() => setCursorText && setCursorText('')}
            aria-label="Open Navigation Menu"
          >
            <span className="w-5 h-[2px] bg-[#111111] group-hover:bg-[#e60064] transition-colors" />
            <span className="w-5 h-[2px] bg-[#111111] group-hover:bg-[#e60064] transition-colors" />
          </button>
        </div>

      </div>
    </header>
  );
}
