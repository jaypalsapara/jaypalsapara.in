import Achievements from '@/components/blocks/achievements';
import Info from '@/components/blocks/info';
import Testimonial from '@/components/blocks/testimonial';
import WorkExperience from '@/components/blocks/work-experience';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import { Separator } from '@/components/ui/separator';
import { APP_URL } from '@/constants/app';
import { getAboutPageJsonLd } from '@/constants/schema-jsons';
import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { ProjectProps } from '@/types/table';
import { eq } from 'drizzle-orm';
import type { Metadata } from 'next';
import { CldImage } from 'next-cloudinary';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Over the past years, as a web developer, I've worked with companies and clients to successfully help them reach their full potential and attract new customers.",
};

type CoverProjectProps = Pick<ProjectProps, 'name' | 'slug' | 'footer_cover'>;

export default async function About() {
  const project = (await db.query.projectsTable.findFirst({
    where: eq(projectsTable.slug, 'bet-fqri'),
    columns: {
      slug: true,
      name: true,
      footer_cover: true,
    },
  })) as CoverProjectProps;

  return (
    <>
      <Script id="about-jsonld" type="application/ld+json" dangerouslySetInnerHTML={getAboutPageJsonLd()} />
      <main className="flex w-full flex-1 flex-col relative">
        <Head>
          <link rel="canonical" href={APP_URL + `/about`} key="canonical" />
        </Head>
        <section className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">
              <span className="text-muted-foreground/50">Jaypal is a</span> developer,{' '}
              <span className="text-muted-foreground/50">based in</span>{' '}
              <div className="inline-flex relative w-17 lg:w-21 xl:w-23 min-h-0 items-center -mx-2">
                <Image
                  src="/images/gujarat.png"
                  alt="Hero section image"
                  width={558}
                  height={447}
                  priority
                  className="object-contain w-full inline absolute -bottom-3.5 lg:-bottom-4"
                  data-bg-placeholder="false"
                />
              </div>{' '}
              Gujarat<span className="ms-1.5">,</span> <span className="text-muted-foreground/50">India.</span>
            </H1>
          </div>
        </section>
        <section className="flex flex-col gap-y-12">
          <div className="grid lg:grid-cols-2 px-4 gap-1">
            <CldImage
              src="images/desk.png"
              alt="Hero section image"
              width={1152}
              height={1152}
              preload
              className="object-cover min-h-170 rounded-lg lg:rounded-xl hidden lg:block w-full"
            />
            <Image
              src="/images/me.png"
              alt="Hero section image"
              width={1363}
              height={1363}
              priority
              className="object-cover min-h-170 rounded-lg lg:rounded-xl w-full"
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
          <Testimonial />
        </section>
      </main>
      <Footer
        navigation={{ name: 'Work', path: '/work' }}
        cover={`/images/projects/${project.slug}/${project.footer_cover}`}
      />
    </>
  );
}
