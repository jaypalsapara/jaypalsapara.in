import Button from '@/components/button';
import Cube from '@/components/cube';
import useMeta from '@/hooks/use-meta';
import useScrollTop from '@/hooks/use-scroll-top';
import type { CSSVariables } from '@/types/global';
import { Lock, Mail } from 'lucide-react';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Ui = () => {
  useMeta({ title: 'UI' });
  useScrollTop();
  return (
    <div className="flex min-h-screen flex-col gap-24 p-4">
      <div>
        <h1 className="mt-6 font-medium">UI Design</h1>
        <p className="mt-8 max-w-[52ch] text-muted-foreground">
          This is the UI design system for my portfolio website, defining the visual language, components, and style guidelines to ensure a consistent and
          modern user experience.
        </p>
      </div>
      <ColorPalette />
      <TypographyComponents />
      <ButtonsComponents />
      <CubeComponents />
    </div>
  );
};

export default Ui;

/**
 * Typography
 */
const TypographyComponents = () => {
  return (
    <ComponentContainer title="Typography">
      <table>
        <tbody className="*:*:first:pe-5">
          <tr>
            <td>h1</td>
            <td>
              <h1>A wizard’s job is to vex chumps quickly in fog</h1>
            </td>
          </tr>
          <tr>
            <td>h2</td>
            <td>
              <h2>A wizard’s job is to vex chumps quickly in fog</h2>
            </td>
          </tr>
          <tr>
            <td>h3</td>
            <td>
              <h3>A wizard’s job is to vex chumps quickly in fog</h3>
            </td>
          </tr>
          <tr>
            <td>h4</td>
            <td>
              <h4>A wizard’s job is to vex chumps quickly in fog</h4>
            </td>
          </tr>
          <tr>
            <td>h5</td>
            <td>
              <h5>A wizard’s job is to vex chumps quickly in fog</h5>
            </td>
          </tr>
          <tr>
            <td>h6</td>
            <td>
              <h6>A wizard’s job is to vex chumps quickly in fog</h6>
            </td>
          </tr>
          <tr>
            <td>p</td>
            <td>
              <p>A wizard’s job is to vex chumps quickly in fog</p>
            </td>
          </tr>
          <tr>
            <td>small</td>
            <td>
              <small>A wizard’s job is to vex chumps quickly in fog</small>
            </td>
          </tr>
        </tbody>
      </table>
    </ComponentContainer>
  );
};

/**
 * Button components
 */
const ButtonsComponents = () => {
  return (
    <ComponentContainer title="Buttons">
      {/* Default size */}
      <p className="mt-4 text-sm">Default size with icons:</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        <Button>
          <Mail /> Get Started
        </Button>
        <Button variant="outline">
          <Mail /> Get Started
        </Button>
        <Button variant="ghost">
          <Mail /> Get Started
        </Button>
      </div>
      {/* Default size */}
      <p className="mt-4 text-sm">Default size:</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        <Button>Get Started</Button>
        <Button variant="outline">Get Started</Button>
        <Button variant="ghost">Get Started</Button>
      </div>

      {/* Small size */}
      <p className="mt-4 text-sm">Small size:</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        <Button size="small">Get Started</Button>
        <Button variant="outline" size="small">
          Get Started
        </Button>
        <Button variant="ghost" size="small">
          Get Started
        </Button>
      </div>

      {/* Tiny size */}
      <p className="mt-4 text-sm">Tiny size:</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        <Button size="tiny">Get Started</Button>
        <Button variant="outline" size="tiny">
          Get Started
        </Button>
        <Button variant="ghost" size="tiny">
          Get Started
        </Button>
      </div>
    </ComponentContainer>
  );
};

/**
 * Color pallet
 */
const ColorPalette = () => {
  return (
    <ComponentContainer title="Color Palette">
      <small>Basic</small>
      <div className="mb-2 flex flex-wrap gap-2 *:grid *:size-12 *:place-content-center *:rounded-xs *:border *:text-white">
        <div className="bg-background" title="Background"></div>
        <div className="bg-foreground" title="Foreground"></div>
      </div>
      <small>Gray shades</small>
      <div className="mb-2 flex flex-wrap gap-2 *:grid *:size-12 *:place-content-center *:rounded-xs *:border *:text-white">
        <div className="bg-border" title="Border"></div>
        <div className="bg-muted" title="Muted"></div>
        <div className="bg-muted-foreground" title="Muted Foreground"></div>
      </div>
      <small>Accent</small>
      <div className="flex flex-wrap gap-2 *:grid *:size-12 *:place-content-center *:rounded-xs *:border *:text-white">
        <div className="border bg-accent-50"></div>
        <div className="border bg-accent-100"></div>
        <div className="border bg-accent-200"></div>
        <div className="border bg-accent-300"></div>
        <div className="border bg-accent-400"></div>
        <div className="border bg-accent-500">
          <Lock className="not-dark:hidden" />
        </div>
        <div className="border bg-accent-600">
          <Lock className="dark:hidden" />
        </div>
        <div className="border bg-accent-700"></div>
        <div className="border bg-accent-800"></div>
        <div className="border bg-accent-900"></div>
        <div className="border bg-accent-950"></div>
      </div>
    </ComponentContainer>
  );
};

/**
 * Cube components
 */

const CubeComponents = () => {
  return (
    <ComponentContainer title="Cubes">
      <div className="flex gap-12 pt-1">
        <div className="flex flex-col gap-2 text-center">
          <small>Fat</small>
          <Cube
            name={'Vite'}
            icon={'vite-white.svg'}
            variant="fat"
            style={
              {
                '--cube-color': `#bf5bf1`,
              } as CSSVariables
            }
            className="group ms-9 mt-10"
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <small>Default</small>
          <Cube
            name={'Vite'}
            icon={'vite.svg'}
            style={
              {
                '--cube-color': `#bf5bf1`,
              } as CSSVariables
            }
            className="group ms-4.5 mt-9.5"
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <small>Thin</small>
          <Cube
            name={'Vite'}
            icon={'vite-white.svg'}
            variant="thin"
            style={
              {
                '--cube-color': `#bf5bf1`,
              } as CSSVariables
            }
            className="group ms-4.5 mt-9"
          />
        </div>
      </div>
    </ComponentContainer>
  );
};

/**
 * Component container
 */
type ComponentContainerProps = {
  title: string;
  children: ReactNode;
  className?: string;
};
const ComponentContainer = ({ title, children, className }: ComponentContainerProps) => {
  return (
    <div className={twMerge(className)}>
      <label className="font-medium">{title}</label>
      <hr className="my-4" />
      {children}
    </div>
  );
};
