import React from 'react';
import { X, Camera, Sparkles } from 'lucide-react';

export default function GalleryModal({ moment, isOpen, onClose, setCursorText }) {
  if (!isOpen || !moment) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-theatre-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl space-y-4 my-8">
        
        {/* Top bar */}
        <div className="p-4 sm:p-6 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              {moment.category} • From the Wings
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-theatre-crimson hover:border-theatre-crimson transition-all"
            onMouseEnter={() => setCursorText('CLOSE')}
            onMouseLeave={() => setCursorText('')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Res Image */}
        <div className="px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
            <img
              src={moment.image}
              alt={moment.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="p-4 sm:p-6 pt-2 space-y-1">
          <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
            {moment.title}
          </h3>
          <p className="text-sm text-white/70 font-light font-body">
            {moment.caption}
          </p>
        </div>

      </div>
    </div>
  );
}
