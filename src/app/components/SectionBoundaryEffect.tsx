import React from 'react';

interface SectionBoundaryEffectProps {
  position: 'top' | 'bottom';
  themeColorRGB: string;
  themeColorHex: string;
  overlaySourceColorCss: string;
}

const SectionBoundaryEffect: React.FC<SectionBoundaryEffectProps> = ({
  position,
  themeColorRGB,
  themeColorHex,
  overlaySourceColorCss,
}) => {
  const heightClass = 'h-40';
  const radialGradient = `radial-gradient(rgba(${themeColorRGB}, 0.25) 1px, transparent 1px)`;
  const patternId = `neural-net-boundary-${position}-${themeColorHex.replace(
    '#',
    ''
  )}`;

  const overlayGradientClass =
    position === 'top'
      ? `bg-gradient-to-b from-${overlaySourceColorCss} to-transparent`
      : `bg-gradient-to-t from-${overlaySourceColorCss} to-transparent`;

  return (
    <div
      className={`absolute ${position}-0 left-0 right-0 ${heightClass} overflow-hidden ${overlayGradientClass} pointer-events-none z-0`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: radialGradient,
          backgroundSize: '30px 30px',
          opacity: 0.6,
        }}
      />

      <div className="absolute inset-0 opacity-40">
        {' '}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={patternId}
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="0.8" fill={themeColorHex} />{' '}
              <circle cx="0" cy="0" r="0.8" fill={themeColorHex} />
              <circle cx="0" cy="100" r="0.8" fill={themeColorHex} />
              <circle cx="100" cy="0" r="0.8" fill={themeColorHex} />
              <circle cx="100" cy="100" r="0.8" fill={themeColorHex} />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="0"
                stroke={themeColorHex}
                strokeWidth="0.15"
              />{' '}
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="0"
                stroke={themeColorHex}
                strokeWidth="0.15"
              />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="100"
                stroke={themeColorHex}
                strokeWidth="0.15"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke={themeColorHex}
                strokeWidth="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
};

export default SectionBoundaryEffect;
