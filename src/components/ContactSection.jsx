import React, { useState } from 'react';
import { Send, CheckCircle2, Ticket, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATRE_INFO } from '../data/theatreData';

export default function ContactSection({ onOpenBooking, onOpenInvite, setCursorText }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#e60064', '#111111', '#fbbf24']
      });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header Tag */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e60064]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
            Connect & Collaborate
          </span>
        </div>

        {/* 3 Columns matching Screenshot 4 with Vertical Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-b border-gray-200">
          
          {/* Column 1: Book Tickets / Shows */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div className="space-y-3">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111] tracking-tight">
                book tickets
              </h3>
              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                Shiv-Shakti debut production live on Mumbai stage. Dates announcing soon.
              </p>
            </div>

            {/* Pop-Art Vintage Illustration with Phone and Doodle Accents (Screenshot 4 Col 1) */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-amber-50 border border-amber-200 p-6 flex items-center justify-center">
              
              {/* Yellow & Pink geometric backgrounds */}
              <div className="w-44 h-44 rounded-2xl bg-[#fbbf24] -rotate-12 absolute -bottom-4 -left-4" />
              <div className="w-36 h-36 rounded-2xl bg-[#e60064] rotate-6 absolute -top-4 -right-4" />
              
              {/* Retro Person Cutout */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Book Tickets"
                className="w-36 h-36 object-cover rounded-full grayscale contrast-125 z-10 border-4 border-white shadow-xl"
              />

              {/* Doodle Cheek Blush & Letter H */}
              <div className="absolute top-4 left-4 font-black text-2xl text-[#111111] z-20">
                🎭
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-lg bg-[#222222] hover:bg-black text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Ticket className="w-4 h-4 text-[#e60064]" />
                <span>Book on Our Platform</span>
              </button>
              <div className="flex items-center justify-between text-xs font-mono text-[#666666] pt-1">
                <a href={THEATRE_INFO.links.bookMyShow} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60064] underline">BookMyShow ↗</a>
                <a href={THEATRE_INFO.links.district} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] underline">District ↗</a>
              </div>
            </div>
          </div>

          {/* Column 2: Partner with Us / Invite Us */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div className="space-y-3">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111] tracking-tight">
                partner with us
              </h3>
              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                Want us in your city? Venue bookings, school shows & festival tours.
              </p>
            </div>

            {/* Pop-Art Vintage Illustration with Handshake & Mustache (Screenshot 4 Col 2) */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-sky-50 border border-sky-200 p-6 flex items-center justify-center">
              
              {/* Sky Blue & Coral geometric shapes */}
              <div className="w-44 h-44 rounded-2xl bg-sky-400 rotate-12 absolute -top-4 -left-4" />
              <div className="w-36 h-36 rounded-2xl bg-[#ea580c] -rotate-6 absolute -bottom-4 -right-4" />

              {/* Handshake Circle */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-900 absolute top-4 left-4 z-20 flex items-center justify-center shadow-lg text-2xl">
                🤝
              </div>

              {/* Retro smiling man cutout */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Partner with us"
                className="w-36 h-36 object-cover rounded-full grayscale contrast-125 z-10 border-4 border-white shadow-xl"
              />
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenInvite}
                className="w-full py-3.5 rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Invite Us / Venues</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs font-mono text-[#777777] mt-3">
                productions@areesotheatre.com
              </p>
            </div>
          </div>

          {/* Column 3: Join Our Front-Row Letter */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div className="space-y-3">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111] tracking-tight">
                front-row letter
              </h3>
              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                Show announcements, early-bird tickets, backstage stories. No spam — promise.
              </p>
            </div>

            {/* Pop-Art Vintage Illustration with 8-bit Sunglasses & Crown (Screenshot 4 Col 3) */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-purple-50 border border-purple-200 p-6 flex items-center justify-center">
              
              {/* Royal Blue & Yellow shapes */}
              <div className="w-44 h-44 rounded-2xl bg-blue-600 -rotate-12 absolute -top-4 -right-4" />
              <div className="w-36 h-36 rounded-2xl bg-[#fbbf24] rotate-6 absolute -bottom-4 -left-4" />

              {/* Crown on top */}
              <div className="absolute top-2 right-8 z-20 text-3xl">
                👑
              </div>

              {/* Retro smiling woman cutout with sunglasses doodle */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
                  alt="Join the Front Row"
                  className="w-36 h-36 object-cover rounded-full grayscale contrast-125 border-4 border-white shadow-xl"
                />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-black px-2 py-0.5 text-white font-mono text-[9px] font-bold rounded">
                  ★ VIP PASS ★
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="pt-2">
              {!subscribed ? (
                <form onSubmit={handleNewsletter} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address..."
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 text-[#111111] placeholder-gray-400 text-xs focus:outline-none focus:border-gray-900"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-lg bg-[#e60064] hover:bg-[#d90368] text-white font-display text-xs font-bold uppercase shrink-0 transition-colors"
                    >
                      Join
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>You're in the front row! Priority access granted.</span>
                </div>
              )}
              <p className="text-center text-xs font-mono text-[#777777] mt-3">
                Call: +91 95525 50569
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
