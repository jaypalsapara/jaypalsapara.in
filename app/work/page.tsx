import CaseStudies from '@/components/blocks/case-studies';
import RecentWork from '@/components/blocks/recent-work';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { HeadingChild, HeadingParent } from '@/components/heading-animation';
import { IdeaText } from '@/components/idea-text';
import { APP_URL } from '@/constants/app';
import { getWorkPageJsonLd } from '@/constants/schema-jsons';
import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'I’m passionate about creating innovative and high-quality projects. Here, you’ll find my work and featuring the latest projects.',
};

export default function Work() {
  return (
    <>
      <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getWorkPageJsonLd()} />
      <main className="flex w-full flex-1 flex-col relative">
        <Head>
          <link rel="canonical" href={APP_URL + `/work`} key="canonical" />
        </Head>
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <HeadingParent>
                <HeadingChild className="text-muted-foreground/50">I</HeadingChild>
                <HeadingChild>develop</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">and</HeadingChild>
                <HeadingChild>deploy</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">web</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">and</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">experience</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">from</HeadingChild>
                <HeadingChild>
                  <IdeaText />
                </HeadingChild>
                <HeadingChild className="text-muted-foreground/50 me-[0.05em]">to</HeadingChild>
                <HeadingChild className='me-0'>
                  <div className="inline-flex bg-yellow-300 px-6 items-center justify-center rounded-full">
                    <span>final_fixed</span>
                  </div>
                </HeadingChild>
                <HeadingChild>product.</HeadingChild>
              </HeadingParent>
            </H1>
          </div>
        </section>
        <section className="flex flex-col">
          <CaseStudies />
        </section>
        <section className="flex flex-col">
          <RecentWork />
        </section>
      </main>
      <Footer navigation={{ name: 'Service', path: '/service' }} cover={`/images/services-footer-cover.png`} />
    </>
  );
}
