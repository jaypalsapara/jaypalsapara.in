import { useEffect, useRef } from 'react';

type SVGProps = {
  src: string;
  className?: string;
};

const SVG = ({ src, className }: SVGProps) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const svg = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    const loadSVG = async () => {
      const res = await fetch(src);

      const svgText = await res.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      svg.current = svgDoc.documentElement as unknown as SVGSVGElement;
      if (className && svg.current) svg.current.setAttribute('class', className);

      if (!svgRef.current) return;
      svgRef.current.replaceWith(svg.current);
    };
    loadSVG();
    // return () => svg.current?.remove();
  }, [src, className]);
  return <div ref={svgRef}></div>;
};

export default SVG;
