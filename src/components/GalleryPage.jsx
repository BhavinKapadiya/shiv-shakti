import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Camera, X, Maximize2, Download, 
  MapPin, Calendar, Sparkles, ChevronLeft, ChevronRight, Eye,
  Drama, Layers, Info
} from 'lucide-react';
import { MOMENTS_GALLERY, THEATRE_INFO } from '../data/theatreData';

export default function GalleryPage({ onNavigateHome, setCursorText }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'masonry'

  const categories = [
    'All',
    'Rehearsals',
    'Studio Stage',
    'Table Reads',
    'Performances',
    'Production Stills'
  ];

  const filteredItems = selectedFilter === 'All'
    ? MOMENTS_GALLERY
    : MOMENTS_GALLERY.filter((m) => m.category.toLowerCase() === selectedFilter.toLowerCase());

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-24 pb-20 selection:bg-[#e60064] selection:text-white">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 flex items-center justify-between border-b border-gray-100">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#111111] hover:text-[#e60064] transition-colors group"
          onMouseEnter={() => setCursorText && setCursorText('HOME')}
          onMouseLeave={() => setCursorText && setCursorText('')}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Homepage</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
          <span className="w-2 h-2 rounded-full bg-[#e60064] animate-pulse" />
          <span>Areeso Theatre Visual Archive</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-10 sm:pt-14 pb-8 space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-mono font-bold text-[#e60064] uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>From the Wings & Rehearsal Rooms</span>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-[#111111]">
              where the work <br />
              takes its first breath.
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              Every standing ovation begins in a rehearsal room with scuffed scripts, velvet blocks, and raw passion. Explore the unfiltered moments, table reads, and stagecraft behind Areeso Theatre’s productions.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <span className="font-display font-black text-2xl text-[#e60064] block">120+</span>
              <span className="text-[11px] font-mono text-gray-500 uppercase">Rehearsal Hours</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <span className="font-display font-black text-2xl text-[#111111] block">14</span>
              <span className="text-[11px] font-mono text-gray-500 uppercase">Cast & Artists</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <span className="font-display font-black text-2xl text-[#111111] block">3</span>
              <span className="text-[11px] font-mono text-gray-500 uppercase">Studio Stages</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <span className="font-display font-black text-2xl text-amber-500 block">100%</span>
              <span className="text-[11px] font-mono text-gray-500 uppercase">Live Staged</span>
            </div>
          </div>
        </div>

      </section>

      {/* Filter & View Mode Controls Bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-gray-100 text-[#555555] hover:bg-gray-200 hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
            <span>Showing {filteredItems.length} Photographs</span>
          </div>

        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group flex flex-col justify-between rounded-3xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-900/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#111111] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Overlay Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Image Stamp */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#e60064]" />
                      {item.location || 'Mumbai Rehearsal Room'}
                    </span>
                    {item.date && (
                      <span className="bg-black/60 px-2 py-0.5 rounded text-white/70">
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Info */}
                <div className="space-y-1.5 px-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#e60064] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#e60064] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed pt-1">
                    {item.caption}
                  </p>
                </div>

              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-3 border-t border-gray-200 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-[#111111] px-1">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#e60064]" />
                  <span>Click to expand HD</span>
                </span>
                <span className="text-[#e60064] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* The Rehearsal Room Narrative Ethos */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <div className="rounded-3xl bg-[#08080a] text-white p-8 sm:p-12 lg:p-14 space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e60064]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e60064] block">
              Behind the Curtain • The Areeso Process
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              we don't just rehearse lines. <br />
              we build a living world.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Every production undergoes rigorous physical blocking, voice calibration, and table analysis. By the time our actors step onto the wooden auditorium stage, the scene isn't performed — it is lived.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#e60064] font-bold">01 • Table Reads</span>
              <h4 className="font-display font-bold text-lg text-white">Deconstructing Text</h4>
              <p className="text-xs text-gray-400">Marking subtext, emotional beats, and spoken rhythms before physicalizing.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold">02 • Spatial Dynamics</span>
              <h4 className="font-display font-bold text-lg text-white">Movement & Floor Work</h4>
              <p className="text-xs text-gray-400">Discovering character weight, eye lines, and acoustic intimacy in the studio.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold">03 • The Blackbox Crucible</span>
              <h4 className="font-display font-bold text-lg text-white">Stripped of Artifice</h4>
              <p className="text-xs text-gray-400">Performing with minimal props so truth of the actor remains center stage.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Fullscreen HD Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn select-none">
          
          {/* Top Lightbox Bar */}
          <div className="flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#e60064] text-white text-xs font-mono font-bold uppercase">
                {currentLightboxItem.category}
              </span>
              <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-all"
              onMouseEnter={() => setCursorText && setCursorText('CLOSE')}
              onMouseLeave={() => setCursorText && setCursorText('')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Lightbox Content Area */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Frame */}
            <div className="max-w-5xl max-h-[70vh] flex items-center justify-center">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-4xl mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white border border-white/15 space-y-2 z-20 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-xs font-mono uppercase text-[#fbbf24] font-semibold">
                  {currentLightboxItem.subtitle}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  • {currentLightboxItem.location} • {currentLightboxItem.date}
                </span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
                {currentLightboxItem.caption}
              </p>
            </div>

            <a
              href={currentLightboxItem.image}
              download={`${currentLightboxItem.id}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Full Resolution</span>
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
