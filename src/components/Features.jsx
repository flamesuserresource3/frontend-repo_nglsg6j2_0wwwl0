import React from 'react';

const features = [
  {
    title: '8192 Pressure Levels',
    desc: 'Ultra-precise pen sensitivity for natural strokes and shading.'
  },
  {
    title: 'Wireless Bluetooth Connection',
    desc: 'Seamless cable-free workflow with low-latency performance.'
  },
  {
    title: 'Compact Lightweight Design',
    desc: 'A portable footprint that fits any setup or travel bag.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Crafted for Creative Flow
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A minimal design with serious power under the hood.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative z-10 text-lg font-medium">{f.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
