import Services from '@/components/blocks/services';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import InlineChip from '@/components/icon-chip';
import { Code, Palette } from 'lucide-react';

export default function Service() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
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
      <Footer navigation={{ name: 'Feed', path: '/feed' }} />
    </>
  );
}
