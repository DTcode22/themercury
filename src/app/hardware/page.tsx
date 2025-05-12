// src/app/hardware/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware | theMERCURY.ai',
  description: 'Compatible Hardware - Under Construction.',
};

export default function HardwarePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
        Hardware
      </h1>
      <p className="text-2xl text-white/80 mb-2">
        Optimized & Compatible Hardware
      </p>
      <div className="mt-8 p-8 bg-black/50 backdrop-blur-md border border-purple-700/30 rounded-xl shadow-2xl max-w-lg">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">
          🚧 Under Construction 🚧
        </h2>
        <p className="text-lg text-white/70">
          Information about our recommended and compatible hardware solutions is
          being prepared. We aim to provide you with the best options for
          seamless integration.
        </p>
        <p className="text-lg text-white/70 mt-4">Please visit again soon!</p>
      </div>
    </div>
  );
}
