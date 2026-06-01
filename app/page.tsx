import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative isolate">
        <div className="grid xl:grid-cols-2 py-8 px-4 absolute w-full">
          <div className="xl:col-start-2">
            <H1 className="font-bold max-w-[16ch]">Builds result-driven web applications</H1>
            <Button className="w-44 h-10 mt-9 rounded-full" asChild>
              <Link href={'/work'}>
                <span className="sr-only">Work</span>
                <ArrowRight className="size-6" strokeLinejoin="miter" strokeLinecap="square" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-bg.png"
          alt="Hero section image"
          width={3840}
          height={2160}
          priority
          className="-z-1 min-h-210 object-cover w-full"
        />
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}
