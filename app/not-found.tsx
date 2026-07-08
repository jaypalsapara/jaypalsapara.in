import H1 from '@/components/h1';
import P from '@/components/p';
import TransitionLink from '@/components/transition-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-6 lg:pb-8 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              404 <span className="text-muted-foreground/50">Page not found</span>
            </H1>
            <P className="mt-10 max-w-[40ch] text-muted-foreground">
              This page may have been moved or deleted. Return home to continue browsing.
            </P>
            <TransitionLink href={'/'} className={cn(buttonVariants({ className: 'w-44 h-10 mt-9 rounded-full' }))}>
              <span className="sr-only">Home</span>
              <ArrowLeft className="size-6" strokeLinejoin="miter" strokeLinecap="square" />
            </TransitionLink>
          </div>
        </section>
      </main>
    </>
  );
}
