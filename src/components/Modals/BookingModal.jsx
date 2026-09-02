import React, { useState } from 'react';
import { X, Ticket, ExternalLink, Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NOW_SHOWING, THEATRE_INFO } from '../../data/theatreData';

export default function BookingModal({ isOpen, onClose, setCursorText }) {
  const [notifyPhone, setNotifyPhone] = useState('');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [cityPref, setCityPref] = useState('Mumbai');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!notifyEmail && !notifyPhone) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#e11d48', '#ffffff']
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-theatre-card border border-white/20 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-8 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-theatre-crimson hover:border-theatre-crimson transition-all"
          onMouseEnter={() => setCursorText('CLOSE')}
          onMouseLeave={() => setCursorText('')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-crimson animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              Areeso Box Office
            </span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Book Tickets — {NOW_SHOWING.title}
          </h3>
          <p className="text-sm text-white/70 font-light">
            Season One Debut Production • Mumbai Stage Run
          </p>
        </div>

        {/* Show Logistics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#08080a] border border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-white/80">
            <Calendar className="w-4 h-4 text-theatre-crimson" />
            <span>Dates Announcing Soon</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-4 h-4 text-theatre-gold" />
            <span>Mumbai Auditoriums</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Ticket className="w-4 h-4" />
            <span>Tickets on sale soon</span>
          </div>
        </div>

        {/* Official Direct Partner Booking Buttons */}
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
            Select Your Preferred Booking Platform:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* BookMyShow */}
            <a
              href={THEATRE_INFO.links.bookMyShow}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#c82333]/90 hover:bg-[#c82333] border border-red-500/40 text-white transition-all shadow-lg hover:scale-[1.02] group"
              onMouseEnter={() => setCursorText('BMS')}
              onMouseLeave={() => setCursorText('')}
            >
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase block">Authorized Partner</span>
                <span className="font-display font-black text-base uppercase">Book on BookMyShow</span>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* District */}
            <a
              href={THEATRE_INFO.links.district}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#2563eb]/90 hover:bg-[#2563eb] border border-blue-500/40 text-white transition-all shadow-lg hover:scale-[1.02] group"
              onMouseEnter={() => setCursorText('DISTRICT')}
              onMouseLeave={() => setCursorText('')}
            >
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase block">Curated Live Arts</span>
                <span className="font-display font-black text-base uppercase">Book on District</span>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Early-Bird VIP Pass Alert Box */}
        <div className="p-6 rounded-2xl bg-white/5 border border-theatre-gold/30 space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-theatre-gold" />
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-theatre-gold">
              Get Notified 48 Hours Before Tickets Open
            </h4>
          </div>

          <p className="text-xs text-white/70 font-light leading-relaxed">
            Shiv-Shakti seating is strictly limited. Enter your contact details to receive priority booking links and student/artist concession codes first.
          </p>

          {!submitted ? (
            <form onSubmit={handleNotifySubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-theatre-gold"
                />
                <input
                  type="tel"
                  value={notifyPhone}
                  onChange={(e) => setNotifyPhone(e.target.value)}
                  placeholder="WhatsApp / Phone number"
                  className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-theatre-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-theatre-gold hover:bg-theatre-goldLight text-black font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Send Me Priority Ticket Access
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Priority alert active! We will message you the moment dates are locked.</span>
            </div>
          )}
        </div>

        {/* Bottom Safety & Box Office Policy */}
        <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/10">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-theatre-gold" />
            100% Guaranteed Official Tickets
          </span>
          <a href={`mailto:${THEATRE_INFO.contact.email}`} className="hover:text-theatre-gold">
            Support: {THEATRE_INFO.contact.email}
          </a>
        </div>

      </div>
    </div>
  );
}
