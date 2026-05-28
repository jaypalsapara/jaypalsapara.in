import Header from '@/components/header';
import NavBar from '@/components/navbar';
import ScreenIndicator from '@/components/screen-indicator';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const raveoSans = localFont({
  src: './fonts/RaveoVF.woff2',
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Jaypal Sapara',
    default: 'Jaypal Sapara',
  },
  description:
    'Full-Stack Developer — I help clients, startups, and enterprises to transform their idea into a digital product, and take it forward, so that their customers can stay engaged.',
  keywords:
    'Full Stack Developer, Laravel Developer, PHP Developer, React Developer, CI/CD Pipeline, API Development, GitHub Actions, Testing Expert, Code Review, Webhook Integration, Database designer, Freelancer, System design, Backend Developer, Frontend Developer, SPA Development, Real-time Application, WebSockets, AI Integration, Technical Consultant, Developer for hire, Gujarat, Indian Developer, Jaypal Sapara, Saas Developer, Bug fixing, Optimization, SEO, Payment Integration, Cloud Development, Deployment, AWS Developer, DigitalOcean Developer, Stripe Integration,PayPal Integration, DevOps, MySQL Developer, Tailwind CSS, Server Handler, Server Engineer, SSR, SSG, Inertia.js Rest API Developer, Web Application Developer, Backend Architecture, Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', geistMono.variable, 'font-sans', raveoSans.variable)}>
      <body className="flex min-h-full flex-col">
        <Header />
        <NavBar />
        {children}
        <ScreenIndicator />
      </body>
    </html>
  );
}
