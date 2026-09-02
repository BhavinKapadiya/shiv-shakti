import React from 'react';
import { X, Sparkles, Heart, Compass, Feather, Flame } from 'lucide-react';
import { THEATRE_INFO, PILLARS } from '../../data/theatreData';

export default function AboutModal({ isOpen, onClose, onOpenInvite, setCursorText }) {
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
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-gold" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              About Areeso Theatre
            </span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
            Our Story & Manifesto
          </h3>
          <p className="text-sm text-white/70 font-light">
            Crafting original plays and bold revivals — stories rooted in our soil, staged for the world.
          </p>
        </div>

        {/* Full Narrative */}
        <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
          <p>
            {THEATRE_INFO.storyParagraph1}
          </p>
          <p>
            {THEATRE_INFO.storyParagraph2}
          </p>
          <p>
            We believe theatre is not an escape from reality, but an excavation of it. When stage lights illuminate the actor's face, the entire audience shares a single heartbeat.
          </p>
        </div>

        {/* 3 Pillars recap in modal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {PILLARS.map((p) => (
            <div key={p.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
              <span className="font-mono text-[10px] text-theatre-crimson uppercase font-bold">{p.badge}</span>
              <h5 className="font-display font-bold text-sm text-white uppercase">{p.title}</h5>
              <p className="text-xs text-white/60 font-light">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-white/40">Headquartered in Mumbai, India</span>
          <button
            onClick={() => { onClose(); onOpenInvite(); }}
            className="px-6 py-2.5 rounded-full bg-theatre-gold hover:bg-theatre-goldLight text-black font-display text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
          >
            Invite Us to Your City ↗
          </button>
        </div>

      </div>
    </div>
  );
}
