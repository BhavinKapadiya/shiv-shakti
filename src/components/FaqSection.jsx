import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQS } from '../data/theatreData';

export default function FaqSection({ onOpenInvite, setCursorText }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Heading & Contact Invite Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-50 border border-pink-200">
              <HelpCircle className="w-3.5 h-3.5 text-[#e60064]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e60064]">
                Questions & Answers
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#111111] tracking-tight leading-[1.1]">
              some clarity <br />
              <span className="text-[#e60064]">before the</span> <br />
              drama.
            </h2>

            <p className="text-sm text-[#555555] font-normal leading-relaxed">
              Everything you need to know about showtimes, booking platforms, venue access, and organizing school or festival shows.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenInvite}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-[#111111] font-display text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Have a unique inquiry?</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion Items (Boch & Fernsh FAQ Accordion Style) */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 group hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-display font-bold text-lg text-[#111111] group-hover:text-[#e60064] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#111111] text-white border-black' : 'text-gray-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100 animate-fadeIn">
                      <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
