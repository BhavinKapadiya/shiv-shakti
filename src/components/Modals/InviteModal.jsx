import React, { useState } from 'react';
import { X, Send, MapPin, Building, Calendar, CheckCircle2, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATRE_INFO } from '../../data/theatreData';

export default function InviteModal({ isOpen, onClose, setCursorText }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    city: '',
    email: '',
    phone: '',
    showInterest: 'Shiv-Shakti (Debut Production)',
    datesProposed: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#e11d48']
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
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

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theatre-gold animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              City & Venue Inquiries
            </span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Invite Areeso to Your City
          </h3>
          <p className="text-sm text-white/70 font-light">
            Bring Shiv-Shakti or Season One repertoire to your theatre festival, university auditorium, or cultural space.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                  Your Name / Representative
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Mehta"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                  Organization / Festival / Venue
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Pune Cultural Guild"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                  Destination City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Delhi, Pune, Bengaluru"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@org.in"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98000 00000"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Production of Interest
              </label>
              <select
                value={formData.showInterest}
                onChange={(e) => setFormData({ ...formData, showInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
              >
                <option value="Shiv-Shakti (Debut Production)">Shiv-Shakti (Debut Production — Mumbai / Touring)</option>
                <option value="Andha Yug: Shadows of Twilight">Andha Yug: Shadows of Twilight (Classic Revival)</option>
                <option value="Chandni Raatein">Chandni Raatein (Original Play with Live Music)</option>
                <option value="Full Season One Package">Full Season One Festival Package</option>
                <option value="Theatre Workshop / Masterclass">Theatre Workshop / Actor Training Masterclass</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Estimated Dates / Additional Context
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share auditorium capacity, preferred months, or collaboration scope..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-theatre-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-theatre-crimson hover:bg-theatre-crimsonDark text-white font-display text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <span>Submit Tour & Venue Proposal</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="font-display font-bold text-xl text-white uppercase">
              Proposal Received!
            </h4>
            <p className="text-sm text-white/80 font-light max-w-md mx-auto">
              Thank you, {formData.name}. Our production manager will review technical riders and contact you at <span className="font-mono text-theatre-gold">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono font-bold uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        )}

        {/* Direct Contact Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs font-mono text-white/50">
          <span>Urgent venue bookings:</span>
          <a href={`tel:${THEATRE_INFO.contact.phone}`} className="text-emerald-400 font-semibold hover:underline">
            {THEATRE_INFO.contact.phoneDisplay}
          </a>
        </div>

      </div>
    </div>
  );
}
