import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="group/layout relative isolate">
      {/* <div className="absolute top-0 h-screen w-full hidden xl:block max-w-6xl border-x left-1/2 -translate-x-1/2 pointer-events-none"></div> */}
      <Header />
      <main className="max-w-screen px-2 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
