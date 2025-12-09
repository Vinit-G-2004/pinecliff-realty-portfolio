'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Slider({ images = [], title }){
  const [i, setI] = useState(0);
  const total = images.length || 1;
  const timer = useRef(null);

  useEffect(() => {
    if (images.length < 2) return;
    timer.current = setInterval(() => setI(x => (x + 1) % total), 4000);
    return () => clearInterval(timer.current);
  }, [total, images.length]);

  if (!images.length) return null;

  return (
    <div className="card hover-raise">
      {title && <div className="kicker mb-2">{title}</div>}
      {/* Uniform slider height across all projects */}
      <div className="relative overflow-hidden rounded-xl border h-64 md:h-80 lg:h-96">
        <div className="flex h-full transition-transform duration-500" style={{ transform:`translateX(-${i*100}%)` }}>
          {images.map((src, idx) => (
            <Image key={idx} src={src} alt={(title || "Slide")+ " " + (idx+1)} width={1600} height={900}
              className="w-full h-full object-cover flex-none" />
          ))}
        </div>
        {/* dots */}
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`w-2.5 h-2.5 rounded-full border ${idx===i ? 'bg-gold' : 'bg-white/70'} border-black/20`}
/>
          ))}
        </div>
        {/* arrows */}
        {images.length > 1 && (
          <>
            <button aria-label="Prev" onClick={() => setI((i-1+total)%total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-white/80 rounded-md">‹</button>
            <button aria-label="Next" onClick={() => setI((i+1)%total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-white/80 rounded-md">›</button>
          </>
        )}
      </div>
    </div>
  );
}
