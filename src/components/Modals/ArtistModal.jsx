import React from 'react';
import { X, Award, Drama, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ArtistModal({ artist, isOpen, onClose, setCursorText }) {
  if (!isOpen || !artist) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-theatre-card border border-white/20 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-6 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-theatre-crimson hover:border-theatre-crimson transition-all"
          onMouseEnter={() => setCursorText('CLOSE')}
          onMouseLeave={() => setCursorText('')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-theatre-gold shrink-0 relative shadow-xl">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-theatre-crimson text-white font-display font-black text-sm flex items-center justify-center">
              {artist.initials}
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theatre-crimson/20 border border-theatre-crimson/40 text-theatre-crimson font-mono text-[11px] font-bold uppercase tracking-wider">
              {artist.role}
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
              {artist.name}
            </h3>
            <p className="text-xs font-mono text-theatre-gold uppercase tracking-wider">
              Speciality: {artist.speciality}
            </p>
          </div>
        </div>

        {/* Artist Quote */}
        {artist.quote && (
          <div className="p-4 rounded-xl bg-white/5 border-l-4 border-theatre-gold font-serifDisplay italic text-sm text-white/90">
            “{artist.quote}”
          </div>
        )}

        {/* Biography */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
            About the Artist
          </h4>
          <p className="text-sm text-white/80 font-light leading-relaxed">
            {artist.bio}
          </p>
        </div>

        {/* Production Credits */}
        {artist.credits && artist.credits.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Season One & Archive Credits
            </h4>
            <div className="flex flex-wrap gap-2">
              {artist.credits.map((credit, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-theatre-gold flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-theatre-crimson" />
                  {credit}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
