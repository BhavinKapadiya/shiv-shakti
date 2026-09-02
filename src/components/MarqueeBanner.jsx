import React from 'react';

export default function MarqueeBanner({ 
  items = [], 
  separator = "•", 
  reverse = false, 
  speed = "normal", 
  className = "",
  textColor = "text-white/80",
  outline = false
}) {
  const speedClass = speed === "fast" ? "animate-marquee-fast" : reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3.5 select-none ${className}`}>
      <div className={`flex w-max ${speedClass}`}>
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center gap-6 px-4">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span 
                  className={`font-display font-extrabold uppercase tracking-wider text-sm sm:text-base md:text-lg transition-all ${
                    outline ? 'text-stroke-white hover:text-white' : textColor
                  }`}
                >
                  {item}
                </span>
                <span className="text-theatre-crimson/80 text-xs font-bold">{separator}</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
