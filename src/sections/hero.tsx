import Button from '@/components/button';
import Wrapper from '@/components/wrapper';
import { EMAIL } from '@/data/defines';
import { CalendarClock } from 'lucide-react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <Wrapper className="pb-14 lg:pb-18">
      {/* Heading */}
      <div className="col-span-full mt-10 lg:mt-18"></div>
      <div className="col-span-full flex justify-end">
        <Link to={'/about'}>
          <picture className="relative overflow-hidden rounded-xs">
            <span className="absolute top-0 right-0 z-10 m-2 block size-2.5 rounded-xs border-t-2 border-r-2 border-accent"></span>
            <img src="images/me/me.webp" alt="" className="aspect-video w-36 object-cover lg:w-62 dark:hidden" />
            <img src="images/me/me-dark.webp" alt="" className="hidden aspect-video w-36 object-cover lg:w-62 dark:block" />
            <p className="mt-1.5 text-end text-sm text-muted-foreground lg:text-base">Freelancer</p>
          </picture>
        </Link>
      </div>
      {/* Availability */}
      <div className="col-span-full mt-12 flex items-center gap-3 lg:mt-18">
        <CalendarClock className="text-accent" />
        <p className="text-muted-foreground">
          Available from 1<sup>st</sup> December
        </p>
      </div>
      <h1 className="col-span-full mt-6">
        <div className="highlight-line before:top-1.5 lg:before:top-3"></div>
        hi, i’m Jaypal a
        <br />
        <span className="text-accent">Full Stack</span>
        <br className="md:hidden" /> web developer
      </h1>
      {/* Subtitle */}
      <p className="col-span-4 mt-6 lg:col-span-5">
        Leading the end-to-end development of a project based on the client's vision, covering consultation, coding, and deployment.
      </p>
      {/* CTA */}
      <div className="col-span-4 mt-14 lg:col-span-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <a href="https://cal.com/jaypal-sapara?redirect=false" target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Schedule a call</Button>
          </a>
          <a href={'mailto:' + EMAIL} target="_blank">
            <Button variant="outline" className="w-full">
              Email me
            </Button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
