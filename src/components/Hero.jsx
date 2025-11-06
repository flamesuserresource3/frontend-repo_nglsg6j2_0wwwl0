import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          <span className="text-xs/5 text-white/80">Huion Inspiroy 2 Small Digital Graphic Tablet</span>
        </div>
        <h1 className="font-['Geist',Inter,ui-sans-serif] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Create Without Limits
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Compact. Powerful. Creative.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#buy"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Buy Now
          </a>
          <a
            href="#media"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
