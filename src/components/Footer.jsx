import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Heart, ArrowUpRight } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from './Icons';
import confetti from 'canvas-confetti';
import { THEATRE_INFO, MENU_ITEMS } from '../data/theatreData';

export default function Footer({ onNavigate, onOpenInvite, onOpenBooking, setCursorText }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSocialHover, setActiveSocialHover] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubscribed(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.9 },
        colors: ['#e60064', '#111111', '#fbbf24']
      });
    } catch (err) {}

    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#0a0a0c] text-white pt-24 pb-12 px-6 sm:px-8 md:px-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Top Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
        
        {/* Col 1: Brand & Bio (Boch & Fernsh about-bnf column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-3xl text-[#e60064] tracking-tight">
              A&T
            </span>
            <span className="font-display font-bold text-lg text-white uppercase tracking-tight">
              Areeso Theatre
            </span>
          </div>

          <div className="space-y-3 text-sm text-white/70 font-light leading-relaxed max-w-md">
            <p>
              You might know us by our call sign, <strong className="text-white font-semibold">A&T</strong>.
            </p>
            <p>
              We are an independent Indian theatre company crafting original plays and bold revivals — stories rooted in our soil, staged for the world.
            </p>
            <p className="flex items-center gap-1.5 text-xs font-mono text-[#fbbf24] pt-1">
              Operating with <Heart className="w-3.5 h-3.5 text-[#e60064] fill-[#e60064]" /> from Mumbai, India.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 pt-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-[#e60064] shrink-0" />
              <span>{THEATRE_INFO.contact.city}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4 text-[#fbbf24] shrink-0" />
              <a href={`mailto:${THEATRE_INFO.contact.email}`} className="hover:text-[#e60064] transition-colors">
                {THEATRE_INFO.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${THEATRE_INFO.contact.phone}`} className="hover:text-emerald-400 transition-colors">
                {THEATRE_INFO.contact.phoneDisplay}
              </a>
            </div>
            <p className="text-[11px] text-white/40 pt-1">
              {THEATRE_INFO.contact.collabNote}
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links Navigation (Boch & Fernsh quick links big) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
            Quick Link
          </h4>
          <ul className="space-y-2.5 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => onNavigate(item.targetId)}
                  className="hover:text-[#e60064] hover:translate-x-1 transition-all text-left flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-white/30">›</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={onOpenInvite}
                className="hover:text-[#fbbf24] hover:translate-x-1 transition-all text-left text-[#fbbf24] flex items-center gap-2"
              >
                <span className="text-xs font-mono">›</span>
                <span>Invite Us / Venues ↗</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Repertoire & Front-Row Newsletter */}
        <div className="lg:col-span-4 space-y-5">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/60">
            Front-Row Letter
          </h4>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Show announcements, early-bird tickets, backstage stories. No spam — promise.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#e60064]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-[#e60064] hover:bg-[#d90368] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </div>

            {subscribed && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're in the front row! Early-bird updates arriving soon.</span>
              </div>
            )}
          </form>

          {/* Social Media Tooltips like Boch & Fernsh */}
          <div className="pt-2">
            <div className="h-4 text-[11px] font-mono text-[#fbbf24] uppercase tracking-widest">
              {activeSocialHover || '• See the Vibe'}
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href={THEATRE_INFO.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-red-600 hover:text-white transition-all"
                onMouseEnter={() => setActiveSocialHover('Watch Our Vision • YouTube')}
                onMouseLeave={() => setActiveSocialHover('')}
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={THEATRE_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-pink-600 hover:text-white transition-all"
                onMouseEnter={() => setActiveSocialHover('See the Vibe • Instagram')}
                onMouseLeave={() => setActiveSocialHover('')}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={THEATRE_INFO.links.bookMyShow}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#c82333] hover:text-white transition-all font-display text-[10px] font-bold"
                onMouseEnter={() => setActiveSocialHover('Book on BookMyShow')}
                onMouseLeave={() => setActiveSocialHover('')}
              >
                BMS
              </a>

              <a
                href={THEATRE_INFO.links.district}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#2563eb] hover:text-white transition-all font-display text-[10px] font-bold"
                onMouseEnter={() => setActiveSocialHover('Book on District')}
                onMouseLeave={() => setActiveSocialHover('')}
              >
                DST
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Monumental Giant Typography & Copyright (Boch & Fernsh Footer Style) */}
      <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white/15 select-none">
          Areeso Theatre Inc.
        </h2>

        <div className="text-center md:text-right space-y-1 text-xs font-mono text-white/50">
          <p>© 2026 Areeso Theatre. All rights reserved.</p>
          <p className="text-[11px] text-white/30">Independent theatre company. Launching in India, headed for the world.</p>
        </div>

      </div>

    </footer>
  );
}
