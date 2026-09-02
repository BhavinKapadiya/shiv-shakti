import React from 'react';
import { Play, ArrowUpRight, Video } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { THEATRE_INFO } from '../data/theatreData';

export default function ArchiveSection({ setCursorText }) {
  return (
    <section className="py-20 px-6 sm:px-8 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-sm">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e60064]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e60064]">
                  From the Archive
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
                Missed a show? <br />
                <span className="text-[#e60064]">
                  Relive it.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] font-normal max-w-2xl leading-relaxed">
                Watch highlights and recordings of our past performances on our YouTube channel. Experience the behind-the-scenes energy, rehearsal vlogs, and musical scores.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={THEATRE_INFO.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-sm transition-all"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current" />
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-[#777777] font-semibold">
                  @theareesotheatre1881
                </span>
              </div>

            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-4">
              <a
                href={THEATRE_INFO.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden border border-gray-200 bg-black aspect-video group shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80"
                  alt="Areeso Theatre YouTube Channel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-red-500" />
                    Archival Highlights
                  </span>
                  <span className="text-[#fbbf24] font-semibold">Watch ↗</span>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
