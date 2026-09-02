import React from 'react';
import { Star, Quote, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/theatreData';

export default function ReviewsSection({ setCursorText }) {
  return (
    <section className="py-28 px-6 sm:px-8 md:px-12 relative overflow-hidden bg-[#08080a]">
      
      {/* Subtle spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-theatre-crimson/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <MessageSquareHeart className="w-3.5 h-3.5 text-theatre-crimson" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-theatre-gold">
              Word of Mouth
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            What the audience <br />
            <span className="text-theatre-gold font-serifDisplay italic lowercase text-5xl sm:text-6xl md:text-7xl">
              says.
            </span>
          </h2>
          
          <p className="text-white/60 font-light text-sm sm:text-base">
            Honest reactions from the front row, theatre critics, and festival goers.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative rounded-2xl bg-theatre-card border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-theatre-gold/40 transition-all duration-300 group shadow-xl"
              onMouseEnter={() => setCursorText('REVIEW')}
              onMouseLeave={() => setCursorText('')}
            >
              {/* Top Star Rating & Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-theatre-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(review.rating)
                          ? 'fill-theatre-gold text-theatre-gold'
                          : review.rating % 1 !== 0 && i === Math.floor(review.rating)
                          ? 'fill-theatre-gold/50 text-theatre-gold'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-theatre-crimson">
                  {review.badge}
                </span>
              </div>

              {/* Quote text */}
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-theatre-gold/30 group-hover:text-theatre-gold transition-colors" />
                <p className="font-serifDisplay text-lg sm:text-xl text-white/90 italic leading-snug">
                  “{review.quote}”
                </p>
              </div>

              {/* Author / Source Footnote */}
              <div className="pt-4 border-t border-white/5 space-y-1">
                <p className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  — {review.source}
                </p>
                <p className="text-xs font-mono text-white/50">
                  {review.author} • {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
