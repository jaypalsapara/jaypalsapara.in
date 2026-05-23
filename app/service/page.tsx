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
            <H1 className="font-bold flex flex-wrap items-center">
              <span className="text-muted-foreground/50">Possess&nbsp;</span>
              <span>skills&nbsp;</span>
              <span className="text-muted-foreground/50">in&nbsp;</span>
              <span className="text-muted-foreground/50">both&nbsp;</span>
              <span>creative&nbsp;</span>
              <InlineChip className="bg-blue-500">
                <Palette className="size-4 lg:size-5 xl:size-6" />
              </InlineChip>
              <span>&nbsp;and&nbsp;</span>
              <span>technical&nbsp;</span>
              <InlineChip className="bg-amber-500">
                <Code className="size-4 lg:size-5 xl:size-6" />
              </InlineChip>
              <span className="text-muted-foreground/50">&nbsp;areas&nbsp;</span>
              <span className="text-muted-foreground/50">and&nbsp;</span>
              <span className="text-muted-foreground/50">offer&nbsp;</span>
              <span>reliable&nbsp;</span>
              <span>services.</span>
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
