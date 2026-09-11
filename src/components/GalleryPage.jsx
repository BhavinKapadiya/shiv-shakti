import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Camera, X, Maximize2, Download, 
  MapPin, Calendar, Sparkles, ChevronLeft, ChevronRight, Eye,
  Drama, Layers, Info, Grid, LayoutGrid
} from 'lucide-react';
import { MOMENTS_GALLERY, THEATRE_INFO } from '../data/theatreData';

export default function GalleryPage({ onNavigateHome, setCursorText }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [viewMode, setViewMode] = useState('bento'); // 'bento' | 'cinematic'

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

  // Custom Bento Grid layout classes
  const getBentoSpan = (index, total) => {
    if (viewMode === 'cinematic') {
      return 'col-span-12 lg:col-span-6 min-h-[420px] sm:min-h-[500px]';
    }
    // Dynamic Bento Mosaic spans
    switch (index % 8) {
      case 0:
        return 'col-span-12 lg:col-span-8 min-h-[380px] sm:min-h-[480px]';
      case 1:
        return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[380px] sm:min-h-[480px]';
      case 2:
        return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[380px] sm:min-h-[480px]';
      case 3:
        return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[380px] sm:min-h-[480px]';
      case 4:
        return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[380px] sm:min-h-[480px]';
      case 5:
        return 'col-span-12 lg:col-span-6 min-h-[380px] sm:min-h-[460px]';
      case 6:
        return 'col-span-12 lg:col-span-6 min-h-[380px] sm:min-h-[460px]';
      case 7:
        return 'col-span-12 min-h-[350px] sm:min-h-[480px]';
      default:
        return 'col-span-12 sm:col-span-6 min-h-[380px] sm:min-h-[460px]';
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-24 pb-20 selection:bg-[#e60064] selection:text-white">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-3 flex items-center justify-between border-b border-gray-100">
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
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-6 space-y-5">
        
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
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-3 sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-gray-200">
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

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 mr-1 hidden sm:inline">View:</span>
            <div className="flex items-center p-1 rounded-xl bg-gray-100 border border-gray-200">
              <button
                onClick={() => setViewMode('bento')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                  viewMode === 'bento'
                    ? 'bg-white text-[#111111] shadow-sm'
                    : 'text-gray-500 hover:text-[#111111]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Bento Mosaic</span>
              </button>

              <button
                onClick={() => setViewMode('cinematic')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                  viewMode === 'cinematic'
                    ? 'bg-white text-[#111111] shadow-sm'
                    : 'text-gray-500 hover:text-[#111111]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Large View</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Option 1: Immersive Full-Bleed Bento Mosaic Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-8 sm:py-10">
        
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className={`${getBentoSpan(index, filteredItems.length)} group relative rounded-3xl overflow-hidden bg-gray-950 border border-gray-800/80 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 select-none`}
              onMouseEnter={() => setCursorText && setCursorText('EXPAND')}
              onMouseLeave={() => setCursorText && setCursorText('')}
            >
              {/* Full-Bleed Photograph */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Multi-Stop Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

              {/* Top Bar: Floating Badges & Zoom Trigger */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#111111] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                    {item.category}
                  </span>
                  {item.location && (
                    <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/90 text-[10px] font-mono border border-white/20">
                      <MapPin className="w-3 h-3 text-[#e60064]" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#111111] group-hover:bg-[#e60064] group-hover:text-white transition-all duration-300 shadow-lg shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Bar: Title, Subtitle, & Story Backdrop */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2 z-10">
                
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#fbbf24] font-bold">
                    {item.subtitle}
                  </span>
                  {item.date && (
                    <span className="text-[11px] font-mono text-white/60">
                      • {item.date}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-[1.05] group-hover:text-pink-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed line-clamp-2 max-w-3xl pt-1">
                  {item.caption}
                </p>

                {/* Subtle Click Indicator */}
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5 text-[#e60064]" />
                  <span>Click to expand high-resolution</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e60064] group-hover:translate-x-1.5 transition-transform" />
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* The Rehearsal Room Narrative Ethos */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-10">
        <div className="rounded-3xl bg-[#08080a] text-white p-8 sm:p-12 lg:p-14 space-y-8 relative overflow-hidden shadow-2xl border border-white/10">
          
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
              <span className="px-3.5 py-1 rounded-full bg-[#e60064] text-white text-xs font-mono font-bold uppercase shadow-md">
                {currentLightboxItem.category}
              </span>
              <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#e60064] text-white flex items-center justify-center transition-all shadow-md"
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
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Frame */}
            <div className="max-w-5xl max-h-[72vh] flex items-center justify-center">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#e60064] text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-4xl mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white border border-white/15 space-y-2 z-20 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
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
              className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm"
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
