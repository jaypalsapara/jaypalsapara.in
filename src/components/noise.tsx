export default function Noise() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-99 overflow-hidden mix-blend-overlay"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="_R_46_-noise-filter">
          <feTurbulence type="turbulence" baseFrequency="3" numOctaves="1" stitchTiles="stitch" result="noise"></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0.8 0"
            result="coloredNoise"
          ></feColorMatrix>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#_R_46_-noise-filter)"></rect>
    </svg>
  );
}
