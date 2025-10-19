import NavBar from '@/components/nav-bar';
import OverflowLine from '@/components/overflow-line';
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
  }, [pathname]);

  return (
    <div className="mx-auto min-h-screen max-w-[1512px] bg-background lg:border-x">
      {/* Header */}
      <NavBar />
      {/* Body */}
      <Outlet />
      {/* Footer */}
      <OverflowLine />
      <Footer />
    </div>
  );
};

export default AppLayout;
