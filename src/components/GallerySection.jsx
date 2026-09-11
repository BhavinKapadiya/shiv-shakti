import React, { useState } from 'react';
import { Maximize2, ArrowRight, Sparkles, MapPin, Calendar, Camera } from 'lucide-react';
import { MOMENTS_GALLERY } from '../data/theatreData';

export default function GallerySection({ onSelectMoment, onOpenFullGallery, onNavigate, setCursorText }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Rehearsals', 'Studio Stage', 'Table Reads', 'Performances'];

  const filteredMoments = selectedFilter === 'All'
    ? MOMENTS_GALLERY.slice(0, 6)
    : MOMENTS_GALLERY.filter((m) => m.category.toLowerCase() === selectedFilter.toLowerCase());

  const handleOpenPage = () => {
    if (onNavigate) {
      onNavigate('gallery');
    } else if (onOpenFullGallery) {
      onOpenFullGallery();
    }
  };

  return (
    <section id="gallery" className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Header matching Boch & Fernsh Design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e60064]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
                Moments & Archive
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight leading-[1.05]">
              from the wings. <br />
              <span className="text-[#e60064]">rehearsal & stage light.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-gray-100 border border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                    selectedFilter === cat
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={handleOpenPage}
              className="px-6 py-3 rounded-lg border border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all group shadow-sm shrink-0"
              onMouseEnter={() => setCursorText && setCursorText('GALLERY')}
              onMouseLeave={() => setCursorText && setCursorText('')}
            >
              <Camera className="w-4 h-4 text-[#e60064] group-hover:text-white transition-colors" />
              <span>See the Full Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Grid with Authentic Rehearsal & Stage Photography */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {filteredMoments.map((moment) => (
            <div
              key={moment.id}
              onClick={() => onSelectMoment(moment)}
              className={`${moment.span || 'col-span-12 md:col-span-4'} group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 bg-gray-900 aspect-[16/10] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category & Location Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#111111] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  {moment.category}
                </span>
                {moment.location && (
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono border border-white/15">
                    {moment.location}
                  </span>
                )}
              </div>

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#111111] group-hover:bg-[#e60064] group-hover:text-white transition-all shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption & Subtitle */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#fbbf24] font-semibold">
                    {moment.subtitle}
                  </span>
                  {moment.date && (
                    <span className="text-[10px] font-mono text-white/50">
                      • {moment.date}
                    </span>
                  )}
                </div>
                
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-pink-100 transition-colors">
                  {moment.title}
                </h3>
                
                <p className="text-xs text-white/80 font-normal line-clamp-1">
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gallery Link Banner */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-gray-500">
          <span>Showing 6 of {MOMENTS_GALLERY.length} backstage & rehearsal moments</span>
          <button
            onClick={handleOpenPage}
            className="font-bold text-[#e60064] hover:text-[#111111] uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>Explore Complete Gallery Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
