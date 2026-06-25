import HomeHeroSection from '@/components/blocks/home-hero-section';
import Footer from '@/components/footer';
import { APP_URL } from '@/constants/app';
import { getHomePageJsonLd } from '@/constants/schema-jsons';
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
      <Script id="home-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getHomePageJsonLd()} />
      <HomeHeroSection />
      <Footer navigation={{ name: 'About', path: '/about' }} cover={'/images/about-footer.png'} textColor={'white'} />
    </>
  );
}
