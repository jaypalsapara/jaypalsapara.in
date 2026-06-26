import Services from '@/components/blocks/services';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import InlineChip from '@/components/icon-chip';
import { APP_URL } from '@/constants/app';
import { getServicePageJsonLd } from '@/constants/schema-jsons';
import { Code, Palette } from 'lucide-react';
import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Service',
  description:
    'Versatile skill set across creative and technical domains. Providing reliable services to bring your ideas to life.',
};

export default function Service() {
  return (
    <>
      <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getServicePageJsonLd()} />
      <main className="flex w-full flex-1 flex-col relative">
        <Head>
          <link rel="canonical" href={APP_URL + `/service`} key="canonical" />
        </Head>
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">Possess</span> skills{' '}
              <span className="text-muted-foreground/50">in both</span> creative{' '}
              <div className="inline-flex relative w-20 lg:w-24 xl:w-28">
                <InlineChip className="bg-blue-500 absolute -bottom-0.5 lg:-bottom-1 xl:-bottom-1.5">
                  <Palette className="size-4 lg:size-5 xl:size-6" />
                </InlineChip>
              </div>{' '}
              and technical{' '}
              <div className="inline-flex relative w-20 lg:w-24 xl:w-28">
                <InlineChip className="bg-amber-500 absolute -bottom-0.5 lg:-bottom-1 xl:-bottom-1.5">
                  <Code className="size-4 lg:size-5 xl:size-6" />
                </InlineChip>
              </div>{' '}
              <span className="text-muted-foreground/50">areas and offer</span> reliable services.
            </H1>
          </div>
        </section>
        <section>
          <Services />
        </section>
      </main>
      <Footer navigation={{ name: 'Feed', path: '/feed' }} cover={'/images/feed-footer-cover.png'} textColor="white" />
    </>
  );
}
