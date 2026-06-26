import FeedGrid from '@/components/blocks/feed-grid';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { getFeedPageJsonLd } from '@/constants/schema-jsons';
import { db } from '@/lib/db';
import { feedsTable } from '@/lib/schema';
import { asc } from 'drizzle-orm';
import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Showcase of outputs',
};

export default async function Feed() {
  const feeds = await db.select().from(feedsTable).orderBy(asc(feedsTable.sequence));
  return (
    <>
      <Script id="feed-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getFeedPageJsonLd()} />
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">An</span>{' '}
              <div className="inline-flex relative w-13 lg:w-17 xl:w-19 min-h-0 items-center -mx-1 lg:-mx-2">
                <Image
                  src="/images/folder.png"
                  alt="Hero section image"
                  width={256}
                  height={256}
                  priority
                  className="object-contain w-full inline absolute -bottom-1.5 lg:-bottom-2"
                  data-bg-placeholder="false"
                />
              </div>{' '}
              archive <span className="text-muted-foreground/50">of everything from</span> early concepts{' '}
              <span className="text-muted-foreground/50">to</span> finished products.{' '}
              <span className="text-muted-foreground/50">All shared here to inspire you.</span>
            </H1>
          </div>
        </section>
        <section className="px-4 py-4 min-h-screen">
          <FeedGrid items={feeds} />
        </section>
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} cover={'/images/about-footer.png'} textColor={'white'} />
    </>
  );
}
