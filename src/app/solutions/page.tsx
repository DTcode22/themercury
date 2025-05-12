// src/app/solutions/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | theMERCURY.ai',
  description: 'AI-Powered Solutions - Under Construction.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
        Solutions
      </h1>
      <p className="text-2xl text-white/80 mb-2">
        Tailored AI-Powered Solutions
      </p>
      <div className="mt-8 p-8 bg-black/50 backdrop-blur-md border border-blue-700/30 rounded-xl shadow-2xl max-w-lg">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">
          🚧 Under Construction 🚧
        </h2>
        <p className="text-lg text-white/70">
          Our comprehensive solutions page is currently under development. We
          are crafting detailed information about how our AI can transform your
          operations.
        </p>
        <p className="text-lg text-white/70 mt-4">
          Stay tuned for exciting updates!
        </p>
      </div>
    </div>
  );
}
