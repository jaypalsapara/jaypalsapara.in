import Button from '@/components/button';
import Wrapper from '@/components/wrapper';
import { EMAIL, SCHEDULE_CALL_URL } from '@/data/defines';
import { CalendarClock } from 'lucide-react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <Wrapper className="pb-14 lg:pb-36">
      {/* Heading */}
      <div className="col-span-full mt-10 lg:mt-16"></div>
      <div className="col-span-full hidden justify-end md:flex">
        <Link to={'/about'}>
          <picture className="relative overflow-hidden rounded-sm">
            {/* <span className="absolute top-0 right-0 z-10 m-2 block size-2.5 rounded-sm border-t-2 border-r-2 border-accent"></span> */}
            <img src="images/me/me-light-cover.avif" alt="" className="aspect-video w-40 rounded-xs object-cover lg:w-66 dark:hidden" />
            <img src="images/me/me-dark-cover.avif" alt="" className="hidden aspect-video w-40 rounded-xs object-cover lg:w-66 dark:block" />
            <p className="mt-0.5 text-end text-sm text-muted-foreground lg:text-base">Jaypal Sapara</p>
          </picture>
        </Link>
      </div>
      {/* Availability */}
      <div className="col-span-full mt-12 hidden items-center gap-3 md:invisible md:flex lg:mt-16">
        <CalendarClock className="text-accent" />
        <p className="text-muted-foreground">
          Available from 1<sup>st</sup> December
        </p>
      </div>
      <h1 className="col-span-full mt-6 text-balance">
        <div className="highlight-line before:-top-0.5 lg:before:top-3"></div>
        {/* V1 */}
        {/* hi, i’m Jaypal a
        <br />
        <span className="text-accent">Full Stack</span>
        <br className="md:hidden" /> web developer */}
        {/* V2 */}
        I’m a full-stack developer
        <br /> <span className="text-accent">building result-driven web applications</span>
        {/* V3 */}
        {/* A full-stack developer <br /> <span className="text-accent">building web solutions for your vision</span> */}
      </h1>
      {/* Subtitle */}
      <p className="col-span-4 mt-6 lg:col-span-6">
        Leading end-to-end project development aligned with the client's vision, including requirements consultation, solution design, development, and
        deployment, and delivering scalable solutions with timely and seamless execution.
      </p>
      {/* CTA */}
      <div className="col-span-4 mt-14 lg:col-span-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <a href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Schedule a call</Button>
          </a>
          <a href={'mailto:' + EMAIL} target="_blank">
            <Button variant="outline" className="w-full">
              Email me
            </Button>
          </a>
        </div>
      </div>
      <div className="col-span-full mt-22 flex justify-end md:hidden">
        <Link to={'/about'}>
          <picture className="relative overflow-hidden rounded-sm">
            {/* <span className="absolute top-0 right-0 z-10 m-2 block size-2.5 rounded-sm border-t-2 border-r-2 border-accent"></span> */}
            <img src="images/me/me-light-cover.avif" alt="" className="aspect-video rounded-xs object-cover dark:hidden" />
            <img src="images/me/me-dark-cover.avif" alt="" className="hidden aspect-video rounded-xs object-cover dark:block" />
            <p className="mt-0.5 text-center text-sm text-muted-foreground lg:text-base">Jaypal Sapara</p>
          </picture>
        </Link>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
