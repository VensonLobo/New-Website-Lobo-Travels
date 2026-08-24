import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Palette from the uploaded logos:
  // All-White Logo.png: All pure white (#FFFFFF)
  // Untitled design (10).png: Navy swooshes & plane (#162343), Black typography with Navy drop-edge
  const swooshColor = isLight ? '#FFFFFF' : '#162343';
  const planeColor = isLight ? '#FFFFFF' : '#162343';
  const loboMainColor = isLight ? '#FFFFFF' : '#000000';
  const loboShadowColor = isLight ? '#FFFFFF' : '#2A3A5E';
  const travelsColor = isLight ? '#FFFFFF' : '#000000';
  const lineColor = isLight ? '#FFFFFF' : '#000000';

  const sizeClasses = {
    sm: 'h-9',
    md: 'h-13',
    lg: 'h-18',
    xl: 'h-28',
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 400 240"
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upper swoosh trail launching from airplane towards top right */}
        <path
          d="M 218 63 C 248 62, 335 68, 380 98 C 392 107, 396 117, 375 130 C 370 120, 384 105, 330 84 C 285 68, 235 66, 218 68 Z"
          fill={swooshColor}
        />

        {/* Dynamic Contrail / speed jet behind airplane */}
        <polygon
          points="70,90 138,68 136,63"
          fill={swooshColor}
        />

        {/* Detailed Propeller Airplane Silhouette */}
        <g transform="translate(138, 36)">
          {/* Airplane fuselage & wings */}
          <path
            d="M 5 28 L 22 25 L 42 22 L 46 12 L 58 11 L 52 21 L 70 19 L 75 14 L 78 14 L 76 22 L 78 24 L 78 30 L 76 30 L 74 25 L 50 26 L 44 38 L 38 38 L 42 26 L 16 27 L 7 35 L 2 34 Z"
            fill={planeColor}
          />
          {/* Propeller nose */}
          <ellipse cx="78" cy="27" rx="1.5" ry="6" fill={planeColor} />
          {/* Wheels / Landing gear */}
          <rect x="47" y="27" width="2" height="5" fill={planeColor} />
          <circle cx="48" cy="33" r="2.5" fill={planeColor} />
        </g>

        {/* Lower Sweeping Orbit Swoosh from bottom left */}
        <path
          d="M 30 110 C 12 130, 8 145, 12 158 C 22 178, 62 195, 130 205 C 190 214, 255 210, 310 196 C 240 206, 160 204, 90 190 C 40 178, 24 162, 28 142 C 32 125, 42 118, 48 112 Z"
          fill={swooshColor}
        />

        {/* LOBO - Stylized Typography with optional 3D Navy backing */}
        {!isLight && (
          <g transform="translate(44, 85)">
            {/* L Backing */}
            <path d="M 0 0 L 22 0 L 22 44 L 56 44 L 56 58 L 0 58 Z" fill={loboShadowColor} />
            {/* O Backing */}
            <path d="M 64 8 C 64 2, 70 0, 78 0 L 126 0 C 134 0, 140 2, 140 8 L 140 50 C 140 56, 134 58, 126 58 L 78 58 C 70 58, 64 56, 64 50 Z M 86 16 L 86 42 L 118 42 L 118 16 Z" fill={loboShadowColor} />
            {/* B Backing */}
            <path d="M 148 0 L 204 0 C 220 0, 228 5, 228 16 C 228 23, 222 27, 214 28 C 224 29, 230 35, 230 44 C 230 55, 220 58, 204 58 L 148 58 Z M 170 14 L 170 23 L 202 23 C 206 23, 208 21, 208 18.5 C 208 16, 206 14, 202 14 Z M 170 35 L 170 44 L 204 44 C 208 44, 210 42, 210 39.5 C 210 37, 208 35, 204 35 Z" fill={loboShadowColor} />
            {/* O Backing */}
            <path d="M 238 8 C 238 2, 244 0, 252 0 L 300 0 C 308 0, 314 2, 314 8 L 314 50 C 314 56, 308 58, 300 58 L 252 58 C 244 58, 238 56, 238 50 Z M 260 16 L 260 42 L 292 42 L 292 16 Z" fill={loboShadowColor} />
          </g>
        )}

        <g transform="translate(44, 88)">
          {/* L */}
          <path
            d="M 0 0 L 22 0 L 22 44 L 56 44 L 56 58 L 0 58 Z"
            fill={loboMainColor}
          />
          {/* O */}
          <path
            d="M 64 8 C 64 2, 70 0, 78 0 L 126 0 C 134 0, 140 2, 140 8 L 140 50 C 140 56, 134 58, 126 58 L 78 58 C 70 58, 64 56, 64 50 Z M 86 16 L 86 42 L 118 42 L 118 16 Z"
            fill={loboMainColor}
          />
          {/* B */}
          <path
            d="M 148 0 L 204 0 C 220 0, 228 5, 228 16 C 228 23, 222 27, 214 28 C 224 29, 230 35, 230 44 C 230 55, 220 58, 204 58 L 148 58 Z M 170 14 L 170 23 L 202 23 C 206 23, 208 21, 208 18.5 C 208 16, 206 14, 202 14 Z M 170 35 L 170 44 L 204 44 C 208 44, 210 42, 210 39.5 C 210 37, 208 35, 204 35 Z"
            fill={loboMainColor}
          />
          {/* O */}
          <path
            d="M 238 8 C 238 2, 244 0, 252 0 L 300 0 C 308 0, 314 2, 314 8 L 314 50 C 314 56, 308 58, 300 58 L 252 58 C 244 58, 238 56, 238 50 Z M 260 16 L 260 42 L 292 42 L 292 16 Z"
            fill={loboMainColor}
          />
        </g>

        {/* TRAVELS - Wide Extended Sans Typography */}
        <text
          x="195"
          y="180"
          textAnchor="middle"
          fill={travelsColor}
          style={{
            fontFamily: "system-ui, -apple-system, 'Plus Jakarta Sans', 'Arial Black', sans-serif",
            fontWeight: 900,
            fontSize: '32px',
            letterSpacing: '0.28em',
          }}
        >
          TRAVELS
        </text>

        {/* Underline beneath TRAVELS */}
        <line
          x1="55"
          y1="192"
          x2="335"
          y2="192"
          stroke={lineColor}
          strokeWidth="3.5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};
