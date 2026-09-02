import React from 'react';
import { X, Calendar, MapPin, Ticket, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTIONS, THEATRE_INFO } from '../../data/theatreData';

export default function ShowInfoModal({ isOpen, onClose, onOpenBooking, setCursorText }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-theatre-card border border-white/20 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-8 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-theatre-crimson hover:border-theatre-crimson transition-all"
          onMouseEnter={() => setCursorText('CLOSE')}
          onMouseLeave={() => setCursorText('')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              Season One Repertoire Guide
            </span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
            All Shows & Ticket Information
          </h3>
          <p className="text-sm text-white/70 font-light">
            Explore our complete slate of original Indian productions, revival classics, and blackbox showcases.
          </p>
        </div>

        {/* Show List */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
          {PRODUCTIONS.map((prod) => (
            <div
              key={prod.id}
              className="p-5 rounded-2xl bg-black/50 border border-white/10 hover:border-theatre-gold/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-theatre-crimson/20 border border-theatre-crimson/40 text-theatre-crimson text-[10px] font-mono font-bold uppercase">
                    {prod.season}
                  </span>
                  <span className="text-[10px] font-mono text-theatre-gold uppercase">
                    {prod.language} • {prod.genre}
                  </span>
                </div>

                <h4 className="font-display font-black text-2xl text-white uppercase">
                  {prod.title}
                </h4>

                <p className="text-xs text-white/60 font-light max-w-md">
                  {prod.description}
                </p>

                <div className="flex items-center gap-4 text-[11px] font-mono text-white/40 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-theatre-gold" />
                    {prod.city}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Calendar className="w-3 h-3" />
                    {prod.status}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                {prod.title === 'Shiv-Shakti' ? (
                  <button
                    onClick={() => { onClose(); onOpenBooking(); }}
                    className="px-5 py-2.5 rounded-full bg-theatre-crimson hover:bg-theatre-crimsonDark text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-all"
                  >
                    <Ticket className="w-3.5 h-3.5 text-theatre-gold" />
                    <span>Book Now</span>
                  </button>
                ) : (
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-mono">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Box Office Note */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
          <span>Student & Group Concessions Available at Door</span>
          <a
            href={`mailto:${THEATRE_INFO.contact.email}`}
            className="text-theatre-gold hover:underline"
          >
            Bulk Bookings Inquiry →
          </a>
        </div>

      </div>
    </div>
  );
}
