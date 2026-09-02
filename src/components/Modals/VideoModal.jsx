import React from 'react';
import { X, Play, Volume2, Sparkles, Ticket } from 'lucide-react';
import { NOW_SHOWING, THEATRE_INFO } from '../../data/theatreData';

export default function VideoModal({ isOpen, onClose, onOpenBooking, setCursorText }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-theatre-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl space-y-4 my-8">
        
        {/* Top Bar */}
        <div className="p-4 sm:p-6 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              Shiv-Shakti • Official Stage Reel
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

        {/* Video Frame */}
        <div className="px-4 sm:px-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
            {/* Embedded video player */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
              title="Areeso Theatre Stage Reel"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom Synopsis & Booking Bar */}
        <div className="p-4 sm:p-6 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
          <div className="space-y-1">
            <h4 className="font-display font-black text-xl text-white uppercase tracking-tight">
              Shiv-Shakti — Areeso Theatre
            </h4>
            <p className="text-xs text-white/60 font-light max-w-md">
              Directed by Parth • Starring Meher Irani • Music by Sourav Das
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { onClose(); onOpenBooking(); }}
              className="px-6 py-3 rounded-full bg-theatre-crimson hover:bg-theatre-crimsonDark text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <Ticket className="w-4 h-4 text-theatre-gold" />
              <span>Book Tickets</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
