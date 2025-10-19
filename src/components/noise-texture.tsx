const NoiseTexture = () => {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[9999999999999999] h-screen mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="noise-filter">
          <feTurbulence type="turbulence" baseFrequency="1" numOctaves="1" stitchTiles="stitch" result="noise"></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 1 0"
            result="coloredNoise"
          ></feColorMatrix>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
    </svg>
  );
};

export default NoiseTexture;
