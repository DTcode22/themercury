// src/app/vms/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VMS | theMERCURY.ai',
  description: 'Video Management System - Under Construction.',
};

export default function VMSPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400">
        VMS
      </h1>
      <p className="text-2xl text-white/80 mb-2">Video Management System</p>
      <div className="mt-8 p-8 bg-black/50 backdrop-blur-md border border-emerald-700/30 rounded-xl shadow-2xl max-w-lg">
        <h2 className="text-3xl font-semibold text-emerald-400 mb-4">
          🚧 Under Construction 🚧
        </h2>
        <p className="text-lg text-white/70">
          Our advanced Video Management System page is currently being
          developed. We&apos;re working hard to bring you a cutting-edge
          solution.
        </p>
        <p className="text-lg text-white/70 mt-4">
          Please check back soon for updates!
        </p>
      </div>
    </div>
  );
}
