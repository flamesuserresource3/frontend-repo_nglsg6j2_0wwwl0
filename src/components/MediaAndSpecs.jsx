import React from 'react';

export default function MediaAndSpecs() {
  return (
    <section id="media" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Video */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/5K5ZqzLxM2A?rel=0&modestbranding=1&playsinline=1"
                  title="Huion Inspiroy 2 Launch"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <button
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 p-5 backdrop-blur-md"
                aria-hidden
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-white/70">See the Inspiroy 2 in Action.</p>
          </div>

          {/* Tech Specs */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Tech Specs</h3>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/[0.03]">
                    <th className="w-1/3 p-4 font-medium text-white/80">Active Area</th>
                    <td className="p-4 text-white/70">160 x 100 mm</td>
                  </tr>
                  <tr>
                    <th className="w-1/3 p-4 font-medium text-white/80">Resolution</th>
                    <td className="p-4 text-white/70">5080 LPI</td>
                  </tr>
                  <tr className="bg-white/[0.03]">
                    <th className="w-1/3 p-4 font-medium text-white/80">Connectivity</th>
                    <td className="p-4 text-white/70">USB-C, Bluetooth</td>
                  </tr>
                  <tr>
                    <th className="w-1/3 p-4 font-medium text-white/80">OS Support</th>
                    <td className="p-4 text-white/70">Windows, macOS, Android</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Banner */}
            <div id="buy" className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400" />
              <div className="relative z-10 flex flex-col items-start gap-4 p-6 text-black drop-shadow-md sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold">Start Your Creative Journey</p>
                  <p className="text-sm/6 text-black/70">Premium performance in a compact form factor.</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
