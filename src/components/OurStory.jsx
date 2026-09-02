import React from 'react';
import { Feather, Flame, Sparkles, ArrowRight, Award, Compass } from 'lucide-react';
import { THEATRE_INFO, PILLARS } from '../data/theatreData';

export default function OurStory({ onOpenAboutModal, onOpenInvite, setCursorText }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'feather':
        return <Feather className="w-5 h-5 text-[#e60064]" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-[#ea580c]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#fbbf24]" />;
      default:
        return <Award className="w-5 h-5 text-[#e60064]" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e60064]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
              Origin & DNA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-mono uppercase tracking-widest text-[#777777] mb-2">
                Our Story
              </p>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight leading-[1.05]">
                Five actors, <br />
                <span className="text-[#e60064]">one borrowed</span> spotlight.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider transition-all group shadow-sm"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Origin Story Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e60064]" />
              The Rehearsal Room
            </h3>
            <p className="text-[#555555] font-normal text-base sm:text-lg leading-relaxed">
              {THEATRE_INFO.storyParagraph1}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-gray-200 lg:pl-10">
            <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#e60064]" />
              From India to the World
            </h3>
            <p className="text-[#555555] font-normal text-base sm:text-lg leading-relaxed">
              {THEATRE_INFO.storyParagraph2}
            </p>
          </div>
        </div>

        {/* 3 Signature Pillars */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tight">
              Our Core Pillars
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-[#e60064] font-bold">
              What We Stand For
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="relative rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-900 p-8 space-y-6 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#e60064] px-2.5 py-1 rounded bg-pink-50 border border-pink-200">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(pillar.icon)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777] block font-semibold">
                      {pillar.badge}
                    </span>
                    <h4 className="font-display font-black text-2xl text-[#111111] tracking-tight group-hover:text-[#e60064] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#555555] font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#777777] group-hover:text-[#111111] transition-colors">
                  <span>Areeso Ethos</span>
                  <span className="text-[#e60064] font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
