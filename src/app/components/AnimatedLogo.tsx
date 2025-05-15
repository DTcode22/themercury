'use client';

import { useEffect, useState } from 'react';

const AnimatedLogo = ({ dotAiColor }: { dotAiColor: string }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const logoText = 'theMERCURY';
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    if (animationComplete) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= logoText.length) {
        setVisibleText(logoText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animationComplete]);

  return (
    <div className="flex items-center">
      <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
        <span className="font-light">the</span>
        <span
          className="font-black"
          style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '-0.05em' }}
        >
          {visibleText.substring(3)}
        </span>
        <span className={`font-light ${dotAiColor}`}>.ai</span>{' '}
      </h1>
    </div>
  );
};

export default AnimatedLogo;
