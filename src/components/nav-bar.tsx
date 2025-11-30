import AppearanceToggle from '@/components/appearance-toggle';
import { EMAIL } from '@/data/defines';
import FeaturedProducts from '@/data/featured-product.json';
import SocialLinks from '@/data/social-links.json';
import type { CSSVariables } from '@/types/global';
import { isFuture } from 'date-fns';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import type { ToggleEvent } from 'react';
import { NavLink, type NavLinkRenderProps } from 'react-router';
import Badge from './badge';
import Button from './button';
import Cube from './cube';
import Popover from './popover';

const handleLinkClassName = ({ isActive }: NavLinkRenderProps) => [isActive ? 'text-foreground' : null, 'hover:text-foreground'].join(' ');
const NavBar = () => {
  return (
    <>
      <nav className="pad-x sticky top-0 z-9999999 col-span-12 flex h-16 items-center bg-background">
        <NavLink to={'/'}>
          <p className="text-xl font-bold text-accent">
            JP <span>SAPARA</span>
          </p>
        </NavLink>
        <ul className="ml-auto hidden items-center gap-6 text-muted-foreground *:font-medium lg:flex">
          <li>
            <NavLink to={'/'} className={handleLinkClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={handleLinkClassName}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={'/works'} className={handleLinkClassName}>
              Works
            </NavLink>
          </li>
          <li>
            <button
              id="product-popover-toggle"
              popoverTarget="product-popover"
              popoverTargetAction="toggle"
              className="flex items-center gap-1.5 hover:text-foreground"
            >
              Products <ChevronDown className="stroke-2 text-accent transition-transform ease-in-out" />
            </button>
          </li>
          <li>
            <a href={'mailto:' + EMAIL} target="_blank">
              <Button size="small" className="font-medium">
                Contact
              </Button>
            </a>
          </li>
        </ul>
        <AppearanceToggle className="ms-4 hidden size-7 place-content-center lg:grid" />
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
      </nav>

      <ProductPopover />
      <MobileNavPopover />
      {/* Backdrop of navbar popovers */}
      <div
        className="pointer-events-none fixed inset-0 z-50 bg-black/10 opacity-0 transition-opacity ease-in-out peer-open:pointer-events-auto peer-open:opacity-100 dark:bg-black/40"
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
  const handlePopoverToggle = (e: ToggleEvent) => {
    const ToggleButton = document.querySelector(`#mobile-nav-toggle`);
    const isOpen = e.newState === 'open';
    ToggleButton?.toggleAttribute('open', isOpen);
  };
  return (
    <Popover
      id="mobile-nav-popover"
      handlePopoverToggle={handlePopoverToggle}
      className="-translate-y-4 opacity-0 transition-all transition-discrete ease-in-out open:translate-y-0 open:opacity-100 max-md:border-x-0 starting:open:-translate-y-4 starting:open:opacity-0"
    >
      <div className="flex">
        <AppearanceToggle className="ms-auto grid size-7 place-content-center" />
      </div>
      <ul className="mt-8 flex flex-col gap-6 text-muted-foreground *:font-medium *:not-last:border-b *:*:hover:text-foreground">
        <li>
          <NavLink to={'/'} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              Home
              <ArrowUpRight />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about'} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              About
              <ArrowUpRight />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/works'} className={handleLinkClassName}>
            <div className="flex items-center justify-between pb-2 text-3xl">
              Work
              <ArrowUpRight />
            </div>
          </NavLink>
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
      className="peer max-h-max -translate-y-4 opacity-0 transition-all transition-discrete ease-in-out open:translate-y-0 open:opacity-100 max-md:border-x-0 starting:open:-translate-y-4 starting:open:opacity-0"
      handlePopoverToggle={handlePopoverToggle}
    >
      <div className="flex justify-between">
        <p className="font-medium">Featured products</p>
        <button popoverTarget="product-popover" popoverTargetAction="hide" className="text-muted-foreground">
          Close
        </button>
      </div>
      <div className="-mx-4 mt-6 grid gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
        {FeaturedProducts.map((product) => (
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="contents" key={`featured-product-${product.name}`}>
            <div className="group flex flex-col rounded-xs p-4 hover:bg-muted/30 dark:hover:bg-muted/40">
              <div className="col-span-4 flex gap-5">
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
                    <p className="font-medium">{product.name}</p>
                    {isFuture(product.new_until) && <Badge children="New" />}
                  </div>
                  <small className="mt-1 line-clamp-2 text-pretty text-muted-foreground">{product.subtitle}</small>
                </div>
              </div>
              <picture className="mt-4 hidden overflow-hidden rounded-xs border border-border/30 lg:block">
                <img src={product.banner} alt="" className="aspect-4/5 w-full" />
              </picture>
            </div>
          </a>
        ))}
      </div>
    </Popover>
  );
};
