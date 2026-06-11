import HomeHeroSection from '@/components/blocks/home-hero-section';
import Footer from '@/components/footer';
import { APP_URL } from '@/constants/app';
import { getPersonalJsonLd } from '@/constants/schema-jsons';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  alternates: {
    canonical: APP_URL,
  },
};

export default function Home() {
  return (
    <>
      <Script id="personal-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getPersonalJsonLd()} />
      <HomeHeroSection />
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
