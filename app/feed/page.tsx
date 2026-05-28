import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Showcase of outputs',
};

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
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
