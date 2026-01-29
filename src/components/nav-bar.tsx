import AppearanceToggle from '@/components/appearance-toggle';
import { EMAIL } from '@/data/defines';
import FeaturedProducts from '@/data/featured-product.json';
import SocialLinks from '@/data/social-links.json';
import { useLoaderBar } from '@/hooks/use-loader-bar';
import type { CSSVariables } from '@/types/global';
import { isFuture } from 'date-fns';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { type ToggleEvent } from 'react';
import { NavLink, type NavLinkRenderProps } from 'react-router';
import Badge from './badge';
import Button from './button';
import Cube from './cube';
import Popover from './popover';
import PrefetchNavLink from './prefetch-navlink';

const handleLinkClassName = ({ isActive }: NavLinkRenderProps) => [isActive ? 'text-foreground' : null, 'hover:text-foreground'].join(' ');
const NavBar = () => {
  const { start } = useLoaderBar();

  return (
    <>
      <nav className="sticky top-0 z-9999999 col-span-12 flex h-16 items-center border-b bg-background">
        <div className="px-4 lg:px-8 mx-auto flex h-full w-full max-w-[90rem] items-center">
          <NavLink to={'/'}>
            <p className="text-xl font-bold text-accent">
              JP <span>SAPARA</span>
            </p>
          </NavLink>
          <ul className="mr-8 ml-auto hidden items-center gap-6 text-muted-foreground *:font-medium lg:flex">
            <li>
              <NavLink to={'/'} onClick={() => start()} className={handleLinkClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <PrefetchNavLink to={'/about'} onClick={() => start()} className={handleLinkClassName}>
                About
              </PrefetchNavLink>
            </li>
            <li>
              <PrefetchNavLink to={'/works'} onClick={() => start()} className={handleLinkClassName}>
                Works
              </PrefetchNavLink>
            </li>
            <li>
              <button
                id="product-popover-toggle"
                popoverTarget="product-popover"
                popoverTargetAction="toggle"
                className="flex cursor-pointer items-center gap-1.5 hover:text-foreground"
              >
                Products <ChevronDown className="stroke-2 text-accent transition-transform ease-in-out" />
              </button>
            </li>
          </ul>
          <a href={'mailto:' + EMAIL} target="_blank" className="hidden lg:block">
            <Button className="font-medium" variant="outline">
              Contact me
            </Button>
          </a>
          <AppearanceToggle className="ms-5.5 hidden size-7 place-content-center lg:grid" />
          <button
            id="mobile-nav-toggle"
            className="group relative ms-auto size-10 *:absolute *:w-[calc(100%-1rem)] *:-translate-1/2 *:border *:border-muted-foreground lg:hidden"
            popoverTarget="mobile-nav-popover"
            popoverTargetAction="toggle"
            aria-label="Nav menu toggle"
          >
            <span className="top-[calc(50%+0.3rem)] transition-transform ease-in-out group-open:top-1/2 group-open:rotate-45"></span>
            <span className="top-[calc(50%+0.3rem*-1)] transition-transform ease-in-out group-open:top-1/2 group-open:-rotate-45"></span>
          </button>
        </div>
      </nav>

      <ProductPopover />
      <MobileNavPopover />
      {/* Backdrop of navbar popovers */}
      <div
        className="pointer-events-none fixed inset-0 z-50 bg-linear-180 from-background to-border/75 opacity-0 transition-opacity ease-in-out peer-open:pointer-events-auto peer-open:opacity-100 dark:bg-black/40 dark:to-background/85"
        id="navbar-backdrop"
      />
    </>
  );
};

export default NavBar;

/**
 * Mobile navbar
 */
const MobileNavPopover = () => {
  const { start } = useLoaderBar();
  const handlePopoverToggle = (e: ToggleEvent) => {
    const ToggleButton = document.querySelector(`#mobile-nav-toggle`);
    const isOpen = e.newState === 'open';
    ToggleButton?.toggleAttribute('open', isOpen);
  };
  return (
    <Popover
      id="mobile-nav-popover"
      handlePopoverToggle={handlePopoverToggle}
      className="-translate-y-4 border-t-0 opacity-0 transition-all transition-discrete ease-in-out open:translate-y-0 open:opacity-100 max-md:border-x-0 starting:open:-translate-y-4 starting:open:opacity-0"
    >
      <div className="flex">
        <AppearanceToggle className="ms-auto grid size-7 place-content-center" />
      </div>
      <ul className="mt-8 flex flex-col gap-6 text-muted-foreground *:font-medium *:not-last:border-b *:*:hover:text-foreground">
        <li>
          <NavLink to={'/'} onClick={() => start()} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              Home
              <ArrowUpRight />
            </div>
          </NavLink>
        </li>
        <li>
          <PrefetchNavLink to={'/about'} onClick={() => start()} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              About
              <ArrowUpRight />
            </div>
          </PrefetchNavLink>
        </li>
        <li>
          <PrefetchNavLink to={'/works'} onClick={() => start()} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              Work
              <ArrowUpRight />
            </div>
          </PrefetchNavLink>
        </li>
        <li>
          <button popoverTarget="product-popover" popoverTargetAction="toggle" className="flex w-full items-center justify-between pb-2 text-3xl">
            Products
          </button>
        </li>
        {SocialLinks.map((link) => (
          <li className="border-dashed" key={`nav-social-${link.name}`}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-between pb-2 font-mono">
                {link.name}
                <ArrowUpRight />
              </div>
            </a>
          </li>
        ))}
        <li>
          <a href={'mailto:' + EMAIL} target="_blank">
            <Button className="w-full font-medium">Contact</Button>
          </a>
        </li>
      </ul>
    </Popover>
  );
};

/**
 * Product popover
 */
const ProductPopover = () => {
  const handlePopoverToggle = (e: ToggleEvent) => {
    const ToggleButton = document.querySelector(`#product-popover-toggle`);
    const SVG = ToggleButton?.querySelector(`svg`);
    const isOpen = e.newState === 'open';
    SVG?.classList.toggle('rotate-180', isOpen);
  };
  return (
    <Popover
      id="product-popover"
      className="peer max-h-max -translate-y-4 border-t-0 opacity-0 transition-all transition-discrete ease-in-out open:translate-y-0 open:opacity-100 max-md:border-x-0 starting:open:-translate-y-4 starting:open:opacity-0"
      handlePopoverToggle={handlePopoverToggle}
    >
      <div className="flex justify-between mt-4">
        <p className="font-medium">Featured products</p>
        <button popoverTarget="product-popover" popoverTargetAction="hide" className="text-muted-foreground">
          Close
        </button>
      </div>
      <div className="-mx-4 mt-6 grid lg:grid-cols-4">
        {FeaturedProducts.map((product) => (
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="contents" key={`featured-product-${product.name}`}>
            <div className="group flex flex-col rounded-sm p-4 hover:bg-muted/30 dark:hover:bg-muted/40">
              <div className="col-span-4 flex gap-5 lg:flex-col lg:gap-y-2 xl:flex-row">
                <Cube
                  name={product.name}
                  icon={product.logo}
                  variant="fat"
                  style={
                    {
                      '--cube-color': `${product.color}`,
                      '--cube-base': '0.9rem',
                    } as CSSVariables
                  }
                  className="ms-7 mt-8.5"
                />
                <div className="flex flex-col">
                  <div className="mt-2 flex flex-wrap items-center gap-1">
                    <p className="line-clamp-1 font-medium">{product.name}</p>
                    {isFuture(product.new_until) && <Badge children="New" />}
                  </div>
                  <small className="mt-1 line-clamp-2 text-pretty text-muted-foreground">{product.subtitle}</small>
                </div>
              </div>
              <picture className="mt-4 hidden overflow-hidden rounded-sm border border-border/60 lg:block">
                <img src={product.banner} alt="" className="aspect-4/5 w-full" />
              </picture>
            </div>
          </a>
        ))}
      </div>
    </Popover>
  );
};
