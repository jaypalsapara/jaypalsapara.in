import CaseStudies from '@/components/blocks/case-studies';
import RecentWork from '@/components/blocks/recent-work';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { IdeaText } from '@/components/idea-text';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'I’m passionate about creating innovative and high-quality projects. Here, you’ll find my work and featuring the latest projects.',
};

export default function Work() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">I</span> develop{' '}
              <span className="text-muted-foreground/50">and</span> deploy{' '}
              <span className="text-muted-foreground/50">web and experience from</span> <IdeaText />{' '}
              <span className="text-muted-foreground/50 me-1">to</span>
              <div className="inline-flex bg-yellow-300 px-6 items-center justify-center rounded-full">
                <span>final_fixed</span>
              </div>
              product.
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
      <Footer navigation={{ name: 'Service', path: '/service' }} />
    </>
  );
}
