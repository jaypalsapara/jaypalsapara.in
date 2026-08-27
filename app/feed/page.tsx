import FeedGrid from '@/components/blocks/feed-grid';
import { ClientCldImage } from '@/components/client-cld-image';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { HeadingChild, HeadingParent } from '@/components/heading-animation';
import { getFeedPageJsonLd } from '@/constants/schema-jsons';
import { getFeeds } from '@/dal/feed-dal';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Showcase of outputs',
};

export default async function Feed() {
  const feeds = await getFeeds();
  return (
    <>
      <Script id="feed-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getFeedPageJsonLd()} />
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <HeadingParent>
                <HeadingChild className="text-muted-foreground/50">An</HeadingChild>
                <HeadingChild>
                  <div className="inline-flex relative w-13 lg:w-17 xl:w-19 min-h-0 items-center -mx-1 lg:-mx-2">
                    <ClientCldImage
                      src="/images/folder.png"
                      alt="Folder"
                      width={256}
                      height={256}
                      preload
                      className="object-contain w-full inline absolute -bottom-1.5 lg:-bottom-2"
                      data-bg-placeholder="false"
                    />
                  </div>
                </HeadingChild>
                <HeadingChild>archive</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">of</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">everything</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">from</HeadingChild>
                <HeadingChild>early</HeadingChild>
                <HeadingChild>concepts</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">to</HeadingChild>
                <HeadingChild>finished</HeadingChild>
                <HeadingChild className="me-[0.125em]">products.</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">All</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">shared</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">here</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">to</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">inspire</HeadingChild>
                <HeadingChild className="text-muted-foreground/50">you.</HeadingChild>
              </HeadingParent>
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
