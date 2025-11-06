import React, { useEffect, useRef, useState } from 'react';

const imgs = [
  // Royalty-free lifestyle placeholders
  'https://images.unsplash.com/photo-1526481280698-8fcc13fd95b5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922533-5ce80220cb1b?q=80&w=1600&auto=format&fit=crop'
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="gallery" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          A Glimpse into the Creative Life
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          See the Inspiroy 2 Small in real workflows.
        </p>

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[16/9] w-full">
              {imgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Huion Inspiroy lifestyle"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full transition ${i === index ? 'bg-rose-500' : 'bg-white/20 hover:bg-white/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
