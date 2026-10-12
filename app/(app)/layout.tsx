import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="group/layout relative isolate">
      <Header />
      <main className="max-w-screen px-2 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
