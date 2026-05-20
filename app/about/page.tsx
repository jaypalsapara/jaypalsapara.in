import Achievements from '@/components/blocks/achievements';
import Info from '@/components/blocks/info';
import Technologies from '@/components/blocks/technologies';
import Testimonial from '@/components/blocks/testimonial';
import WorkExperience from '@/components/blocks/work-experience';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default async function About() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">Jaypal is a</span> developer,{' '}
              <span className="text-muted-foreground/50">based in</span>{' '}
              <Image
                src="/images/gujarat.png"
                alt="Hero section image"
                width={558}
                height={447}
                priority
                className="object-contain h-14 lg:h-17 xl:h-18 w-max inline -mx-2.5"
              />{' '}
              Gujarat<span className="ms-1.5">,</span> <span className="text-muted-foreground/50">India.</span>
            </H1>
          </div>
        </section>
        <section className="flex flex-col gap-y-12">
          <div className="grid lg:grid-cols-2 px-4 gap-1">
            <Image
              src="/images/desk.png"
              alt="Hero section image"
              width={1152}
              height={1152}
              priority
              className="object-cover min-h-170 rounded-xl hidden lg:block w-full"
            />
            <Image
              src="/images/me.png"
              alt="Hero section image"
              width={1363}
              height={1363}
              priority
              className="object-cover min-h-170 rounded-xl w-full"
            />
          </div>
          <Info />
          <div className="px-4">
            <Separator />
          </div>
          <WorkExperience />
          <div className="px-4">
            <Separator />
          </div>
          <Achievements />
          <div className="px-4">
            <Separator />
          </div>
          <Technologies />
          <div className="px-4">
            <Separator />
          </div>
          <Testimonial />
        </section>
      </main>
      <Footer navigation={{ name: 'Work', path: '/work' }} />
    </>
  );
}
