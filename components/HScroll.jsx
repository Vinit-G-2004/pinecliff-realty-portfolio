'use client';
import { useRef } from "react";

export default function HScroll({ images = [] }){
  const ref = useRef(null);
  const scrollBy = (px) => ref.current && ref.current.scrollBy({ left: px, behavior: 'smooth' });

  if (!images.length) return null;

  return (
    <div className="card hover-raise">
      <div className="relative">
        <div ref={ref} className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((src, i) => (
            <img key={i} src={src} alt={"Marketing "+(i+1)}
                 className="h-44 md:h-56 lg:h-64 w-auto rounded-xl border snap-start flex-none" />
          ))}
        </div>
        <button aria-label="Prev" onClick={()=>scrollBy(-300)} className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-white/80 rounded-md">‹</button>
        <button aria-label="Next" onClick={()=>scrollBy(300)} className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-white/80 rounded-md">›</button>
      </div>
    </div>
  );
}
