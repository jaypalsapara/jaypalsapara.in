import '@/styles/cube.css';
import type { CSSVariables } from '@/types/global';
import type React from 'react';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
type VariantType = 'fat' | 'thin' | 'default';
interface CubeProps {
  variant?: VariantType;
  name: string;
  icon: string;
  style?: React.CSSProperties;
  className?: string;
}

const VariantStyle: Record<VariantType, CSSVariables> = {
  fat: {
    '--_depth': 2.3,
    '--_inner-depth': 1.8,
    '--_inner-inset': 0,
    '--cube-base': '1rem',
  },
  thin: {
    '--_depth': 0.6,
    '--_inner-depth': 0,
    '--_inner-inset': -0.3,
    '--_inner-width': 2.3,
    '--_inner-height': 2.3,
    '--cube-base': '1rem',
  },
  default: {
    '--_depth': 1.2,
    '--_inner-depth': 1.05,
    '--_inner-inset': 0.25,
    '--_inner-width': 1.8,
    '--_inner-height': 1.8,
    '--cube-base': '1rem',
  },
};

const Cube = ({ name, icon, style, variant = 'default', className }: CubeProps) => {
  if (variant && variant.trim() != '' && VariantStyle[variant]) {
    style = { ...VariantStyle[variant], ...style };
  }
  return (
    <div className={twMerge('cube-container', className)} data-variant={variant} style={style} title={name}>
      <OuterCube>
        <InnerCube variant={variant} name={name} icon={icon} />
      </OuterCube>
    </div>
  );
};

export default Cube;

const OuterCube = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="cube"
      style={
        {
          '--cube-width': 2.3,
          '--cube-height': 2.3,
          '--cube-depth': 'var(--_depth,1.2)',
        } as CSSVariables
      }
    >
      <div className="face bg-black shadow"></div>
      <div className="cube-wrapper transition-transform duration-300 group-hover:-translate-y-1">
        <div className="face outer-face right"></div>
        <div className="face outer-face bottom"></div>
        <div className="face outer-face back"></div>
        {children}
        <div className="face outer-face top"></div>
        <div className="face outer-face left"></div>
      </div>
    </div>
  );
};

const InnerCube = ({ variant, icon, name }: { variant: VariantType; icon: string; name: string }) => {
  return (
    <div
      className={`face cube cube-flat-front ${variant?.trim() != '' ? `cube-${variant}` : ''}`}
      style={
        {
          '--cube-inset': 'var(--_inner-inset,0.25)',
          '--cube-width': 'var(--_inner-width,1.8)',
          '--cube-height': 'var(--_inner-height,1.8)',
          '--cube-depth': 'var(--_inner-depth,1.05)',
        } as CSSVariables
      }
    >
      <div className="face inner-face right"></div>
      <div className="face inner-face bottom"></div>
      <div className="face inner-face back"></div>
      <div className={`face inner-face front flex items-center justify-center`}>
        <img src={icon} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="face inner-face top"></div>
      <div className="face inner-face left"></div>
    </div>
  );
};
