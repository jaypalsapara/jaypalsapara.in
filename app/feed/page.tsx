import FeedGrid from '@/components/blocks/feed-grid';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { db } from '@/lib/db';
import { feedsTable } from '@/lib/schema';
import { asc } from 'drizzle-orm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Showcase of outputs',
};

export default async function Feed() {
  const feeds = await db.select().from(feedsTable).orderBy(asc(feedsTable.sequence));
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              An archive of everything from early concepts to finished products. All shared here to inspire you.
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
