import React, { useEffect, useState } from 'react';

export default function CustomCursor({ cursorText = '', cursorVariant = 'default' }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 hidden md:block">
      {/* Outer ring / label container */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-display font-semibold transition-all duration-150 ease-out ${
          cursorText
            ? 'w-24 h-24 bg-theatre-crimson/95 text-white text-xs tracking-widest shadow-2xl backdrop-blur-md scale-100'
            : cursorVariant === 'hover'
            ? 'w-14 h-14 bg-theatre-gold/20 border border-theatre-gold/80 scale-100'
            : 'w-8 h-8 border border-white/40 bg-white/5 scale-75'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {cursorText && (
          <span className="uppercase text-[11px] font-bold tracking-widest animate-pulse px-2 text-center drop-shadow-md">
            {cursorText}
          </span>
        )}
      </div>

      {/* Tiny center dot */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-theatre-gold transition-transform duration-75 pointer-events-none ${
          cursorText ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
