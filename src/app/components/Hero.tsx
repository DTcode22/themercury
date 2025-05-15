'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundSize: 640,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'repeat',
          opacity: 0.5,
          filter: 'url(#grid-warp)',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-black/60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Transform Your Operations with AI-Powered Video Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Custom tailored solutions. Real-time insights. Enhanced safety and
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="px-8 py-3 rounded-full bg-emerald-500/10 backdrop-blur-md text-emerald-200 font-medium border border-emerald-400/20 transition-all hover:bg-gradient-to-r hover:from-emerald-950 hover:to-green-900 hover:text-white hover:shadow-sm hover:shadow-emerald-500/30 flex items-center gap-2 group"
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
