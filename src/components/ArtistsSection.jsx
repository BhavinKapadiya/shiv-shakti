import React from 'react';
import { ArrowRight, Drama, Music, Lightbulb, User } from 'lucide-react';
import { ARTISTS } from '../data/theatreData';

export default function ArtistsSection({ onSelectArtist, onOpenAllArtists, setCursorText }) {
  const getRoleIcon = (role) => {
    if (role.toLowerCase().includes('director') && !role.toLowerCase().includes('music')) {
      return <Drama className="w-3.5 h-3.5 text-[#e60064]" />;
    }
    if (role.toLowerCase().includes('actor')) {
      return <User className="w-3.5 h-3.5 text-[#2563eb]" />;
    }
    if (role.toLowerCase().includes('music')) {
      return <Music className="w-3.5 h-3.5 text-[#ea580c]" />;
    }
    return <Lightbulb className="w-3.5 h-3.5 text-[#fbbf24]" />;
  };

  return (
    <section id="artists" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e60064]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
                The Ensemble
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight leading-[1.05]">
              the company. <br />
              <span className="text-[#e60064]">cast & crew.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenAllArtists}
              className="px-6 py-3.5 rounded-lg border border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all group shadow-sm"
            >
              <span>Meet the Full Company</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Artist Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onSelectArtist(artist)}
              className="group relative rounded-2xl bg-white border border-gray-200 hover:border-gray-900 overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              {/* Photo Area */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Avatar Initials Badge */}
                <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center font-display font-black text-base text-[#111111] shadow-sm">
                  {artist.initials}
                </div>

                {/* Role pill */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase text-white flex items-center gap-1.5 shadow-sm">
                  {getRoleIcon(artist.role)}
                  <span>{artist.role}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-2 bg-white">
                <div>
                  <h3 className="font-display font-black text-2xl text-[#111111] tracking-tight group-hover:text-[#e60064] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#e60064] font-bold">
                    {artist.role}
                  </p>
                </div>

                <p className="text-xs text-[#666666] font-normal line-clamp-2">
                  {artist.bio}
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-[#777777] group-hover:text-[#111111] transition-colors">
                  <span>View Bio & Credits</span>
                  <span className="font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
