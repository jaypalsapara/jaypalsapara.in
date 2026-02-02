import NavBar from '@/components/nav-bar';
import OverflowLine from '@/components/overflow-line';
import { APP_URL } from '@/constants/site';
import { LoaderBarContainer } from '@/contexts/loader-bar-context';
import Footer from '@/sections/footer';
import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

const AppLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const mobileNav = document.querySelector(`#mobile-nav-popover`) as HTMLElement;
    // Hide mobile popover
    mobileNav?.hidePopover();

    /**
     * Canonical
     */
    let canonicalLink = document.querySelector("link[rel='canonical']");

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', APP_URL + pathname);

    /**
     * Clean up
     */
    return () => {};
  }, [pathname]);

  return (
    <>
      <LoaderBarContainer>
        <div>
          <NavBar />
          <div className="mx-auto min-h-screen max-w-[90rem] bg-background lg:border-x">
            {/* Body */}
            <Outlet />
          </div>
        </div>
        <div className="mx-auto max-w-[90rem] bg-background">
          <OverflowLine />
          <Footer />
        </div>
      </LoaderBarContainer>
    </>
  );
};

export default AppLayout;
