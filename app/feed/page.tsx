import Footer from '@/components/footer';
import H1 from '@/components/h1';
import MasonryLayout from '@/components/masonry-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Showcase of outputs',
};

const items = [
  { id: 1, title: 'Item 1', aspectRatio: '16 / 9' },
  { id: 2, title: 'Item 2', aspectRatio: '1 / 1' },
  { id: 3, title: 'Item 3', aspectRatio: '9 / 16' },
  { id: 4, title: 'Item 4', aspectRatio: '2 / 1' },
  { id: 5, title: 'Item 5', aspectRatio: '4 / 3' },
  { id: 6, title: 'Item 6', aspectRatio: '16 / 9' },
  { id: 7, title: 'Item 7', aspectRatio: '2 / 1' },
  { id: 8, title: 'Item 8', aspectRatio: '1 / 1' },
  { id: 1, title: 'Item 1', aspectRatio: '16 / 9' },
  { id: 2, title: 'Item 2', aspectRatio: '1 / 1' },
  { id: 3, title: 'Item 3', aspectRatio: '9 / 16' },
  { id: 4, title: 'Item 4', aspectRatio: '2 / 1' },
  { id: 5, title: 'Item 5', aspectRatio: '4 / 3' },
  { id: 6, title: 'Item 6', aspectRatio: '16 / 9' },
  { id: 7, title: 'Item 7', aspectRatio: '2 / 1' },
  { id: 8, title: 'Item 8', aspectRatio: '1 / 1' },
];

export default function Feed() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">An</span> archive of everything from early sketches to finished
              products. All shared here to inspire you.
            </H1>
          </div>
        </section>
        <section className="px-4">
          <MasonryLayout
            container="window"
            gap={4}
            breakpoints={{
              0: {
                columns: 1,
              },
              1024: {
                columns: 2,
              },
              1280: {
                columns: 3,
              },
              1536: {
                columns: 4,
              },
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  aspectRatio: item.aspectRatio,
                  borderRadius: 12,
                  background: '#e5e7eb',
                  padding: 16,
                }}
              >
                <h3>{item.title}</h3>
                <p>Height: {item.height}px</p>
              </div>
            ))}
          </MasonryLayout>
        </section>
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
