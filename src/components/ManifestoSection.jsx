import React from 'react';
import { THEATRE_INFO, REVIEWS, PILLARS } from '../data/theatreData';

export default function ManifestoSection({ setCursorText }) {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Headline matching Screenshot 2 */}
        <div className="space-y-6 max-w-5xl">
          
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[72px] tracking-tight leading-[1.12] text-[#111111]">
            <span className="block">we create work that excites</span>
            <span className="block items-center flex-wrap gap-2">
              the{' '}
              <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-2xl bg-pink-100 border border-pink-300 transform -rotate-3 text-2xl sm:text-4xl md:text-5xl">
                🧠
              </span>{' '}
              mind, moves the{' '}
              <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-2xl bg-red-100 border border-red-300 transform rotate-3 text-2xl sm:text-4xl md:text-5xl">
                ❤️
              </span>{' '}
              heart
            </span>
            <span className="block items-center flex-wrap gap-2">
              and stirs the{' '}
              <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-2xl bg-orange-100 border border-orange-300 transform -rotate-2 text-2xl sm:text-4xl md:text-5xl">
                🫀
              </span>{' '}
              gut.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed max-w-3xl pt-2">
            “Theatre is the art of looking at ourselves, together.” We believe great theatre should spark curiosity, evoke emotion and leave a lasting impression.
          </p>

        </div>

        {/* 3 Awards / Critical Acclaim Columns matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          
          {/* Award 1 */}
          <div className="flex items-start gap-4 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 border border-amber-300 flex items-center justify-center font-display font-black text-2xl sm:text-3xl text-amber-800 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              🏆
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#111111] uppercase tracking-tight">
                The Hindu - Theatre Review
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                “I walked in a stranger and walked out with a lump in my throat. Shiv-Shakti is staging of the highest order.”
              </p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="flex items-start gap-4 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-emerald-100 via-green-50 to-teal-200 border border-emerald-300 flex items-center justify-center font-display font-black text-2xl sm:text-3xl text-emerald-800 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              🎭
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#111111] uppercase tracking-tight">
                Audience Choice - Delhi Tour
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                “Chandni Raatein made my mother cry and my daughter dance. Three generations, one stage.”
              </p>
            </div>
          </div>

          {/* Award 3 */}
          <div className="flex items-start gap-4 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200 border border-blue-300 flex items-center justify-center font-display font-black text-2xl sm:text-3xl text-blue-800 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              ⭐
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#111111] uppercase tracking-tight">
                Mumbai Theatre Guide 2026
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                “Proof that India's most exciting stories are being told live, under a spotlight, not on a screen.”
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
