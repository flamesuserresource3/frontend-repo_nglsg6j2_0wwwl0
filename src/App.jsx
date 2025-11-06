import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import MediaAndSpecs from './components/MediaAndSpecs';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black antialiased">
      {/* Hero with Spline cover and CTA */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Gallery Carousel */}
      <Gallery />

      {/* Video + Tech Specs + Final CTA */}
      <MediaAndSpecs />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-xs text-white/50">
        <p>Huion Inspiroy 2 Small Digital Graphic Tablet — Launch Microsite</p>
      </footer>
    </div>
  );
}

export default App;
