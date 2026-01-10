import NavBar from '@/components/nav-bar';
import OverflowLine from '@/components/overflow-line';
import { APP_URL } from '@/constants/site';
import { LoaderBarContainer } from '@/contexts/loader-bar-context';
import { useLoaderBar } from '@/hooks/use-loader-bar';
import Footer from '@/sections/footer';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mobileNav = document.querySelector(`#mobile-nav-popover`) as HTMLElement;
    window.scrollTo({
      top: 0,
      behavior: 'instant', // or 'smooth' if you want animation
    });
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
        <NavBar />
        <div className="mx-auto min-h-screen max-w-[1512px] bg-background lg:border-x">
          {/* Header */}
          {/* Body */}
          <Outlet />
          {/* Footer */}
          <OverflowLine />
          <Footer />
        </div>
      </LoaderBarContainer>
    </>
  );
};

export default AppLayout;
