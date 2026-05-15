import Footer from '@/components/footer';
import H1 from '@/components/h1';
import H4 from '@/components/h4';
import P from '@/components/p';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <div className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
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
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="grid lg:grid-cols-2 px-4 gap-1">
            <Image
              src="/images/desk.png"
              alt="Hero section image"
              width={1152}
              height={1152}
              priority
              className="object-cover min-h-170 rounded-xl hidden lg:block"
            />
            <Image
              src="/images/me.png"
              alt="Hero section image"
              width={1363}
              height={1363}
              priority
              className="object-cover min-h-170 rounded-xl"
            />
          </div>
          <div className="grid lg:grid-cols-2 px-4 py-6">
            <div className="hidden lg:block">
              <H4 className="sticky top-14">Info</H4>
            </div>
            <div className="*:text-xl md:*:text-2xl lg:*:text-[1.625rem] *:leading-tight xl:*:leading-[1.2] xl:*:text-3xl *:tracking-tight space-y-6">
              <P>
                Jaypal is a developer based in Gujarat, India. His work spans web and mobile applications—always with a
                focus on building coherent brand experiences.
              </P>
              <P>
                For the past years, he has worked with companies and clients. There, he helped establish the brand’s
                credibility, reach its full potential, and attract new customers
              </P>
              <P>Throughout his career, Jaypal has worked across SaaS, CMS, E-commerce, APIs, and Customs.</P>
            </div>
          </div>
          <div className="px-4">
            <hr />
          </div>
          <div className="grid lg:grid-cols-2 px-4 py-6">
            <div>
              <H4 className="sticky top-14">Work Experience</H4>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 justify-between">
                  <Image
                    src="/images/independent-logo.svg"
                    alt="Hero section image"
                    width={80}
                    height={80}
                    priority
                    className="object-cover size-17 rounded-xl"
                  />
                  <div className="bg-secondary py-2 px-4 rounded-full">
                    <p className="text-secondary-foreground font-semibold text-xs tracking-tight">2024 - Present</p>
                  </div>
                </div>
                <div className="mt-5">
                  <Experience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer navigation={{ name: 'About', path: '/about' }} />
    </>
  );
}

const Experience = () => {
  return (
    <div>
      <p className="text-lg font-semibold">Independent</p>
      <p className="text-xs">Freelance and partnerships</p>
      <p className="mt-4 text-muted-foreground text-lg tracking-tight text-pretty">
        For over the years I have partnered independently with teams and brands to accelerate, envision or simply help
        develop things like apps, websites.
      </p>
      <div className="grid grid-cols-3 gap-2 mt-10">
        <div className="group relative">
          <div className="w-full aspect-square overflow-hidden rounded-xl grid [grid-template-areas:stack] *:[grid-area:stack] isolate">
            <div className="bg-muted-foreground/10 py-1 px-2.5 rounded-full z-10 justify-self-end self-start mt-3 mr-3 hidden group-hover:flex">
              <p className="text-muted-foreground font-semibold text-[10px] uppercase">Case Study</p>
            </div>
            <Image
              src="/images/projects/ypca/thumbnail-square.png"
              alt="Hero section image"
              width={1560}
              height={1560}
              priority
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="px-2 mt-4">
            <p className="text-xs font-medium">
              <Link href={'#'}>
                <span className="absolute inset-0"></span>
                Yellow Pages California
              </Link>
            </p>
            <p className="text-xs font-medium text-muted-foreground">Website</p>
          </div>
        </div>
      </div>
    </div>
  );
};
