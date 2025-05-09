'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-20">
      {/* Animated Background with Grid Pattern */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'repeat',
          opacity: 0.8,
        }}
      ></div>

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-black/80"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            The future of security and efficiency, realized today
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            See More, Secure Better
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 group"
            >
              Explore our Solutions
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 transition-all hover:bg-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
