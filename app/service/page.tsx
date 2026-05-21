import Services from '@/components/blocks/services';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
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
              <div className="bg-blue-500 inline-flex items-center justify-center h-16 px-10 rounded-full -translate-y-2.5 text-white">
                <Palette />
              </div>{' '}
              and technical{' '}
              <div className="bg-orange-500 inline-flex items-center justify-center h-16 px-10 rounded-full -translate-y-2.5 text-white">
                <Code />
              </div>{' '}
              <span className="text-muted-foreground/50">areas and offer</span> reliable services.
            </H1>
          </div>
        </section>
        <section>
          <Services />
        </section>
      </main>
      <Footer navigation={{ name: 'Home', path: '/home' }} />
    </>
  );
}
